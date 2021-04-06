import { ChatRoom, Message } from "../types";

export const addMessageToRoomCache = (message: Message) => (
  oldRooms: ChatRoom[] | undefined
) => {
  let roomIndex = oldRooms?.findIndex((r) => r._id === message.roomId);
  console.log({ oldRooms });
  console.log({ roomIndex });

  if (oldRooms && roomIndex !== -1 && roomIndex !== undefined) {
    let room = { ...oldRooms[roomIndex] };
    room.messages.unshift(message);

    const copyOfRooms = [...oldRooms];
    copyOfRooms.splice(roomIndex, 1, room);

    return copyOfRooms;
  }
  return [];
};
