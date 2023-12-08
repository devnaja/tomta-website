import React from "react";
import image from "assets/images/hero-img-5.png";

function HeroBanner2() {
  return (
    <div className=" bg-hero-homepage bg-no-repeat bg-cover bg-center relative flex items-center justify-center overflow-hidden h-[40vh] xl:h-screen ">
      <div className="absolute inset-0 h-[40vh] xl:h-screen bg-black opacity-60"></div>
      <div className="flex m-auto h-full px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <div className="flex flex-col items-center justify-between lg:flex-row py-16 m-auto md:mt-auto md:mb-0 text-white">
          <div className=" relative ">
            <div className=" pb-5 lg:pr-5 relative">
              <h2 className="mb-6 md:max-w-md lg:max-w-lg text-center lg:text-left text-3xl lg:text-5xl font-bold leading-snug tracking-tight text-g1 sm:leading-snug">
                Empowering the Future with Innovative Solutions.
                {/* <span className="my-1 inline-block border-g4 px-4 font-bold text-g4 animate__animated animate__flash">
                  different
                </span> */}
              </h2>
              <p className="text-base max-w-lg text-center lg:text-left">
                Tomta, a leading technology company that specializes in
                providing innovative and cutting-edge technological solutions
                for businesses across various industries.
              </p>
            </div>
          </div>
          <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
            <div className="mx-auto w-fit overflow-hidden">
              <img src={image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner2;
