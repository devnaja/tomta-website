import React from "react";
import Banner from "components/BannerBg";
import bannerImg from "assets/images/banner1.jpg";
import MainLayout from "layouts/MainLayout";
import Details1 from "components/Solutions/Details1";
import Details2 from "components/Solutions/Details2";
import Details3 from "components/Solutions/Details3";
import Details4 from "components/Solutions/Details4";
import Details5 from "components/Solutions/Details5";
import SectionOne from "components/SectionOne";

function LoyaltyApp() {
  return (
    <MainLayout>
      <Banner image={bannerImg} text="Our Solutions" />
      <div className="bg-red-50">
        <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-3 md:py-10">
          <Details1 />
        </div>
        <div className="bg-red-50">
          <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-3 md:py-10">
            <Details2 />
          </div>
        </div>
        <div className="bg-red-50">
          <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-3 md:py-10">
            <Details3 />
          </div>
        </div>
        <div className="bg-red-50">
          <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-3 md:py-10">
            <Details4 />
          </div>
        </div>
        <div className="bg-red-50">
          <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-3 md:py-10">
            <Details5 />
          </div>
        </div>
        <SectionOne
          title="Get Started with E-Invoice in Your Business Today"
          desc="Just click on the floating button below, and send us your questions or concerns then we will give you the help you need."
        />
      </div>
    </MainLayout>
  );
}

export default LoyaltyApp;
