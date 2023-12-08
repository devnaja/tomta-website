import React from "react";
import aboutImage from "assets/images/loyalty-app.jpg";

function Header() {
  return (
    <div className="grid lg:grid-cols-2 ">
      <div className="my-auto ">
        <img src={aboutImage} alt="About" className="my-5 p-2 bg-black" />
      </div>
      <div className="flex">
        <div className="m-auto lg:mr-20 w-4/5">
          <div className="text-header mb-5">
            Engaging the modern customers with loyalty Program Application
          </div>
          <p className="text-justify leading-relaxed tracking-wide">
            A loyalty application is a mobile application designed to enhance
            customer loyalty and engagement for businesses. It serves as a
            platform through which businesses can implement and manage customer
            loyalty programs. The primary purpose of a loyalty app is to
            incentivize repeat business, encourage customer retention, and
            reward users for their ongoing loyalty to a brand or business.
          </p>
          {/* <br></br>
          <p className="text-justify leading-relaxed tracking-wide">
            Our skilled developers specialize in crafting cutting-edge loyalty
            apps, tailored to your brand’s unique requirements. With seamless
            performance on both Android and iOS platforms, our customized
            loyalty app will enhance customer engagement and retention, ensuring
            unparalleled features and user satisfaction. Invest in our services
            to create a loyalty app that fosters lasting customer relationships
            and drives business growth.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
