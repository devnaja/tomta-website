import React from "react";
import MainLayout from "layouts/MainLayout";
import Banner from "components/BannerBg";
import bannerImg from "assets/images/banner/aboutUsBanner.jpg";
import Header from "components/Products/LoyaltyApp/Header";
import Benefits from "components/Products/LoyaltyApp/Benefits";
import Features from "components/Products/LoyaltyApp/Features";
import Details from "components/Products/LoyaltyApp/Details";
import SectionOne from "components/SectionOne";
import { useNavigate } from "react-router-dom";

function LoyaltyApp() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <MainLayout>
      <Banner image={bannerImg} text="Loyalty Application" />
      <div className="">
        <div className="container md:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20 px-5 md:px-8 xl:px-6">
          <div className="lg:mb-10 underline">
            <button onClick={goBack} className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
                className="m-auto mr-2"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
              </svg>
              <p className="font-semibold p-0">Back</p>
            </button>
          </div>
          <Header />
        </div>
      </div>
      <div className="bg-red-50">
        <div className="container md:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20 px-5 md:px-8 xl:px-6">
          <div className="text-header text-center">Benefits of Loyalty App</div>
          <Benefits />
        </div>
      </div>
      <div className="">
        <div className="container md:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20 px-5 md:px-8 xl:px-6">
          <div className="text-header text-center">Features and Functions</div>
          <Features />
        </div>
      </div>
      <div className="bg-red-50">
        <div className="container md:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20 px-5 md:px-8 xl:px-6">
          <Details />
        </div>
      </div>
      <SectionOne
        title="Get Started with Loyalty App in Your Business Today"
        desc="Just click on the floating button below, and send us your questions or concerns then we will give you the help you need."
      />
    </MainLayout>
  );
}

export default LoyaltyApp;
