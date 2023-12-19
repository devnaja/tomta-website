import React from "react";
import ceo from "assets/images/ceo.png";
import cto from "assets/images/cto.png";
import coo from "assets/images/coo.png";

function Teams() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="grid gap-12 items-center md:grid-cols-3">
          <div className="text-center block lg:hidden">
            <img
              className="w-64 h-64 mx-auto object-contain rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
              src={ceo}
              alt="man"
              loading="lazy"
              width="1000"
              height=""
            />
            <div className="my-5">
              <h4 className="text-title">Full Seng</h4>
              <span className="block text-desc">Chief Executive Officer</span>
            </div>
          </div>
          <div className="text-center">
            <img
              className="w-64 h-64 mx-auto object-contain rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={cto}
              alt="woman"
              loading="lazy"
              width="640"
              height=""
            />
            <div className="my-5">
              <h4 className="text-title">Calvin</h4>
              <span className="block text-desc py-2">
                Chief Technology Officer
              </span>
            </div>
          </div>
          <div className="text-center hidden lg:block ">
            <img
              className="w-64 h-64 mx-auto object-contain rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
              src={ceo}
              alt="man"
              loading="lazy"
              width="1000"
              height=""
            />
            <div className="my-5">
              <h4 className="text-title">Full Seng</h4>
              <span className="block text-desc py-2">
                Chief Executive Officer
              </span>
            </div>
          </div>
          <div className="text-center">
            <img
              className="w-64 h-64 mx-auto object-contain rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={coo}
              alt="woman"
              loading="lazy"
              width="1000"
              height=""
            />
            <div className="my-5">
              <h4 className="text-title">Alan Goh</h4>
              <span className="block text-desc py-2">
                Chief Operations Officer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
