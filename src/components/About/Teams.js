import React from "react";
import ceo from "assets/images/ceo.png";
import cto from "assets/images/cto.png";
import coo from "assets/images/coo.png";

function Teams() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="grid gap-12 items-center md:grid-cols-3">
          <div className="space-y-4 text-center">
            <img
              className="w-64 h-64 mx-auto object-contain rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={cto}
              alt="woman"
              loading="lazy"
              width="640"
              height=""
            />
            <div>
              <h4 className="text-2xl">Calvin</h4>
              <span className="block text-sm text-gray-500">
                Chief Technology Officer
              </span>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <img
              className="w-64 h-64 mx-auto object-contain rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
              src={ceo}
              alt="man"
              loading="lazy"
              width="1000"
              height=""
            />
            <div>
              <h4 className="text-2xl">Full Seng</h4>
              <span className="block text-sm text-gray-500">
                Chief Executive Officer
              </span>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <img
              className="w-64 h-64 mx-auto object-contain rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={coo}
              alt="woman"
              loading="lazy"
              width="1000"
              height=""
            />
            <div>
              <h4 className="text-2xl">Alan Goh</h4>
              <span className="block text-sm text-gray-500">
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
