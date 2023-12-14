import React from "react";
import image1 from "assets/images/our-mission.png";

function Mission() {
  return (
    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
      <div className="mb-16 lg:mb-0 ">
        <div className="max-w-xl bg-white py-10 lg:py-24 px-4 lg:px-10 rounded-3xl m-auto">
          <p className="text-desc ">
            At the heart of our mission lies a commitment to{" "}
            <span className="font-bold">
              empower individuals, businesses, and entire communities through
              technology solutions that embody accountability, efficiency, and
              positive impact.
            </span>{" "}
            We envision a world where technology becomes a force for
            empowerment, a catalyst for positive change that resonates across
            the present and the future.
          </p>
        </div>
      </div>
      <img alt="logo" className="hidden lg:block lg:w-1/2" src={image1} />
    </div>
  );
}

export default Mission;
