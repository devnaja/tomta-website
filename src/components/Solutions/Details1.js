import React from "react";
import image1 from "assets/images/app-dev.jpg";

function Details1() {
  return (
    <section className="relative m-auto py-5 lg:h-screen grid content-center">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-1/2 lg:6/12 m-auto my-3 p-2 bg-black">
          <img alt="..." className=" lg:py-0 " src={image1} />
        </div>
        <div className="w-full lg:w-5/12 m-auto md:my-5 lg:py-4">
          <h3 className="text-title mb-5 lg:mb-8">Application Development</h3>
          <p className="mt-4 text-desc text-justify">
            At Tomta, we specialize in delivering tailored application
            development solutions that are not just about coding but{" "}
            <span className="font-bold text-primary">
              creating impactful digital experiences.
            </span>{" "}
            Our team of skilled developers combines innovation with a deep
            understanding of your business goals to craft applications that
            resonate with your audience.
          </p>
          <p className="mt-4 text-desc text-justify">
            From user-friendly interfaces to robust functionalities, our focus
            is on{" "}
            <span className="font-bold text-primary">
              turning your vision into a seamlessly functioning reality.
            </span>{" "}
            We're not just developers; we're your partners in leveraging
            technology to drive growth, enhance efficiency, and stay ahead in a
            dynamic digital landscape.{" "}
          </p>
          <p className="mt-4 text-desc text-justify">
            Let's collaborate to transform your ideas into exceptional
            applications that make a lasting impression.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Details1;
