import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useQueryClient } from "react-query";

import { TO_CHATS_PAGE } from "../utils/contants";

interface Props {
  component: React.FC<{}>;
  AppProps?: object;
  path: string;
  exact: boolean;
}

const UnprotectedRoute: React.FC<Props> = ({
  component: C,
  AppProps,
  path,
  exact,
  ...rest
}) => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData("authUser");

  return (
    <Route
      {...rest}
      render={() =>
        user ? <Redirect to={TO_CHATS_PAGE} /> : <C {...AppProps} />
      }
    />
  );
};

export default UnprotectedRoute;
