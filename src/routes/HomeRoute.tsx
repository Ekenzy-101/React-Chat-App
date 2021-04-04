import React from "react";
import { useQueryClient } from "react-query";
import { Redirect } from "react-router-dom";

import { TO_CHATS_PAGE, TO_LOGIN_PAGE } from "../utils/contants";

const HomeRoute = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData("authUser");
  return <Redirect from={"/"} to={user ? TO_CHATS_PAGE : TO_LOGIN_PAGE} />;
};

export default HomeRoute;
