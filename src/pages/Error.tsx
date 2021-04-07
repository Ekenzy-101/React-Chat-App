import React from "react";

const ErrorPage: React.FC = () => {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen  w-screen">
      <p className="font-geo-bold text-lg text-center w-10/12 sm:w-96">
        An unexpected error occured and our team is working on it.
      </p>
      <p className="font-geo-bold text-lg text-center w-10/12 sm:w-96">
        Please try refreshing the page
      </p>
    </div>
  );
};

export default ErrorPage;
