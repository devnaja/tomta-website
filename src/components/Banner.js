import React from "react";
import "../input.css";

function Banner({image}) {
  return (
    <div className="slider flex items-center justify-center md:min-h-screen relative opacity-75">
      <img
        className="h-full w-full opacity-80 md:h-screen"
        src={image}
        alt="test"
      />  
    </div>
  );
}

export default Banner;
