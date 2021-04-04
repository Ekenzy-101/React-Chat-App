import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useQueryClient } from "react-query";

import { TO_LOGIN_PAGE } from "../utils/contants";

interface Props {
  component: React.FC<{}>;
  AppProps?: object;
  path: string;
  exact: boolean;
}

const ProtectedRoute: React.FC<Props> = ({
  component: C,
  AppProps,
  ...rest
}) => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData("authUser");
  console.log(user);

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
