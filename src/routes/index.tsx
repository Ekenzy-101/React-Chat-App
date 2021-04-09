import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { useAuthUser } from "../hooks/useAuthUser";
import CallRegistryPage from "../pages/CallRegistry";

import ChatsContainer from "../pages/ChatsContainer";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import SettingsPage from "../pages/Settings";
import StatusPage from "../pages/Status";
import {
  TO_CALLREGISTRY_PAGE,
  TO_CHATS_PAGE,
  TO_LOGIN_PAGE,
  TO_REGISTER_PAGE,
  TO_SETTINGS_PAGE,
  TO_STATUSES_PAGE,
} from "../utils/contants";
import ProtectedRoute from "./ProtectedRoute";
import UnprotectedRoute from "./UnprotectedRoute";

const Routes = () => {
  const user = useAuthUser();
  return (
    <Switch>
      <UnprotectedRoute exact path={TO_LOGIN_PAGE} component={LoginPage} />
      <UnprotectedRoute
        exact
        path={TO_REGISTER_PAGE}
        component={RegisterPage}
      />
      <ProtectedRoute path={TO_CHATS_PAGE} component={ChatsContainer} />
      <ProtectedRoute path={TO_STATUSES_PAGE} component={StatusPage} />
      <ProtectedRoute path={TO_SETTINGS_PAGE} component={SettingsPage} />
      <ProtectedRoute
        path={TO_CALLREGISTRY_PAGE}
        component={CallRegistryPage}
      />
      <Redirect from={"*"} to={user ? TO_CHATS_PAGE : TO_LOGIN_PAGE} />
    </Switch>
  );
};

export default Routes;
