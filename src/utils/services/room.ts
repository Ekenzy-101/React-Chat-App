import { http } from "./http";

export const getRooms = async () => {
  const { data } = await http.get("/rooms");
  return data;
};

export const createRoom = (userId: string) => {
  return http.post("/rooms", { userId });
};
