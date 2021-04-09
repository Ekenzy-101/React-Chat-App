import React from "react";
import { useDesktopView } from "../hooks/useDesktopView";
import Add from "../utils/icons/Add";
import { ChatRoom } from "../utils/types";
import ChatItem from "./ChatItem";

interface Props {
  rooms: ChatRoom[];
}

const ChatList: React.FC<Props> = ({ rooms }) => {
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

      {isDesktopView ? (
        <div className="border-none flex flex-col items-center mt-12 mx-auto w-52">
          <small className="font-nova-regular text-lg text-center">
            You have reached the end
          </small>
          <small className="font-nova-regular text-lg text-center text-green">
            Add more friends
          </small>
          <Add />
        </div>
      ) : null}
    </div>
  );
};

export default ChatList;
