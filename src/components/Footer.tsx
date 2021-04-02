import React from "react";
import Call from "../utils/icons/Call";
import Chat from "../utils/icons/Chat";
import Settings from "../utils/icons/Settings";
import Status from "../utils/icons/Status";

const Footer = () => {
  return (
    <div className="bg-milk-white bottom-0 max-w-full fixed flex inset-x-0 justify-between items-center py-5.5 px-8">
      <Status />
      <Call />
      <Chat />
      <Settings />
    </div>
  );
};

export default Footer;
