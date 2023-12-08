import React from "react";
import banner from "../../assets/images/bg.jpg";
import "../../input.css";

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
        <p className="font-poppins font-extrabold md:text-5xl lg:text-6xl">
          Welcome to Tomta
        </p>
        <p className="text-xs w-1/2 mx-auto mr-0 md:text-lg lg:text-xl">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      {/* <p className="font-extrabold sm:text-3xl lg:text-6xl absolute text-white text-title-shadow md:mb-15 lg:mb-24 ">Welcome to Tomta</p>
            <p className="absolute text-white text-shadow w-1/2 right-0 ss:inset-y-0 ss:right-0 text-xs ss:text-base lg:text-xl break-all">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> */}
      {/* )} */}
    </div>
  );
}

export default Slider;
