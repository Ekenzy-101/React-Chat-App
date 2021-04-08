import React from "react";
import { Route, Redirect } from "react-router-dom";

import { TO_LOGIN_PAGE } from "../utils/contants";
import { useAuthUser } from "../hooks/useAuthUser";

interface Props {
  component: React.FC<{}>;
  AppProps?: object;
  path: string;
  exact?: boolean;
}

const ProtectedRoute: React.FC<Props> = ({
  component: C,
  AppProps,
  ...rest
}) => {
  const user = useAuthUser();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !user ? (
          <Redirect
            to={{
              pathname: TO_LOGIN_PAGE,
              state: location.pathname,
            }}
          />
        ) : (
          <C {...AppProps} />
        )
      }
    />
  );
};

export default ProtectedRoute;
