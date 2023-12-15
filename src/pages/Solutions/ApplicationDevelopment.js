import Banner from "components/BannerBg";
import bannerImg from "assets/images/banner/aboutUsBanner.jpg";
import React from "react";
import image1 from "assets/images/app-dev1.jpg";
import MainLayout from "layouts/MainLayout";

function ApplicationDevelopment() {
  return (
    <MainLayout>
      <div>
        <Banner image={bannerImg} text="Application Development" />
        <div
          className="min-h-screen max-w-xs md:max-w-2xl lg:max-w-4xl
        xl:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl
        py-10 md:py-20"
        >
          <div className="">
            <p className="text-3xl font-semibold tracking-tight text-center sm:text-5xl">
              What is Application Development?
            </p>
            <p className="mt-4 text-base text-justify mx-auto tracking-tight text-gray-600">
              Application development is a multifaceted process that involves
              creating software applications tailored to meet specific needs and
              functions. Whether it's web, mobile, or desktop applications, the
              development lifecycle typically follows a series of stages.
            </p>
          </div>
          <div className=" w-full rounded-xl m-auto bg-red-50">
            <div className="">
              <div className="relative items-center w-full p-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                  <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                    <div className="max-w-xl text-center lg:text-left">
                      <div>
                        <p className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl">
                          Space Management Software
                        </p>
                        <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                          Use this paragraph to share information about your
                          company or products. Make it engaging and interesting,
                          and showcase your brand's personality. Thanks for
                          visiting our website!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <img
                      className="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 "
                      alt="hero"
                      src={image1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ApplicationDevelopment;
