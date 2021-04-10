import React, { useState } from "react";
import { useParams } from "react-router-dom";

import ChatContainer from "../components/ChatContainer";
import ChatList from "../components/ChatList";
import DesktopHeader from "../components/DesktopHeader";
import Footer from "../components/Footer";
import MobileHeader from "../components/MobileHeader";
import ContactModal from "../components/modal/ContactModal";
import SideBar from "../components/SideBar";
import { useDesktopView } from "../hooks/useDesktopView";
import Add from "../utils/icons/Add";
import { ChatRoom } from "../utils/types";
interface Props {
  rooms?: ChatRoom[];
}

const ChatsPage: React.FC<Props> = ({ rooms }) => {
  const [show, setShow] = useState(false);

  const isDesktopView = useDesktopView();
  const params = useParams<{ id: string }>();

  const room = rooms?.find((r) => r._id === params.id);
  return (
    <>
      {isDesktopView ? (
        <div className="bg-white flex flex-col relative min-h-screen max-h-screen overflow-hidden w-screen">
          <DesktopHeader />
          <div className="flex flex-grow z-10">
            <SideBar />
            <ChatList rooms={rooms!}>
              <div className="border-none flex flex-col items-center mt-12 mx-auto w-52">
                <small className="font-nova-regular text-lg text-center">
                  You have reached the end
                </small>
                <small className="font-nova-regular text-lg text-center text-green">
                  Add more friends
                </small>
                <Add onClick={() => setShow(true)} />
              </div>
            </ChatList>
            <ChatContainer room={room} />
            <ContactModal open={show} onClose={() => setShow(false)} />
          </div>
        </div>
      ) : (
        <div className="bg-milk-white px-4 relative min-h-screen w-screen">
          <MobileHeader />
          <ChatList rooms={rooms!} />
          <div className="absolute bottom-16 right-4 z-20">
            <Add onClick={() => setShow(true)} />
          </div>
          <ContactModal open={show} onClose={() => setShow(false)} />
          <Footer />
        </div>
      )}
    </>
  );
};

export default ChatsPage;
