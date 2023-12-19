import React from "react";

function HeroBanner2() {
  return (
    <div className=" bg-hero-homepage bg-no-repeat bg-cover bg-center relative overflow-hidden h-[40vh] lg:h-[50vh] xl:h-screen ">
      <div className="absolute inset-0 xl:h-screen bg-black opacity-60"></div>
      <div className="flex h-full ">
        <div className=" text-white px-5 md:px-8 xl:px-6 pt-[60px] md:pt-[101px] xl:pt-[127px] my-auto w-full">
          <div className="relative container md:max-w-screen-xl mx-auto grid tracking-wide rounded-3xl ">
            <p className="w-full lg:w-1/2 text-header text-center lg:mb-6 lg:text-left">
              Empowering the Future with Innovative Solutions
            </p>
            <p className="w-full lg:w-1/2 text-text-desc text-center lg:mb-6 lg:text-left">
              We are a leading technology company that specializes in providing
              innovative and cutting-edge technological solutions for businesses
              across various industries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner2;
