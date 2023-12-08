import React from "react";
import image1 from "assets/images/our-mission.png";

function Mission() {
  return (
    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
      <img alt="logo" className="md:hidden mb-5" src={image1} />
      <div className="mb-16 lg:mb-0 ">
        <div className="max-w-xl bg-white py-10 lg:py-24 px-4 lg:px-10 rounded-3xl m-auto">
          <p className="text-black text-base md:text-lg leading-relaxed tracking-wider ">
            At the heart of our mission lies a commitment to empower
            individuals, businesses, and entire communities through technology
            solutions that embody accountability, efficiency, and positive
            impact. We envision a world where technology becomes a force for
            empowerment, a catalyst for positive change that resonates across
            the present and the future.
          </p>
          <p className="text-black text-base md:text-lg leading-relaxed tracking-wider">
            Our mission is a holistic commitment to empowerment, accountability,
            efficiency, and positive impact. As we harness the potential of
            technology, we aim to be a beacon of positive change, leaving a
            lasting and meaningful imprint on the individuals, businesses, and
            communities we serve.
          </p>
        </div>
      </div>
      <img alt="logo" className="hidden lg:block lg:w-1/2" src={image1} />
    </div>
  );
}

export default Mission;
