import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
  TO_CALLREGISTRY_PAGE,
  TO_CHATS_PAGE,
  TO_SETTINGS_PAGE,
  TO_STATUSES_PAGE,
} from "../utils/contants";
import Call from "../utils/icons/Call";
import Chat from "../utils/icons/Chat";
import Settings from "../utils/icons/Settings";
import Status from "../utils/icons/Status";
import { colors } from "../utils/styles/colors";

const Footer = () => {
  const { path } = useRouteMatch();

  return (
    <div className="bg-milk-white bottom-0 max-w-full fixed flex inset-x-0 justify-between items-center py-5.5 px-8">
      <Link to={TO_STATUSES_PAGE} className="no-underline text-transparent">
        <Status color={path === TO_STATUSES_PAGE ? colors.green : "#C4C4C4"} />
      </Link>

      <Link to={TO_CALLREGISTRY_PAGE} className="no-underline text-transparent">
        <Call
          color={path === TO_CALLREGISTRY_PAGE ? colors.green : "#C6C6C6"}
        />
      </Link>

      <Link to={TO_CHATS_PAGE} className="no-underline text-transparent">
        <Chat color={path === TO_CHATS_PAGE ? colors.green : "#C4C4C4"} />
      </Link>

      <Link to={TO_SETTINGS_PAGE} className="no-underline text-transparent">
        <Settings
          color={path === TO_SETTINGS_PAGE ? colors.green : "#C6C6C6"}
        />
      </Link>
    </div>
  );
};

export default Footer;
