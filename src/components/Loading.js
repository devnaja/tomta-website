import React from "react";
import logo from "assets/images/logo/logo-ori-transparent.png";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="grid gap-2">
        <div className="flex items-center justify-center ">
          <div className="w-28 h-28 rounded-full animate-bounce">
            <img src={logo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
