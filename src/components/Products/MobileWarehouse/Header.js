import React from "react";
import headerImage from "assets/images/mobile-warehouse-2.png";

function Header() {
  return (
    <div className="grid lg:grid-cols-2 ">
      <div className="my-auto ">
        <img src={headerImage} alt="About" className="my-5 p-2 bg-black" />
      </div>
      <div className="flex">
        <div className="m-auto lg:mr-20 w-4/5">
          <div className="text-header mb-5">What is Mobile Warehouse?</div>
          <p className="text-justify leading-relaxed tracking-wide">
            Mobile Warehouse is a system to manage and optimize warehouse
            operations. Mobile warehousing solutions often involve the use of
            mobile applications that enable real-time inventory tracking, order
            fulfillment, and communication among warehouse staff. Mobile
            technology can enhance the efficiency and flexibility of warehouse
            management by providing on-the-go access to critical information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
