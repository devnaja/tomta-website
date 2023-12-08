import React from "react";
import aboutImage from "assets/images/about.jpg";

function Details5() {
  return (
    <section className="relative m-auto py-5">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 m-auto my-3 p-2 bg-black">
          <img alt="..." className=" lg:py-0" src={aboutImage} />
        </div>
        <div className="w-full md:w-7/12 m-auto lg:px-4">
          <div className="md:pr-12">
            <h3 className="text-title">Visibility Dashboards</h3>
            <p className="mt-4 text-desc">
              Experience unparalleled transparency with our comprehensive
              visibility dashboards. Designed to keep both you and your
              customers informed in real-time, these dashboards provide a
              detailed overview of e-Invoice progress. Elevate your e-Invoicing
              process with our commitment to clarity and accessibility,
              fostering trust and efficient collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details5;
