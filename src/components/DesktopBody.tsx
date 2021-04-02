import React from "react";
import SideBar from "./SideBar";
import ChatList from "./ChatList";
const DesktopBody = () => {
  return (
    <div className="flex flex-grow z-10">
      <SideBar />
      <ChatList isDesktopView />
    </div>
  );
};

export default DesktopBody;
