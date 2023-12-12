import React from "react";
import headerImage from "assets/images/data-analytics-1.jpg";

function Details4() {
  return (
    <section className="relative m-auto lg:py-5">
      <div className="items-center flex flex-wrap">
        <div className="block lg:hidden w-full md:w-4/12 m-auto my-3 p-2 bg-black">
          <img alt="..." className="lg:py-0" src={headerImage} />
        </div>
        <div className="w-full md:w-7/12 m-auto lg:px-4">
          <div className="md:pr-12">
            <h3 className="text-title">Data Analytics</h3>
            <p className="mt-4 text-desc">
              Designed for versatility, our platform ensures seamless
              accessibility across a spectrum of devices, from desktop computers
              to mobile devices. This adaptability not only enhances user
              convenience but also underscores our commitment to providing a
              user-friendly and inclusive experience across diverse
              technological platforms.
            </p>
          </div>
        </div>
        <div className="hidden lg:block w-full md:w-4/12 m-auto p-2 bg-black">
          <img alt="..." className="max-w-full shadow-lg" src={headerImage} />
        </div>
      </div>
    </section>
  );
}

export default Details4;
