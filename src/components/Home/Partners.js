import React from "react";
import product1 from "assets/images/logo-stellar.png";
import product2 from "assets/images/logo-lenoxcells.jpg";

function Clients() {
  return (
    <div>
      <div className="mt-8 lg:w-1/2 m-auto grid grid-cols-2 gap-6">
        <div className="grid w-full transform rounded-xl border border-secondary bg-white">
          <span className="grid place-items-center">
            <img
              src={product2}
              alt="product"
              className="md:w-1/2 object-contain "
            />
          </span>
        </div>
        <div className="grid w-full transform rounded-xl border border-secondary bg-white">
          <span className="grid place-items-center">
            <img
              src={product1}
              alt="product"
              className="md:w-1/2 object-contain "
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Clients;
