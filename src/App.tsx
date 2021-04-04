import React from "react";
import { Route, Switch } from "react-router-dom";
import ChatsPage from "./pages/Chats";

import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import {
  TO_CHATS_PAGE,
  TO_LOGIN_PAGE,
  TO_REGISTER_PAGE,
} from "./utils/contants";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path={TO_LOGIN_PAGE} component={LoginPage} />
      <Route path={TO_REGISTER_PAGE} component={RegisterPage} />
      <Route path={TO_CHATS_PAGE} component={ChatsPage} />
    </Switch>
  );
};

export default App;
