import React from "react";
import { useAuthUser } from "../hooks/useAuthUser";
import { getTimeFromISOString } from "../utils/helpers/date";
import Check from "../utils/icons/Check";
import { Message as ChatMessage } from "../utils/types";

interface Props {
  message: ChatMessage;
}

const Message: React.FC<Props> = ({ message }) => {
  const user = useAuthUser();

  const isOwner = message.userId === user?._id;

  return (
    <div
      className={
        "font-nova-regular text-sm mt-2.5 max-w-72 px-4 pt-3 pb-4 relative rounded-2.5 " +
        (isOwner ? "bg-green text-white ml-auto" : "bg-light-gray text-black")
      }
    >
      {message.text}{" "}
      <span className="absolute font-geo-regular bottom-0.5 right-2 flex items-center">
        <small className="mr-1">
          {getTimeFromISOString(message.createdAt)}
        </small>
        {isOwner ? (
          <>
            <Check />
          </>
        ) : null}
      </span>
    </div>
  );
};

export default Message;
