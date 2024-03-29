import React from "react";
import { useParams } from "react-router-dom";

import Call from "../utils/icons/Call";
import WhatsApp from "../utils/icons/WhatsApp";
import { colors } from "../utils/styles/colors";
import MoreVertical from "../utils/icons/MoreVertical";
import { useAuthUser } from "../hooks/useAuthUser";
import { ChatRoom } from "../utils/types";
import { PROFILE_PIC } from "../utils/contants";
interface Props {
  room?: ChatRoom;
}

const DesktopHeader: React.FC<Props> = ({ room }) => {
  const user = useAuthUser();

  const params = useParams<{ id: string }>();

  const otherUser = room?.users.find((u) => u._id !== user?._id);
  return (
    <div className="bg-green min-h-38.75 pt-4">
      <div className="ml-24 mr-22 flex items-center justify-between">
        <div className="flex">
          <WhatsApp />
          <p className="font-nova-regular ml-4 text-white">WhatsApp</p>
        </div>
        <input
          type="text"
          placeholder="Search messages"
          className="bg-dark-green border-none font-geo-regular focus:outline-none h-12 pl-6 rounded-5xl placeholder-white placeholder-opacity-40 w-125 mx-4"
        />
        <div className="flex items-center">
          <p className="font-nova-regular mr-4 text-white">{user?.name}</p>
          <img
            src={PROFILE_PIC}
            alt={user?.name}
            className="h-11.5 rounded-full w-11.5"
          />
        </div>
      </div>
      {params.id ? (
        <div className="mt-4 ml-120 mr-22 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={PROFILE_PIC}
              alt={otherUser?.name}
              className="h-14 rounded-full w-14"
            />
            <div className="ml-4 text-white">
              <p className="font-geo-bold text-base">{otherUser?.name}</p>
              <p className="font-nova-regular text-xs">online</p>
            </div>
          </div>
          <div className="flex items-center">
            <Call color={colors.white} width={22} height={22} />
            <p className="w-10"></p>
            <MoreVertical />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DesktopHeader;
