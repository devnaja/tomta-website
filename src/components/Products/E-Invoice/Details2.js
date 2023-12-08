import React from "react";
import aboutImage from "assets/images/about.jpg";

function Details2() {
  return (
    <section className="relative m-auto lg:py-5">
      <div className="items-center flex flex-wrap">
        <div className="block lg:hidden w-full md:w-4/12 m-auto my-3 p-2 bg-black">
          <img alt="..." className="lg:py-0" src={aboutImage} />
        </div>
        <div className="w-full md:w-7/12 m-auto lg:px-4">
          <div className="md:pr-12">
            <h3 className="text-title">Data Security</h3>
            <p className="mt-4 text-desc">
              We place paramount importance on safeguarding your data through
              stringent security measures. Employing cutting-edge encryption and
              SSL technology, our platform ensures a fortified connection
              between our system and yours. This commitment to data security
              reflects our dedication to maintaining the highest standards of
              confidentiality and integrity.
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

export default Details2;
