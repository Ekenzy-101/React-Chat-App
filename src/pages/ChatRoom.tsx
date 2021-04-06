import React from "react";
import { useParams } from "react-router-dom";

import ChatContainer from "../components/ChatContainer";
import DesktopBody from "../components/DesktopBody";
import DesktopHeader from "../components/DesktopHeader";
import MobileHeader from "../components/MobileHeader";
import { useDesktopView } from "../hooks/useDesktopView";
import { ChatRoom } from "../utils/types";

interface Props {
  rooms?: ChatRoom[];
}
const ChatRoomPage: React.FC<Props> = ({ rooms }) => {
  const isDesktopView = useDesktopView();
  const params = useParams<{ id: string }>();

  const room = rooms?.find((r) => r._id === params.id);
  return (
    <div className="bg-white flex flex-col relative min-h-screen max-h-screen overflow-hidden w-screen">
      {isDesktopView ? (
        <>
          <DesktopHeader room={room} />
          <DesktopBody rooms={rooms!} />
        </>
      ) : (
        <>
          <MobileHeader />
          <ChatContainer room={room!} />
        </>
      )}
    </div>
  );
};

export default ChatRoomPage;
