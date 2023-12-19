import React from "react";
import aboutImage from "assets/images/e-invoice4.jpg";

function Details4() {
  return (
    <section className="relative m-auto py-5">
      <div className="items-center flex flex-wrap">
        <div className="block lg:hidden w-full md:w-4/12 m-auto my-3 p-2 bg-black">
          <img alt="..." className="lg:py-0" src={aboutImage} />
        </div>
        <div className="w-full md:w-7/12 m-auto lg:px-4">
          <div className="md:pr-12">
            <h3 className="text-title">Easy Access</h3>
            <p className="mt-4 text-body">
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
          <img alt="..." className="max-w-full shadow-lg" src={aboutImage} />
        </div>
      </div>
    </section>
  );
}

export default Details4;
