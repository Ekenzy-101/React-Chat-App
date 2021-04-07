import React from "react";
import LoadingSpinner from "../components/common/LoadingSpinner";

const LoadingPage: React.FC = () => {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen  w-screen">
      <LoadingSpinner />
    </div>
  );
};

export default LoadingPage;
