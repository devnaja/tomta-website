import React from "react";
import image1 from "assets/images/app-dev.jpg";

function Details1() {
  return (
    <section className="relative m-auto lg:py-5">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 m-auto my-3 p-2 bg-black">
          <img alt="..." className=" lg:py-0" src={image1} />
        </div>
        <div className="w-full md:w-7/12 m-auto lg:px-4">
          <div className="md:pr-12 text-justify lg:text-left">
            <h3 className="text-title">Application Development</h3>
            <p className="mt-4 text-desc">
              At Tomta, we specialize in delivering tailored application
              development solutions that are not just about coding but creating
              impactful digital experiences. Our team of skilled developers
              combines innovation with a deep understanding of your business
              goals to craft applications that resonate with your audience. From
              user-friendly interfaces to robust functionalities, our focus is
              on turning your vision into a seamlessly functioning reality.
              We're not just developers; we're your partners in leveraging
              technology to drive growth, enhance efficiency, and stay ahead in
              a dynamic digital landscape. Let's collaborate to transform your
              ideas into exceptional applications that make a lasting
              impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details1;
