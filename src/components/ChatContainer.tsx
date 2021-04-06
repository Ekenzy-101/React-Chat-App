import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import Attach from "../utils/icons/Attach";
import Microphone from "../utils/icons/Microphone";
import Emoji from "../utils/icons/Emoji";
import Message from "./Message";
import { useDesktopView } from "../hooks/useDesktopView";
import { ChatRoom } from "../utils/types";
import { useSocket } from "../pages/Chats";
import { eachDayOfInterval, isSameDay } from "date-fns";
import { getDateFromDateObject } from "../utils/helpers/date";
import Send from "../utils/icons/Send";

interface Props {
  room?: ChatRoom;
}

const ChatContainer: React.FC<Props> = ({ room }) => {
  const socket = useSocket();

  const [text, setText] = useState("");
  const divRef = useRef<HTMLDivElement | null>(null);

  const isDesktopView = useDesktopView();
  const params = useParams<{ id: string }>();

  const scrollToBottom = useCallback((timeout = 200) => {
    const div = divRef.current;
    if (div) {
      setTimeout(() => {
        div.scrollTop = div.scrollHeight - div.clientHeight;
      }, timeout);
    }
  }, []);

  useEffect(() => {
    scrollToBottom(0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSendMessage = () => {
    if (text?.trim()) {
      socket?.emit("message", { text, roomId: room?._id });
      setText("");
      scrollToBottom();
    }
  };

  if (!params.id || !room) return null;

  const sortedMessages = room?.messages.sort(
    (a, b) => (new Date(a.createdAt) as any) - (new Date(b.createdAt) as any)
  );

  const dayIntervals = eachDayOfInterval({
    end: new Date(sortedMessages.slice(-1)[0].createdAt),
    start: new Date(sortedMessages[0].createdAt),
  });

  return (
    <div
      className={
        "self-end flex flex-col flex-grow mx-auto px-4 " +
        (isDesktopView ? "pb-10 max-w-198" : "pb-4 w-full")
      }
    >
      <div
        className={
          "overflow-y-auto justify-end mt-auto " +
          (isDesktopView ? "max-h-fit-310 " : "max-h-fit-200 ")
        }
        ref={divRef}
      >
        {dayIntervals.map((interval, index) => (
          <div key={index}>
            <div className="font-geo-regular text-sm mb-11 mt-5 mx-auto w-fit px-5.5 py-1.5 relative rounded-2.5 bg-light-gray text-black">
              {getDateFromDateObject(interval)}
            </div>
            {sortedMessages
              .filter((m) => isSameDay(new Date(m.createdAt), interval))
              .map((message) => (
                <Message key={message._id} message={message} />
              ))}
          </div>
        ))}
      </div>
      <div
        className={
          "flex justify-center items-center " +
          (isDesktopView ? "mt-16" : "mt-6")
        }
      >
        <div className="bg-milk-white rounded-5xl flex items-center w-full pl-1 pr-7">
          <Attach />
          <textarea
            placeholder="Message"
            value={text}
            className="bg-transparent resize-none font-geo-regular focus:outline-none mr-2 max-h-14 h-12.5 pl-6 pt-3.5 placeholder-dark-gray placeholder-opacity-40  w-full"
            onChange={handleChange}
          />
          <Emoji />
        </div>

        {text.trim() ? <Send onClick={handleSendMessage} /> : <Microphone />}
      </div>
    </div>
  );
};

export default ChatContainer;
