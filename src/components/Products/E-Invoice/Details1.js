import React from "react";
import aboutImage from "assets/images/e-invoice5.jpg";

function Details1() {
  return (
    <section className="relative m-auto lg:py-5">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 m-auto my-3 p-2 bg-black">
          <img alt="..." className=" lg:py-0" src={aboutImage} />
        </div>
        <div className="w-full md:w-7/12 m-auto lg:px-4">
          <div className="md:pr-12 text-justify lg:text-left">
            <h3 className="text-title">Peace of Mind</h3>
            <p className="mt-4 text-body text-justify">
              We are dedicated to upholding the ongoing compliance of our
              platform with forthcoming e-Invoicing regulations, relieving you
              of the responsibility to vigilantly monitor and address regulatory
              updates. With our commitment to provide a seamlessly compliant
              platform, you can focus on your core business objectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details1;
