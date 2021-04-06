import React, { createContext, useContext, useEffect, useRef } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Route, Switch, useHistory } from "react-router-dom";
import { useNetworkState } from "react-use";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";

import ChatList from "../components/ChatList";
import DesktopBody from "../components/DesktopBody";
import DesktopHeader from "../components/DesktopHeader";
import Footer from "../components/Footer";
import MobileHeader from "../components/MobileHeader";
import { useDesktopView } from "../hooks/useDesktopView";
import ProtectedRoute from "../routes/ProtectedRoute";
import {
  TO_CHATROOM_PAGE,
  TO_CHATS_PAGE,
  TO_LOGIN_PAGE,
} from "../utils/contants";
import { addMessageToRoomCache } from "../utils/helpers/cache";
import { getRooms } from "../utils/services/room";
import { ChatRoom, Message } from "../utils/types";
import ChatRoomPage from "./ChatRoom";

const SocketContext = createContext<Socket<
  DefaultEventsMap,
  DefaultEventsMap
> | null>(null);

const ChatsPage: React.FC = () => {
  const { data, status } = useQuery({
    queryFn: getRooms,
    queryKey: "rooms",
    staleTime: Infinity,
  });
  const queryClient = useQueryClient();
  const socketRef = useRef<Socket<DefaultEventsMap, DefaultEventsMap> | null>(
    null
  );

  const isDesktopView = useDesktopView();
  const history = useHistory();
  const { online } = useNetworkState();
  console.log(online, navigator.onLine);

  const rooms = data as ChatRoom[];

  useEffect(() => {
    socketRef.current = io("http://localhost:5000", { withCredentials: true });

    socketRef.current.on("connect_error", (reason) => {
      if (reason.message === "Unauthorized") {
        history.push(TO_LOGIN_PAGE, history.location.pathname);
      }
    });

    socketRef.current.on("reply", (message: Message) => {
      queryClient.setQueryData("rooms", addMessageToRoomCache(message));
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  if (status === "loading") return <div>Loading</div>;
  if (status === "error") return <div>Error</div>;
  if (status === "success")
    return (
      <SocketContext.Provider value={socketRef.current}>
        <Switch>
          <Route exact path={TO_CHATS_PAGE}>
            {isDesktopView ? (
              <div className="bg-white flex flex-col relative min-h-screen max-h-screen overflow-hidden w-screen">
                <DesktopHeader />
                <DesktopBody rooms={rooms} />
              </div>
            ) : (
              <div className="bg-milk-white px-4 min-h-screen w-screen">
                <MobileHeader />
                <ChatList rooms={rooms} />
                <Footer />
              </div>
            )}
          </Route>
          <ProtectedRoute
            exact
            path={TO_CHATROOM_PAGE}
            component={ChatRoomPage}
            AppProps={{ rooms }}
          />
          <Route>Not found</Route>
        </Switch>
      </SocketContext.Provider>
    );
  return <div>Fetching</div>;
};

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (context === undefined)
    throw new Error("Socket Context should be used within its Provider");
  return context;
};

export default ChatsPage;
