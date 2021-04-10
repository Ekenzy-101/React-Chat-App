import React, { createContext, useContext, useEffect, useRef } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Switch, useHistory } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";

import { useAuthUser } from "../hooks/useAuthUser";
import ProtectedRoute from "../routes/ProtectedRoute";
import {
  TO_CHATROOM_PAGE,
  TO_CHATS_PAGE,
  TO_LOGIN_PAGE,
} from "../utils/contants";
import {
  addMessageToRoomCache,
  addAuthUserIdToUnseenMessagesInCache,
  addOtherUserIdToUnseenMessagesInCache,
  addRoomToRoomsCache,
} from "../utils/helpers/cache";
import { getRooms } from "../utils/services/room";
import { ChatRoom, Message } from "../utils/types";
import ChatRoomPage from "./ChatRoom";
import ChatsPage from "./Chats";
import ErrorPage from "./Error";
import LoadingPage from "./Loading";

const SocketContext = createContext<Socket<
  DefaultEventsMap,
  DefaultEventsMap
> | null>(null);

const ChatsContainer: React.FC = () => {
  const user = useAuthUser();
  const { data, status } = useQuery({
    queryFn: getRooms,
    queryKey: "rooms",
    staleTime: Infinity,
  });
  const queryClient = useQueryClient();
  const socketRef = useRef<Socket<DefaultEventsMap, DefaultEventsMap> | null>(
    null
  );

  const history = useHistory();

  const rooms = data as ChatRoom[];

  useEffect(() => {
    socketRef.current = io("http://localhost:5000", {
      withCredentials: true,
      query: {
        userId: user?._id!,
      },
    });

    socketRef.current.on("connect_error", (reason) => {
      if (reason.message === "Unauthorized") {
        history.push(TO_LOGIN_PAGE, history.location.pathname);
      }
    });

    socketRef.current?.on("newMessage", (message: Message) => {
      queryClient.setQueryData("rooms", addMessageToRoomCache(message));
    });

    socketRef.current?.on("newRoom", (room: ChatRoom) => {
      queryClient.setQueryData("rooms", addRoomToRoomsCache(room));
    });

    socketRef.current?.on("otherUserHasSeenMessages", (roomId: string) => {
      if (window.location.href.slice(-24) === roomId) {
        console.log("otherUserHasSeenMessages");

        queryClient.setQueryData(
          "rooms",

          addOtherUserIdToUnseenMessagesInCache({
            roomId,
            userId: user?._id!,
          })
        );
      }
    });

    socketRef.current?.on("allUsersHaveSeenMessages", (roomId: string) => {
      if (window.location.href.slice(-24) === roomId) {
        console.log("allUserHasSeenMessages");
        queryClient.setQueryData(
          "rooms",
          addAuthUserIdToUnseenMessagesInCache({
            roomId,
            userId: user?._id!,
          })
        );
      }
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  if (status === "loading") return <LoadingPage />;
  if (status === "error") return <ErrorPage />;
  if (status === "success")
    return (
      <SocketContext.Provider value={socketRef.current}>
        <Switch>
          <ProtectedRoute
            exact
            path={TO_CHATS_PAGE}
            component={ChatsPage}
            AppProps={{ rooms }}
          />
          <ProtectedRoute
            exact
            path={TO_CHATROOM_PAGE}
            component={ChatRoomPage}
            AppProps={{ rooms }}
          />
        </Switch>
      </SocketContext.Provider>
    );
  return null;
};

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (context === undefined)
    throw new Error("Socket Context should be used within its Provider");
  return context;
};

export default ChatsContainer;
