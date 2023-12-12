import React from "react";
import MainLayout from "layouts/MainLayout";
import Banner from "components/BannerBg";
import bannerImg from "assets/images/banner1.jpg";
import PrivacyPolicyList from "components/Policies/PrivacyPolicy";

function PrivacyPolicy() {
  return (
    <MainLayout>
      <Banner image={bannerImg} text="Privacy Policy" />
      <div className="min-h-screen max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-5 md:py-10">
        <div className=" w-full rounded-xl m-auto pb-10">
          <PrivacyPolicyList />
        </div>
      </div>
    </MainLayout>
  );
}

export default PrivacyPolicy;
