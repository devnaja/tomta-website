import React from "react";
import product1 from "assets/images/insidescoop.png";
import product2 from "assets/images/saudee.png";

function Clients() {
  return (
    <div className="lg:w-1/2 m-auto grid grid-cols-2 gap-6">
      <div className="grid w-full transform cursor-pointer rounded-xl border border-secondary bg-white p-1 transition-all hover:scale-105">
        <span className="grid place-items-center">
          <img
            src={product1}
            alt="product"
            className="md:w-1/2 object-contain "
          />
        </span>
      </div>
      <div className="grid w-full min-w-[7rem] transform cursor-pointer rounded-xl border border-secondary bg-white p-1 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25">
        <span className="grid place-items-center">
          <img
            src={product2}
            alt="product"
            className="lg:w-1/2 object-contain "
          />
        </span>
      </div>
    </div>
    // </div>
  );
}

export default Clients;
