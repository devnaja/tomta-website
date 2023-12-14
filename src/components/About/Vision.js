import React from "react";
import image1 from "assets/images/our-vision.png";

function Vision() {
  return (
    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
      <img
        alt="logo"
        className="hidden lg:block lg:w-1/2 mb-5 lg:mb-0"
        src={image1}
      />
      <div className="mb-16 lg:mb-0 ">
        <div className="max-w-xl bg-red-50 py-10 lg:py-24 px-4 lg:px-10 rounded-3xl m-auto">
          <p className="text-desc">
            {" "}
            In the ever-evolving landscape of the tech industry, we aspire to be
            more than just a player; we aim to be a{" "}
            <span className="font-bold">
              leading force that sets new benchmarks for accountability,
              efficiency, and positive impact.
            </span>{" "}
            Our vision transcends the boundaries of traditional technology, and{" "}
            <span className="font-bold">
              we are committed to shaping a future where innovation is not just
              about meeting today's demands but also about contributing to a
              sustainable and harmonious tomorrow.
            </span>
          </p>
          {/* <p className="text-black text-base md:text-lg leading-relaxed tracking-wider">
            Our vision is not confined to the present challenges but extends to
            a future where technology becomes an enabler of progress,
            responsibility, and positive transformation. As we strive to be a
            leading force in the tech industry, we invite others to join us on
            this journey towards a sustainable and harmonious tomorrow.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Vision;
