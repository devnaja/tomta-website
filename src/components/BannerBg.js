import React from "react";

function BannerBg({ image, text }) {
  return (
    <div
      className="relative flex justify-center items-center h-[25rem] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className=" bg-black opacity-50 h-[25rem] w-full"></div>

      <div className="absolute top-0 text-header font-bold text-white h-[30rem] w-full flex justify-center items-center">
        {text}
      </div>
    </div>
  );
}

export default BannerBg;