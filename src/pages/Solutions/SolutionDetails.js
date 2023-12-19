import React from "react";
import Banner from "components/BannerBg";
import bannerImg from "assets/images/banner/aboutUsBanner.jpg";
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
      <div className="bg-red-50 pt-7">
        <div
          id="application-development"
          className="container md:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl px-5 md:px-8 xl:px-6"
        >
          <Details1 />
        </div>
        <div
          id="process-automation"
          className="container md:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl px-5 md:px-8 xl:px-6"
        >
          <Details2 />
        </div>
        <div
          id="system-integration"
          className="container md:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl px-5 md:px-8 xl:px-6"
        >
          <Details3 />
        </div>
        <div
          id="data-analytics"
          className="container md:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl px-5 md:px-8 xl:px-6"
        >
          <Details4 />
        </div>
        <div
          id="machine-learning"
          className="container md:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl px-5 md:px-8 xl:px-6"
        >
          <Details5 />
        </div>
        <SectionOne
          title="Connect with Us"
          desc="Just click on the floating button below, and send us your questions or concerns then we will give you the help you need."
        />
      </div>
    </MainLayout>
  );
}

export default LoyaltyApp;
