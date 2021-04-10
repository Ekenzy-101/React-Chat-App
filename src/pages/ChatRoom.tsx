import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ChatContainer from "../components/ChatContainer";
import ChatList from "../components/ChatList";
import DesktopHeader from "../components/DesktopHeader";
import MobileHeader from "../components/MobileHeader";
import ContactModal from "../components/modal/ContactModal";
import SideBar from "../components/SideBar";
import { useAuthUser } from "../hooks/useAuthUser";
import { useDesktopView } from "../hooks/useDesktopView";
import Add from "../utils/icons/Add";
import { ChatRoom, Message } from "../utils/types";
import { useSocket } from "./ChatsContainer";
interface Props {
  rooms?: ChatRoom[];
}
const ChatRoomPage: React.FC<Props> = ({ rooms }) => {
  const authUser = useAuthUser();
  const socket = useSocket();

  const [show, setShow] = useState(false);

  const isDesktopView = useDesktopView();
  const params = useParams<{ id: string }>();

  const room = rooms?.find((r) => r._id === params.id);

  useEffect(() => {
    console.log("mounted");

    socket?.on("newMessage", (message: Message) => {
      if (message.userId !== authUser?._id && message.roomId === room?._id) {
        console.log("emitted");
        socket?.emit("seenMessages", {
          messageIds: [message._id],
          roomId: room?._id,
        });
      }
    });
  }, [authUser?._id, room?._id, socket]);

  if (!room) return <div>Not Found</div>;
  return (
    <div className="bg-white flex flex-col relative min-h-screen max-h-screen overflow-hidden w-screen">
      {isDesktopView ? (
        <>
          <DesktopHeader room={room} />
          <div className="flex flex-grow z-10">
            <SideBar />
            <ChatList rooms={rooms!}>
              <div className="border-none flex flex-col items-center mt-12 mx-auto w-52">
                <small className="font-nova-regular text-lg text-center">
                  You have reached the end
                </small>
                <small className="font-nova-regular text-lg text-center text-green">
                  Add more friends
                </small>
                <Add onClick={() => setShow(true)} />
              </div>
            </ChatList>
            <ChatContainer room={room} />
            <ContactModal open={show} onClose={() => setShow(false)} />
          </div>
        </>
      ) : (
        <>
          <MobileHeader room={room} />
          <ChatContainer room={room!} />
        </>
      )}
    </div>
  );
};

export default ChatRoomPage;
