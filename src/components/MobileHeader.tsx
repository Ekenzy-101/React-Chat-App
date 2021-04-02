import React from "react";
import Camera from "../utils/icons/Camera";

const MobileHeader: React.FC = () => {
  return (
    <div className="bg-milk-white sticky top-0 z-50 h-24 pt-10 flex justify-between">
      <Camera />
      <p className="font-nova-regular text-base">Message</p>
      <p className="invisible">Hidden</p>
    </div>
  );
};

export default MobileHeader;
