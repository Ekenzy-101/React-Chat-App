import React from "react";
import { useHistory } from "react-router-dom";

import { useAuthUser } from "../hooks/useAuthUser";
import { useSocket } from "../pages/ChatsContainer";
import { PROFILE_PIC } from "../utils/contants";
import { getDateFromISOString } from "../utils/helpers/date";
import Check from "../utils/icons/Check";
import { colors } from "../utils/styles/colors";
import { ChatRoom } from "../utils/types";

interface Props {
  isActive?: boolean;
  room: ChatRoom;
}

const ChatItem: React.FC<Props> = ({ isActive, room }) => {
  const user = useAuthUser();
  const socket = useSocket();

  const history = useHistory();

  const otherUser = room.users.find((u) => u._id !== user?._id);
  const unSeenMessages = room.messages.filter(
    (m) => !m.seenBy.includes(user?._id!)
  );

  const sortedMessages = room?.messages.sort(
    (a, b) => (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any)
  );

  const latestMessage = unSeenMessages.length
    ? unSeenMessages[0]
    : sortedMessages[0];

  const handleEmitEvent = () => {
    const messageIds = unSeenMessages.map((m) => m._id);
    socket?.emit("seenMessages", { messageIds, roomId: room._id });

    history.push(`/rooms/${room._id}`);
  };

  return (
    <div
      className={
        "flex hover:bg-green hover:bg-opacity-20 cursor-pointer items-center justify-between h-20 py-2.5 px-4" +
        (isActive ? " bg-green bg-opacity-20" : "")
      }
      onClick={handleEmitEvent}
    >
      <img src={PROFILE_PIC} alt="Ekene" className="h-14 rounded-full w-14" />
      <div className="flex-grow mx-2.5">
        <p className="font-geo-bold text-base">{otherUser?.name}</p>
        <p className="font-geo-regular text-sm">{latestMessage?.text}</p>
      </div>
      <div className="flex flex-col items-center">
        {latestMessage ? (
          <p className="font-nova-regular text-sm">
            {getDateFromISOString(latestMessage.createdAt)}
          </p>
        ) : null}
        {unSeenMessages.length ? (
          <span className="bg-green font-geo-regular text-sm text-white text-center rounded-full w-5 h-5">
            {unSeenMessages.length}
          </span>
        ) : latestMessage?.userId === user?._id ? (
          <Check
            color={
              latestMessage.seenBy.length === 2 ? colors.blue : colors.black
            }
            variant="double"
          />
        ) : null}
      </div>
    </div>
  );
};

export default ChatItem;
