import React from "react";
import profilePic from "../utils/images/ekene.jpg";

interface Props {
  isActive?: boolean;
}

const ChatItem: React.FC<Props> = ({ isActive }) => {
  return (
    <div
      className={
        "flex items-center justify-between h-20 py-2.5 px-4" +
        (isActive ? " bg-green bg-opacity-20" : "")
      }
    >
      <img src={profilePic} alt="Ekene" className="h-14 rounded-full w-14" />
      <div className="flex-grow mx-2.5">
        <p className="font-geo-bold text-base">Ekene</p>
        <p className="font-geo-regular text-sm">How are you</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-nova-regular text-sm">13:09</p>
        <span className="bg-green font-geo-regular text-sm text-white text-center rounded-full w-5 h-5">
          1
        </span>
      </div>
    </div>
  );
};

export default ChatItem;
