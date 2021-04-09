import React from "react";

import ChatList from "../components/ChatList";
import DesktopBody from "../components/DesktopBody";
import DesktopHeader from "../components/DesktopHeader";
import Footer from "../components/Footer";
import MobileHeader from "../components/MobileHeader";
import { useDesktopView } from "../hooks/useDesktopView";
import Add from "../utils/icons/Add";
import { ChatRoom } from "../utils/types";
interface Props {
  rooms?: ChatRoom[];
}

const ChatsPage: React.FC<Props> = ({ rooms }) => {
  const isDesktopView = useDesktopView();

  return (
    <>
      {isDesktopView ? (
        <div className="bg-white flex flex-col relative min-h-screen max-h-screen overflow-hidden w-screen">
          <DesktopHeader />
          <DesktopBody rooms={rooms!} />
        </div>
      ) : (
        <div className="bg-milk-white px-4 relative min-h-screen w-screen">
          <MobileHeader />
          <ChatList rooms={rooms!} />
          <div className="absolute bottom-16 right-4 z-20">
            <Add />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ChatsPage;
