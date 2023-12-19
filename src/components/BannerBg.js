import React from "react";

function BannerBg({ image, text }) {
  return (
    <div
      className="relative flex justify-center items-center h-[40vh] lg:h-[50vh] xl:h-screen  bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className=" bg-slate-900 opacity-50 h-[40vh] lg:h-[50vh] xl:h-screen  w-full"></div>

      <div className="absolute text-header font-bold text-white h-[30rem] w-full flex justify-center items-center">
        {text}
      </div>
    </div>
  );
}

export default BannerBg;
