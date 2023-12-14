import React from "react";
import bannerImg from "assets/images/banner1.jpg";

function SectionOne({ title, desc }) {
  return (
    <div
      className="relative flex justify-center items-center h-[25rem] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className=" bg-black opacity-50 h-[25rem] w-full"></div>

      <div className="text-white absolute text-center p-5">
        <p className="text-header w-2/3 m-auto text-center capitalize">
          {title}
        </p>
        <p className="text-desc w-full">{desc}</p>
      </div>
    </div>
  );
}

export default SectionOne;
