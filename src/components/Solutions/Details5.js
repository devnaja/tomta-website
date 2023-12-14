import React from "react";
import headerImage from "assets/images/machine-learning.jpeg";

function Details5() {
  return (
    <section className="relative m-auto lg:py-5">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 m-auto my-3 p-2 bg-black">
          <img alt="..." className=" lg:py-0" src={headerImage} />
        </div>
        <div className="w-full md:w-7/12 m-auto lg:px-4">
          <h3 className="text-title">Machine Learning</h3>
          <p className="mt-4 text-desc">
            At Tomta, our machine learning services harness the power of
            artificial intelligence to drive innovation and efficiency. We
            specialize in creating intelligent, self-learning systems that can
            analyze data, make predictions, and adapt to evolving scenarios.
            Whether it's automating processes, enhancing customer experiences,
            or optimizing decision-making, our machine learning solutions are
            designed to propel your business into the future. Let's explore how
            integrating machine learning can add a layer of intelligence to your
            operations and position your organization at the forefront of
            technological advancement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Details5;
