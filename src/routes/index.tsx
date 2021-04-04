import React from "react";
import { Switch } from "react-router-dom";

import ChatsPage from "../pages/Chats";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import {
  TO_CHATS_PAGE,
  TO_LOGIN_PAGE,
  TO_REGISTER_PAGE,
} from "../utils/contants";
import HomeRoute from "./HomeRoute";
import ProtectedRoute from "./ProtectedRoute";
import UnprotectedRoute from "./UnprotectedRoute";

const Routes = () => {
  return (
    <Switch>
      <UnprotectedRoute exact path={TO_LOGIN_PAGE} component={LoginPage} />
      <UnprotectedRoute
        exact
        path={TO_REGISTER_PAGE}
        component={RegisterPage}
      />
      <ProtectedRoute exact path={TO_CHATS_PAGE} component={ChatsPage} />
      <HomeRoute />
    </Switch>
  );
};

export default Routes;
