import React from "react";
import MainLayout from "layouts/MainLayout";
import Banner from "components/BannerBg";
import bannerImg from "assets/images/banner1.jpg";
import TermsConditionList from "components/Policies/TermsCondition";

function TermsCondition() {
  return (
    <MainLayout>
      <Banner image={bannerImg} text="Our Solutions" />
      <div className="min-h-screen max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20">
        <div className=" w-full rounded-xl m-auto pb-10">
          <TermsConditionList />
        </div>
      </div>
    </MainLayout>
  );
}

export default TermsCondition;
