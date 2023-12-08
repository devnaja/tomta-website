import Banner from "components/BannerBg";
import bannerImg from "assets/images/banner1.jpg";
import React from "react";
import MainLayout from "layouts/MainLayout";

function ProcessAutomation() {
  return (
    <MainLayout>
      <div>
        <Banner image={bannerImg} text="Process Automation" />
        <div className="min-h-screen max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20">
          <div className=" w-full rounded-xl m-auto pb-10">
            <div className="text-left">
              <div className="">
                <section className="relative flex items-center w-full">
                  <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
                    <div className="relative flex-col items-start m-auto align-middle">
                      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                        <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                          <div className="max-w-xl text-center lg:text-left">
                            <div>
                              <p className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl">
                                Space Management Software
                              </p>
                              <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                                Use this paragraph to share information about
                                your company or products. Make it engaging and
                                interesting, and showcase your brand's
                                personality. Thanks for visiting our website!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                          <img
                            className="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto "
                            alt="hero"
                            src="https://i.pinimg.com/originals/2e/2b/21/2e2b21aeed393403d4620367f9e093f9.gif"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProcessAutomation;
