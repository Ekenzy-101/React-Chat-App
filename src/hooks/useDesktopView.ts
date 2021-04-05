import { useMedia } from "react-use";

export const useDesktopView = () => {
  return useMedia(`(min-width: 770px)`);
};
