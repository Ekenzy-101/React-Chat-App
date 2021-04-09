import { useQuery } from "react-query";
import { getAuthUser } from "../utils/services/auth";
import { User } from "../utils/types";

export const useAuthUser = () => {
  const { data } = useQuery({
    queryKey: "authUser",
    queryFn: getAuthUser,
  });
  return data as User | null;
};
