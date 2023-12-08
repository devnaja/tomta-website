import Products from "components/Home/Products2";
import React from "react";
import Banner from "components/BannerBg";
import bannerImg from "assets/images/banner1.jpg";
import MainLayout from "layouts/MainLayout";

function Homepage() {
  return (
    <MainLayout>
      <Banner image={bannerImg} text="Our Products" />
      <div className="min-h-screen max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20">
        <div className=" w-full rounded-xl m-auto pb-10">
          <Products />
        </div>
      </div>
    </MainLayout>
  );
}

export default Homepage;
