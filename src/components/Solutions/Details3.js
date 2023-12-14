import React from "react";
import headerImage from "assets/images/system-integration.jpg";

function Details3() {
  return (
    <section className="relative m-auto lg:py-5">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 m-auto my-3 p-2 bg-black">
          <img alt="..." className=" lg:py-0" src={headerImage} />
        </div>
        <div className="w-full md:w-7/12 m-auto lg:px-4">
          <h3 className="text-title">System Integration</h3>
          <p className="mt-4 text-desc">
            At Tomta, we specialize in system integration services to ensure
            that your various software and hardware components work seamlessly
            together. Our approach is centered around enhancing efficiency,
            eliminating silos, and fostering better collaboration across your
            organization. Whether you're looking to integrate existing systems
            or implement new solutions, we're dedicated to creating a cohesive
            and interconnected IT environment. Let's discuss how our expertise
            in system integration can simplify your processes, boost data
            accuracy, and ultimately contribute to the success of your business.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Details3;
