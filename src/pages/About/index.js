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
        <div className="container md:max-w-screen-xl lg:min-h-screen mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20 px-5 md:px-8 xl:px-6">
          <div className="text-header text-center mb-3 lg:mb-10">
            Our Core Values
          </div>
          <CoreValues />
        </div>
      </div>
      <div className="bg-red-50">
        <div className="container md:max-w-screen-xl lg:min-h-screen mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20 px-5 md:px-8 xl:px-6">
          <div className="mb-4 text-center text-header lg:hidden ">
            Our Mission
          </div>
          <Mission />
        </div>
      </div>
      <div className="">
        <div className="container md:max-w-screen-xl lg:min-h-screen mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20 px-5 md:px-8 xl:px-6">
          <div className="mb-4 text-center text-header lg:hidden">
            Our Vision
          </div>
          <Vision />
        </div>
      </div>
      <div className="bg-red-50">
        <div className="container md:max-w-screen-xl lg:min-h-screen mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20 px-5 md:px-8 xl:px-6">
          <div className="mb-4 text-center text-header ">Our Managements</div>
          <Team />
        </div>
      </div>
    </MainLayout>
  );
}

export default AboutUs;
