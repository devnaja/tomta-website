import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import waze from "assets/images/waze.jpg";
import maps from "assets/images/maps.png";
import linkedin from "assets/images/linkedin.png";

function Footer() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-primary text-white">
      <div className="container md:max-w-screen-xl text-desc justify-between items-center mx-auto  px-5 md:px-8 xl:px-6 py-16">
        <div className="contact-page grid lg:grid-cols-3 gap-5">
          <div className="text-left grid align-center">
            <p className="uppercase font-bold pb-5 text-info">
              Tomta Technology Sdn Bhd
            </p>
            <div className="pb-6">
              <p className="">Email:</p>
              <button
                className="cursor-pointer underline hover:text-blue-500"
                onClick={() =>
                  (window.location.href = `mailto:sales@tomtatechnology.com`)
                }
              >
                sales@tomtatechnology.com
              </button>
            </div>
            <div className="pb-6">
              <p>Phone Number:</p>
              <a
                className="cursor-pointer underline hover:text-blue-500"
                href="tel:03-7731 8348"
              >
                03-7731 8348
              </a>
              {/* <p className="">03-7731 8348</p> */}
            </div>
            <div className="pb-6">
              <div>Address:</div>
              <div className="capitalize">
                Unit 1001, Level 10, Uptown1, 1, Jalan SS 21/58, Damansara
                Utama, 47400 Petaling Jaya, Selangor
              </div>
            </div>
          </div>
          <div className=" md:my-1 text-left grid grid-cols-2 my-auto">
            <div className="leading-8">
              <p className="underline decoration-solid font-semibold mb-3">
                Quick Links
              </p>
              <Link to="/about">
                <p className="">About Us</p>
              </Link>
              <Link to="/solutions">
                <p>Our Solutions</p>
              </Link>
              <Link to="/products">
                <p>Our Products</p>
              </Link>
            </div>
            <div className="leading-8">
              <p className="underline decoration-solid font-semibold mb-3">
                Policies & Terms
              </p>
              <Link to="/termscondition">
                <p>Terms & Condition</p>
              </Link>
              <Link to="/privacypolicy">
                <p>Privacy Policy</p>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <a
              href={`https://waze.com/ul?ll=3.1371933537985446,101.6224789688114&navigate=yes`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-1/3 lg:w-1/2 rounded-full m-auto"
                src={waze}
                alt="waze"
              />
            </a>

            <a
              href={`https://www.google.com/maps/dir//3.1369193,101.6225527/@3.1369193,101.6199778,17z?entry=ttu`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-1/3 lg:w-1/2 rounded-full m-auto"
                src={maps}
                alt="maps"
              />
            </a>
            <a
              href={`https://my.linkedin.com/company/tomta-technology-sdn-bhd?trk=public_profile_topcard-current-company`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-1/3 lg:w-1/2 rounded-full m-auto"
                src={linkedin}
                alt="linkedin"
              />
            </a>
          </div>
        </div>
        <div className="text-center text-white  p-5 lg:px-20 lg:pt-10">
          © 2023 by Tomta Technology Sdn Bhd | All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
