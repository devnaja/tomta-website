import React from "react";
import aboutImage from "assets/images/e-invoice3.jpg";

function Details3() {
  return (
    <section className="relative m-auto py-5">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 m-auto my-3 p-2 bg-black">
          <img alt="..." className=" lg:py-0" src={aboutImage} />
        </div>
        <div className="w-full md:w-7/12 m-auto lg:px-4">
          <div className="md:pr-12">
            <h3 className="text-title">Fast Implementation</h3>
            <p className="mt-4 text-body text-justify">
              Driven by an unwavering commitment to efficiency and excellence,
              we guarantee a swift and seamless implementation process, ensuring
              your organization is up and running within a two-week timeframe.
              Our dedication to a streamlined onboarding experience exemplifies
              our commitment to your operational efficiency and success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details3;
