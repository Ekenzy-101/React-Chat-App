import React from "react";
import Call from "../utils/icons/Call";
import Chat from "../utils/icons/Chat";
import Status from "../utils/icons/Status";
import { colors } from "../utils/styles/colors";

const SideBar = () => {
  return (
    <div className="w-22.5 flex flex-col items-center pt-7">
      <Chat width={35} height={35} color={colors.green} />
      <span className="pt-3 pb-8 font-nova-regular text-sm">Message</span>
      <Call width={35} height={35} />
      <span className="pt-3 pb-8 font-nova-regular text-sm">Call</span>
      <Status width={35} height={35} />
      <span className="pt-3 pb-8 font-nova-regular text-sm">Status</span>
    </div>
  );
};

export default SideBar;
