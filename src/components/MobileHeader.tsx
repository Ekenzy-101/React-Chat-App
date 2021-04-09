import React from "react";
import { useHistory, useParams } from "react-router";

import { PROFILE_PIC, TO_CHATS_PAGE } from "../utils/contants";
import Back from "../utils/icons/Back";
import Camera from "../utils/icons/Camera";
import { ChatRoom } from "../utils/types";
import { useAuthUser } from "../hooks/useAuthUser";

interface Props {
  room?: ChatRoom;
}

const MobileHeader: React.FC<Props> = ({ room }) => {
  const user = useAuthUser();
  const history = useHistory();
  const params = useParams<{ id: string }>();

  if (params.id && room) {
    const otherUser = room.users.find((u) => u._id !== user?._id);
    return (
      <div className="bg-milk-white sticky top-0 z-50 h-24 pt-10 px-4 flex font-nova-regular justify-between items-center">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => history.push(TO_CHATS_PAGE)}
        >
          <Back />
          <p className="text-sm ml-1">Message</p>
        </div>
        <p className=" text-lg">{otherUser?.name}</p>
        <div className="relative rounded-full">
          <img
            src={PROFILE_PIC}
            alt={otherUser?.name}
            className="h-10 rounded-full w-10"
          />
          <span className="absolute h-3 w-3 bg-green rounded-full border-2 border-white bottom-0 right-1 -mt-1 -mr-1"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-milk-white sticky top-0 z-50 h-24 pt-10 flex justify-between">
      <Camera />
      <p className="font-nova-regular text-base">Message</p>
      <p className="invisible">Hidden</p>
    </div>
  );
};

export default MobileHeader;
