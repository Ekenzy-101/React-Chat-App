import React from "react";
import { useQuery } from "react-query";
import { Toaster } from "react-hot-toast";
import Routes from "./routes";

import { getAuthUser } from "./utils/services/auth";

const App: React.FC = () => {
  const { data, isLoading, error } = useQuery("authUser", getAuthUser);

  console.log({ data, isLoading, error });

  if (isLoading) return <div>IS LOADING</div>;
  return (
    <div>
      <Toaster
        toastOptions={{
          error: {
            style: {
              background: "rgb(253, 236, 234)",
              color: "rgb(97, 26, 21)",
              fontFamily: "Proxima Nova Regular",
            },
          },
          success: {
            style: {
              background: "rgb(237, 247, 237)",
              color: "rgb(30, 70, 32)",
              fontFamily: "Proxima Nova Regular",
            },
          },
        }}
      />
      <Routes />
    </div>
  );
};

export default App;
