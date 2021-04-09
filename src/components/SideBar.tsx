import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
  TO_CALLREGISTRY_PAGE,
  TO_CHATS_PAGE,
  TO_STATUSES_PAGE,
} from "../utils/contants";
import Call from "../utils/icons/Call";
import Chat from "../utils/icons/Chat";
import Status from "../utils/icons/Status";
import { colors } from "../utils/styles/colors";

const SideBar = () => {
  const { path } = useRouteMatch();

  return (
    <div className="w-22.5 flex flex-col items-center pt-7">
      <Link
        to={TO_CHATS_PAGE}
        className="no-underline flex flex-col items-center justify-center"
      >
        <Chat
          width={35}
          height={35}
          color={path === TO_CHATS_PAGE ? colors.green : "#C4C4C4"}
        />
        <span className="pt-3 pb-8 font-nova-regular text-sm">Message</span>
      </Link>

      <Link
        to={TO_CALLREGISTRY_PAGE}
        className="no-underline flex flex-col items-center justify-center"
      >
        <Call
          width={35}
          height={35}
          color={path === TO_CALLREGISTRY_PAGE ? colors.green : "#C6C6C6"}
        />
        <span className="pt-3 pb-8 font-nova-regular text-sm">Call</span>
      </Link>

      <Link
        to={TO_STATUSES_PAGE}
        className="no-underline flex flex-col items-center justify-center"
      >
        <Status
          width={35}
          height={35}
          color={path === TO_STATUSES_PAGE ? colors.green : "#C4C4C4"}
        />
        <span className="pt-3 pb-8 font-nova-regular text-sm">Status</span>
      </Link>
    </div>
  );
};

export default SideBar;
