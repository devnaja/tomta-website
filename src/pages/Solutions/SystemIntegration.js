import Banner from "components/BannerBg";
import bannerImg from "assets/images/banner1.jpg";
import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "layouts/MainLayout";

function SystemIntegration() {
  const { id } = useParams();
  //   const { additionalParam } = location.state || {};
  return (
    <MainLayout>
      <div>
        <Banner image={bannerImg} text={id} />
        <div className="min-h-screen max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20">
          <div className=" w-full rounded-xl m-auto pb-10">
            <div>Solution Details : {id}</div>
            <div>
              <p>What is Application Development</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default SystemIntegration;
