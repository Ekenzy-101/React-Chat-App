import { ChatRoom, Message } from "../types";

export const addMessageToRoomCache = (message: Message) => (
  oldRooms: ChatRoom[] | undefined
) => {
  let roomIndex = oldRooms?.findIndex((r) => r._id === message.roomId);

  if (oldRooms && roomIndex !== -1 && roomIndex !== undefined) {
    let room = { ...oldRooms[roomIndex] };
    room.messages.unshift(message);

    const copyOfRooms = [...oldRooms];
    copyOfRooms.splice(roomIndex, 1, room);
    return copyOfRooms;
  }
  return [];
};

export const addAuthUserIdToUnseenMessagesInCache = ({
  roomId,
  userId,
}: {
  roomId: string;
  userId: string;
}) => (oldRooms: ChatRoom[] | undefined) => {
  let roomIndex = oldRooms?.findIndex((r) => r._id === roomId);

  if (oldRooms && roomIndex !== -1 && roomIndex !== undefined) {
    let room = { ...oldRooms[roomIndex] };

    room.messages.forEach((m) => {
      if (!m.seenBy.includes(userId)) {
        m.seenBy.push(userId);
      }
    });

    const copyOfRooms = [...oldRooms];
    copyOfRooms.splice(roomIndex, 1, room);
    return copyOfRooms;
  }
  return [];
};

export const addOtherUserIdToUnseenMessagesInCache = ({
  roomId,
  userId,
}: {
  roomId: string;
  userId: string;
}) => (oldRooms: ChatRoom[] | undefined) => {
  let roomIndex = oldRooms?.findIndex((r) => r._id === roomId);

  if (oldRooms && roomIndex !== -1 && roomIndex !== undefined) {
    let room = { ...oldRooms[roomIndex] };

    const otherUser = room.users.find((u) => u._id !== userId);

    if (otherUser) {
      room.messages.forEach((m) => {
        if (!m.seenBy.includes(otherUser._id)) {
          m.seenBy.push(otherUser._id);
        }
      });
    }

    const copyOfRooms = [...oldRooms];
    copyOfRooms.splice(roomIndex, 1, room);

    return copyOfRooms;
  }
  return [];
};
