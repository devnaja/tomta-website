import React from "react";
import aboutImage from "assets/images/invoice1.jpg";

function Header() {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-5">
      <div className="my-auto ">
        <img src={aboutImage} alt="About" className="my-5 p-2 bg-black" />
      </div>
      <div className="mt-5">
        <div className="mx-auto lg:mr-20 lg:w-4/5">
          <div className="text-center text-header lg:text-left mb-5">
            E-Invoicing In Malaysia
          </div>
          <p className="text-justify text-body">
            The Inland Revenue Board of Malaysia (IRBM) has unveiled a phased
            introduction of e-Invoicing, aligning with the government's broader
            initiative to fortify digital service infrastructure and propel
            digital transformation.
          </p>
          <br></br>
          <p className="text-justify text-body">
            This incremental rollout commences as early as August 2024 for
            companies with an annual turnover exceeding RM100 million.
            Subsequently, all companies will be mandated to comply with this
            requirement starting from July 2025 onward, marking a pivotal step
            towards fostering a digitally-driven business environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
