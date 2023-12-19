import React from "react";
import image1 from "assets/images/loyaltyImg.jpg";

function Details() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 ">
        <div className="my-auto ">
          <img src={image1} alt="About" className="my-5 p-2 bg-black" />
        </div>
        <div className="mt-5 flex">
          <div className="m-auto lg:mr-20 w-4/5">
            <div className="text-header mb-5">
              Flexible Configuration to Suit Your Business Needs
            </div>
            <p className="text-justify text-body">
              We recognize that every business is unique, and our loyalty
              application is designed with flexibility in mind. The
              implementation process includes a configuration phase where we
              adapt the application to align seamlessly with your business
              requirements. Whether you have specific loyalty program
              structures, integration preferences, or customization needs, our
              team will work closely with yours to tailor the loyalty
              application accordingly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
