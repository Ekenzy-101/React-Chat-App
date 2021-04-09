import React from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from "react-hot-toast";

import LoadingPage from "./pages/Loading";
import ErrorPage from "./pages/Error";
import Routes from "./routes";
import { getAuthUser } from "./utils/services/auth";

const App: React.FC = () => {
  const { status } = useQuery({
    queryKey: "authUser",
    queryFn: getAuthUser,
  });

  if (status === "loading") return <LoadingPage />;
  if (status === "error") return <ErrorPage />;
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
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
};

export default App;
