import React from "react";
import product1 from "assets/images/insidescoop.png";
import product2 from "assets/images/saudee.png";

function Clients() {
  return (
    <div className="lg:w-1/2 m-auto grid grid-cols-2 gap-6">
      <div className="grid w-full rounded-xl border border-secondary bg-white ">
        <span className="grid place-items-center">
          <img src={product1} alt="product" className="w-1/2 object-contain " />
        </span>
      </div>
      <div className="grid w-full rounded-xl border border-secondary bg-white">
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
