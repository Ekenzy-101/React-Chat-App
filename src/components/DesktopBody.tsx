import React from "react";
import { useParams } from "react-router";

import SideBar from "./SideBar";
import ChatList from "./ChatList";
import ChatContainer from "./ChatContainer";
import { ChatRoom } from "../utils/types";
interface Props {
  rooms: ChatRoom[];
}

const DesktopBody: React.FC<Props> = ({ rooms }) => {
  const params = useParams<{ id: string }>();
  const room = rooms?.find((r) => r._id === params.id);
  return (
    <div className="flex flex-grow z-10">
      <SideBar />
      <ChatList rooms={rooms} />
      <ChatContainer room={room} />
    </div>
  );
};

export default DesktopBody;
