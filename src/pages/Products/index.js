import Products from "components/Home/Products2";
import React from "react";
import Banner from "components/BannerBg";
import bannerImg from "assets/images/banner/aboutUsBanner.jpg";
import MainLayout from "layouts/MainLayout";

function Homepage() {
  return (
    <MainLayout>
      <Banner image={bannerImg} text="Our Products" />
      <div className="container md:max-w-screen-xl min-h-screen mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20 px-5 md:px-8 xl:px-6">
        <div className=" w-full rounded-xl m-auto">
          <Products />
        </div>
      </div>
    </MainLayout>
  );
}

export default Homepage;
