import React from "react";
import image from "assets/images/hero-img-5.png";

function HeroBanner2() {
  return (
    <div className=" bg-hero-homepage bg-no-repeat bg-cover bg-center relative flex items-center justify-center overflow-hidden h-[40vh] lg:h-[50vh] xl:h-screen ">
      <div className="absolute inset-0 xl:h-screen bg-black opacity-60"></div>
      <div className="flex m-auto h-full md:max-w-screen-xl ">
        <div className="flex flex-col items-center justify-between lg:flex-row text-white px-5 md:px-8 xl:px-6 pt-[60px] md:pt-[101px] xl:pt-[127px] my-auto">
          <div className="relative">
            <p className="text-header text-center md:max-w-md lg:max-w-lg lg:mb-6 lg:text-left pb-0">
              Empowering the Future with Innovative Solutions.
            </p>
            <p className="text-desc max-w-lg text-center lg:text-left">
              Tomta, a leading technology company that specializes in providing
              innovative and cutting-edge technological solutions for businesses
              across various industries.
            </p>
          </div>
          <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
            <div className="mx-auto w-fit overflow-hidden">
              <img src={image} alt="banner" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner2;
