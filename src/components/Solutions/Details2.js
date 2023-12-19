import React from "react";
import rpa from "assets/images/rpa2.jpg";

function Details2() {
  return (
    <section className="relative m-auto py-5 lg:h-screen grid content-center">
      <div className="items-center flex flex-wrap">
        <div className="block lg:hidden w-full md:w-1/2 lg:6/12 m-auto my-3 p-2 bg-black">
          <img alt="..." className="lg:py-0 " src={rpa} />
        </div>
        <div className="w-full lg:w-5/12 m-auto md:my-5 lg:py-4">
          <h3 className="text-info lg:mb-8">Process Automation</h3>
          <p className="mt-4 text-desc text-justify">
            We specialize in process automation services designed to streamline
            and elevate your business operations. Our tailored solutions aim to{" "}
            <span className="font-bold text-primary">
              reduce manual workload, minimize errors, and enhance overall
              efficiency.
            </span>{" "}
            <p className="mt-4 text-desc text-justify">
              By automating repetitive tasks and workflows, we empower your team
              to focus on strategic initiatives, driving productivity and
              innovation. From customizing automation solutions to seamless
              integration with existing systems, we're committed to{" "}
              <span className="font-bold text-primary">
                optimizing your processes for maximum impact.
              </span>
            </p>
            <p className="mt-4 text-desc text-justify">
              Let's explore how our expertise in process automation can
              revolutionize your business operations and unlock new levels of
              productivity.
            </p>
          </p>
        </div>
        <div className="hidden lg:block w-full md:w-1/2 lg:6/12 m-auto my-3 p-2 bg-black">
          <img alt="..." className="max-w-full shadow-lg" src={rpa} />
        </div>
      </div>
    </section>
  );
}

export default Details2;
