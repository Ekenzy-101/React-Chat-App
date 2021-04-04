import { http } from "./http";

export const login = async (formData: Record<string, any>) => {
  const { data } = await http.post("/auth/login", formData);
  return data;
};

export const signUp = async (formData: Record<string, any>) => {
  const { data } = await http.post("/auth/register", formData);
  return data;
};

export const getAuthUser = async () => {
  const { data } = await http.get("/auth/me");
  return data;
};
