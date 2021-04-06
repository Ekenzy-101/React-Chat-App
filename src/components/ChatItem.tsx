import React from "react";
import { useHistory } from "react-router";
import { useAuthUser } from "../hooks/useAuthUser";
import { getDateFromISOString } from "../utils/helpers/date";
import profilePic from "../utils/images/ekene.jpg";
import { ChatRoom } from "../utils/types";

interface Props {
  isActive?: boolean;
  room: ChatRoom;
}

const ChatItem: React.FC<Props> = ({ isActive, room }) => {
  const user = useAuthUser();

  const history = useHistory();

  const otherUser = room.users.find((u) => u._id !== user?._id);
  const unSeenMessages = room.messages.filter((m) => m.status !== "seen");
  const latestMessage = room.messages[0];
  return (
    <div
      className={
        "flex hover:bg-green hover:bg-opacity-20 cursor-pointer items-center justify-between h-20 py-2.5 px-4" +
        (isActive ? " bg-green bg-opacity-20" : "")
      }
      onClick={() => history.push(`/rooms/${room._id}`)}
    >
      <img src={profilePic} alt="Ekene" className="h-14 rounded-full w-14" />
      <div className="flex-grow mx-2.5">
        <p className="font-geo-bold text-base">{otherUser?.name}</p>
        <p className="font-geo-regular text-sm">{latestMessage?.text}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-nova-regular text-sm">
          {getDateFromISOString(latestMessage.createdAt)}
        </p>
        {unSeenMessages.length ? (
          <span className="bg-green font-geo-regular text-sm text-white text-center rounded-full w-5 h-5">
            {unSeenMessages.length}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default ChatItem;
