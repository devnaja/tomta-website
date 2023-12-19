import React from "react";
import accountability from "assets/images/account.png";
import efficiency from "assets/images/efficiency.png";
import positive from "assets/images/positive.png";

function CoreValues() {
  return (
    <div className="">
      <div className="container flex flex-col mx-auto">
        <div className="w-full draggable">
          <div className="container flex flex-col items-center gap-16 mx-auto">
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center gap-3 px-8 py-10 bg-red-50  rounded-3xl">
                <span>
                  <img src={accountability} />
                </span>
                <p className="text-title m-2 font-semibold">Accountability</p>
                <p className="text-desc tracking-wide text-justify">
                  We take responsibility for our actions, decisions, and their
                  consequences. Our commitment to accountability extends to
                  every aspect of our work, ensuring that we deliver reliable
                  and trustworthy solutions to our clients and partners.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 px-8 py-10 bg-red-50 rounded-3xl ">
                <span>
                  <img src={efficiency} />
                </span>
                <p className="text-title m-2 font-semibold">Efficiency</p>
                <p className="text-desc tracking-wide text-justify">
                  In a rapidly changing technological environment, efficiency is
                  key. At Tomta, we strive for excellence in optimizing
                  processes, streamlining operations, and delivering solutions
                  that maximize performance and minimize resource usage.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 px-8 py-10 bg-red-50 rounded-3xl">
                <span>
                  <img src={positive} />
                </span>
                <p className="text-title m-2 font-semibold">
                  Positively Impactful
                </p>
                <p className="text-desc tracking-wide text-justify">
                  We go beyond merely creating products and services; we aim to
                  make a positive impact on society. Whether it's through
                  eco-friendly practices, socially responsible initiatives, or
                  solutions that enhance the well-being of individuals, we are
                  dedicated to making a meaningful difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreValues;
