import React from "react";
import { useDesktopView } from "../hooks/useDesktopView";
import { ChatRoom } from "../utils/types";
import ChatItem from "./ChatItem";

interface Props {
  rooms: ChatRoom[];
}

const ChatList: React.FC<Props> = ({ rooms, children }) => {
  const isDesktopView = useDesktopView();
  return (
    <div
      className={
        "divide-y divide-border " +
        (isDesktopView
          ? "bg-milk-white max-h-fit-150 overflow-auto -mt-19.5 pt-6 rounded-t-2xl w-80 z-20"
          : "")
      }
    >
      {rooms?.map((room) => (
        <ChatItem key={room._id} room={room} />
      ))}

      {children}
    </div>
  );
};

export default ChatList;
