import React from "react";
import MainLayout from "layouts/MainLayout";
import BannerBg from "components/BannerBg";
import bannerImg from "assets/images/banner1.jpg";
import CoreValues from "components/About/CoreValues";
import Vision from "components/About/Vision";
import Mission from "components/About/Mission";
import Team from "components/About/Teams";

function AboutUs() {
  return (
    <MainLayout>
      <BannerBg image={bannerImg} text={"About Us"} />
      <div className="">
        <div className="min-h-screen max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20">
          <div className="text-header text-center mb-3 lg:mb-10">
            Our Core Values
          </div>
          <CoreValues />
        </div>
      </div>
      <div className="bg-red-50">
        <div className="min-h-screen max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20 ">
          <Mission />
        </div>
      </div>
      <div className="">
        <div className="min-h-screen max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20">
          <Vision />
        </div>
      </div>
      <div className="bg-red-50">
        <div className="min-h-screen max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20">
          <div className="mb-4 text-center text-header ">Our Managements</div>
          <Team />
        </div>
      </div>
    </MainLayout>
  );
}

export default AboutUs;
