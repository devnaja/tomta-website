import React from "react";
import map from "../assets/images/map.png";
import { NavLink, Link } from "react-router-dom";
import Maps from "./Maps";

function ContactUs() {

  
  return (
    <div className="text-center px-5 md:px-20 py-5 md:py-10 bg-primary text-white">
      <div className="contact-page grid sm:grid-cols-3 gap-10 ">
        {/* <div className="md:columns-3 gap-10"> */}
        <div className="text-left grid align-center">
          <p className="uppercase font-bold">Tomta Technology</p>
          <div>
            <p>Email:</p>
            <p className="font-bold text-14">tomtatechnology.com</p>
          </div>
          <div>
            <p>Phone Number:</p>
            <p className="font-bold text-14">03-3753729</p>
          </div>
          <div>
            <div>Address:</div>
            <div className="font-bold text-14">
              Uptown 1, 1, Jalan SS 21/58, Damansara Utama, 47400 Petaling Jaya,
              Selangor
            </div>
          </div>
        </div>
        <div className="my-5 md:my-1 text-left grid grid-cols-2 my-auto">
          <div className="leading-8">
            <p className="underline decoration-solid font-semibold mb-3">
              Quick Links
            </p>
            <Link to="/about">
              <p>About Us</p>
            </Link>
            <Link to="/solution-product">
              <p>Our Solutions</p>
            </Link>
          </div>
          <div className="leading-8">
            <p className="underline decoration-solid font-semibold mb-3">
              Policies & Terms
            </p>
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="sm:my-auto">
          <img src={map} alt="Map" />
        </div>

        
      </div>
      {/* <Maps /> */}

    </div>
  );
}



export default ContactUs;


