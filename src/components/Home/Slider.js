import React from "react";
import banner from "assets/images/bg.jpg";

function Slider() {
  return (
    <div className="max-w-screen slider flex items-center justify-center md:min-h-screen relative ">
      {/* {bannerList.map((banner)=> */}
      <img
        className="h-full w-full rounded-es-full opacity-80 md:h-screen z-0"
        src={banner}
        alt="test"
      />
      <div className="absolute text-white top-5 right-5 text-right md:top-28 md:right-24 lg:right-28">
        <p className="text-header">Welcome to Tomta</p>
        <p className="text-desc w-1/2 mx-auto mr-0">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
    </div>
  );
}

export default Slider;
