import React from "react";
import image1 from "assets/images/warehouse1.jpg";

function Characteristic() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 ">
        <div className="my-auto ">
          <img src={image1} alt="About" className="my-5 p-2 bg-black" />
        </div>
        <div className="mt-5 flex">
          <div className="m-auto lg:mr-20 w-4/5">
            <div className="text-header mb-5 capitalize">
              flexibility of Mobile warehousing
            </div>
            <p className="text-justify text-desc">
              Mobile warehousing takes many forms. In some cases, it involves
              pre-loaded trailers packed with goods and ready to go. In other
              situations, it could involve barges full of seasonal items ready
              to ship. Containers are another common option for mobile
              warehousing. What’s important is that mobile warehousing offers
              valuable flexibility. These options can be quickly moved to where
              they are needed, providing companies with storage in real time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Characteristic;
