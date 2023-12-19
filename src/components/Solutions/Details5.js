import React from "react";
import headerImage from "assets/images/machine-learning-2.jpg";

function Details5() {
  return (
    <section className="relative m-auto py-5 lg:h-screen grid content-center">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-1/2 lg:6/12 m-auto my-3 p-2 bg-black">
          <img alt="..." className=" lg:py-0" src={headerImage} />
        </div>
        <div className="w-full lg:w-5/12 m-auto lg:px-4">
          <h3 className="text-info font-semibold mb-5 lg:mb-8">
            Machine Learning
          </h3>
          <p className="mt-4 text-desc text-justify">
            We specialize in{" "}
            <span className="font-bold text-primary">
              creating intelligent, self-learning systems that can analyze data,
              make predictions, and adapt to evolving scenarios.
            </span>{" "}
            Whether it's automating processes, enhancing customer experiences,
            or optimizing decision-making, our machine learning solutions are
            designed to propel your business into the future.
          </p>
          <p className="mt-4 text-desc text-justify">
            Let's explore how integrating machine learning can add a layer of
            intelligence to your operations and position your organization at
            the forefront of technological advancement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Details5;
