import { useQueryClient } from "react-query";
import { User } from "../utils/types";

export const useAuthUser = () => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData("authUser") as User | null;
};
