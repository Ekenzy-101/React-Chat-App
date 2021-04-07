export interface ChatRoom {
  _id: string;
  users: User[];
  messages: Message[];
}

export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface Message {
  _id: string;
  createdAt: string;
  image: string;
  roomId: string;
  seenBy: string[];
  status: "active" | "deleted";
  text: string;
  userId: string;
  updatedAt: string;
}
