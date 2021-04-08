import React from "react";
import { Route, Redirect } from "react-router-dom";

import { TO_CHATS_PAGE } from "../utils/contants";
import { useAuthUser } from "../hooks/useAuthUser";

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
  const user = useAuthUser();

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
