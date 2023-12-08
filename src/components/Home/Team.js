import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "assets/images/user4.jpg";
import image2 from "assets/images/user5.jpg";
import image3 from "assets/images/user6.jpg";

function Team() {
  return (
    <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto grid content-center min-h-screen text-center tracking-wide py-5 md:py-10">
      <div className="text-justify w-full py-10 md:py-20 rounded-xl m-2">
        <div className="font-semibold text-4xl tracking-wider mb-14">
          Our Managements
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3 bg-red-100">
            <div className="h-full rounded-xl bg-[#ffffff]/60 overflow-hidden">
              <img
                className="h-max w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src={image1}
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-md title-font font-medium mb-1">
                  Title
                </h2>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 bg-red-100">
            <div className="h-full rounded-xl bg-[#ffffff]/60 overflow-hidden">
              <img
                className="h-max w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src={image2}
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-md title-font font-medium mb-1">
                  Title
                </h2>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 bg-red-100">
            <div className="h-full rounded-xl bg-[#ffffff]/60 overflow-hidden">
              <img
                className="lg:h-max w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src={image3}
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-md title-font font-medium mb-1">
                  Title
                </h2>

                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
