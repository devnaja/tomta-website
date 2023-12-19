import React from "react";
import headerImage from "assets/images/system-integration-2.jpg";

function Details3() {
  return (
    <section className="relative m-auto py-5 lg:h-screen grid content-center">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-1/2 lg:6/12 m-auto my-3 p-2 bg-black">
          <img
            alt="..."
            className=" lg:py-0 w-1/2 m-auto lg:w-full"
            src={headerImage}
          />
        </div>
        <div className="w-full lg:w-5/12 m-auto lg:px-4">
          <h3 className="text-info mb-5 lg:mb-8">System Integration</h3>
          <p className="mt-4 text-desc text-justify">
            At Tomta, we specialize in system integration services to ensure
            that your various software and hardware components work seamlessly
            together. Our approach is centered around{" "}
            <span className="font-bold text-primary">
              enhancing efficiency, eliminating silos, and fostering better
              collaboration
            </span>{" "}
            across your organization.
          </p>
          <p className="mt-4 text-desc text-justify">
            Whether you're looking to{" "}
            <span className="font-bold text-primary">
              integrate existing systems or implement new solutions
            </span>
            , we're dedicated to creating a cohesive and interconnected IT
            environment.
          </p>
          <p className="mt-4 text-desc text-justify">
            Let's discuss how our expertise in system integration can simplify
            your processes, boost data accuracy, and ultimately contribute to
            the success of your business.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Details3;
