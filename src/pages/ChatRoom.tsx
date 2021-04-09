import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import ChatContainer from "../components/ChatContainer";
import DesktopBody from "../components/DesktopBody";
import DesktopHeader from "../components/DesktopHeader";
import MobileHeader from "../components/MobileHeader";
import { useAuthUser } from "../hooks/useAuthUser";
import { useDesktopView } from "../hooks/useDesktopView";
import { ChatRoom, Message } from "../utils/types";
import { useSocket } from "./ChatsContainer";
interface Props {
  rooms?: ChatRoom[];
}
const ChatRoomPage: React.FC<Props> = ({ rooms }) => {
  const authUser = useAuthUser();
  const socket = useSocket();
  // const queryClient = useQueryClient();

  const isDesktopView = useDesktopView();
  const params = useParams<{ id: string }>();

  const room = rooms?.find((r) => r._id === params.id);

  useEffect(() => {
    socket?.on("newMessage", (message: Message) => {
      if (message.userId !== authUser?._id) {
        console.log("emitted");
        socket?.emit("seenMessages", {
          messageIds: [message._id],
          roomId: room?._id,
        });
      }
    });
  }, [params.id]);

  if (!room) return <div>Not Found</div>;
  return (
    <div className="bg-white flex flex-col relative min-h-screen max-h-screen overflow-hidden w-screen">
      {isDesktopView ? (
        <>
          <DesktopHeader room={room} />
          <DesktopBody rooms={rooms!} />
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
