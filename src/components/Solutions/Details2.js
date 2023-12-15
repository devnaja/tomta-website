import React from "react";
import rpa from "assets/images/rpa.jpg";

function Details2() {
  return (
    <section className="relative m-auto lg:py-5">
      <div className="items-center flex flex-wrap">
        <div className="block lg:hidden w-full md:w-4/12 m-auto my-3 p-2 bg-black">
          <img alt="..." className="lg:py-0" src={rpa} />
        </div>
        <div className="w-full md:w-7/12 m-auto lg:px-4">
          <h3 className="text-title">Process Automation</h3>
          <p className="mt-4 text-desc">
            We specialize in process automation services designed to streamline
            and elevate your business operations. Our tailored solutions aim to
            reduce manual workload, minimize errors, and enhance overall
            efficiency. By automating repetitive tasks and workflows, we empower
            your team to focus on strategic initiatives, driving productivity
            and innovation. From customizing automation solutions to seamless
            integration with existing systems, we're committed to optimizing
            your processes for maximum impact. Let's explore how our expertise
            in process automation can revolutionize your business operations and
            unlock new levels of productivity.
          </p>
        </div>
        <div className="hidden lg:block w-full md:w-4/12 m-auto p-2 bg-black">
          <img alt="..." className="max-w-full shadow-lg" src={rpa} />
        </div>
      </div>
    </section>
  );
}

export default Details2;
