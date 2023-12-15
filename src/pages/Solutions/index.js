import React from "react";
import MainLayout from "layouts/MainLayout";
import Banner from "components/BannerBg";
import bannerImg from "assets/images/banner/aboutUsBanner.jpg";
import ListingSolutions from "components/Solutions/Listing";

function Homepage() {
  return (
    <MainLayout>
      <Banner image={bannerImg} text="Our Solutions" />
      <div className="container md:max-w-screen-xl min-h-screen mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20 px-5 md:px-8 xl:px-6">
        <div className=" w-full rounded-xl m-auto">
          <ListingSolutions />
        </div>
      </div>
    </MainLayout>
  );
}

export default Homepage;
