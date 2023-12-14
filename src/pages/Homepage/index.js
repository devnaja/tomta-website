import React, { useState, useEffect } from "react";
import MainLayout from "layouts/MainLayout";
import HomeBanner from "components/Home/heroBanner2";
import Solutions from "components/Solutions/Listing";
import Products from "components/Home/Products2";
import Clients from "components/Home/Clients2";
import Partners from "components/Home/Partners";
import LoadingPage from "components/Loading";
import SectionOne from "components/SectionOne";

function Homepage() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <MainLayout>
      {/* <LoadingPage /> */}
      <HomeBanner />
      <div className="container md:max-w-screen-xl min-h-screen mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20 px-5 md:px-8 xl:px-6">
        <div className="text-center w-full rounded-xl mb-5 md:mb-10">
          <div className="text-header">Our Solutions</div>
          <p className="text-desc mx-auto text-center lg:w-4/5 pb-0 ">
            Our comprehensive suite of solutions is designed to empower
            businesses, driving them toward success in the digital era.
          </p>
        </div>
        <Solutions />
      </div>
      <div className=" bg-red-50">
        <div className="container md:max-w-screen-xl min-h-screen mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20 px-5 md:px-8 xl:px-6">
          <div className="text-center w-full rounded-xl mb-5 md:mb-10">
            <div className="text-header">Our Products</div>
            <p className="text-desc mx-auto text-center lg:w-4/5 pb-0">
              Our comprehensive suite of solutions is designed to empower
              businesses, driving them toward success in the digital era.
            </p>
          </div>
          <Products />
        </div>
      </div>
      <div className="bg-white">
        <div className="container md:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20 px-5 md:px-8 xl:px-6">
          <div className="flex flex-col items-center justify-between w-full mb-10 xl:flex-row">
            <div className="mb-5 md:mb-10 text-center xl:text-left lg:max-w-lg">
              <p className="text-header">Trusted by Leading Innovators</p>
              <p className="text-desc pb-0">
                Our success is intertwined with the success of our clients. We
                take pride in fostering lasting partnerships with industry
                leaders, startups, and visionary organizations. Our commitment
                to delivering excellence and driving positive outcomes has
                positioned us as a trusted ally in the realm of technology
                solutions.
              </p>
            </div>
            <Clients />
          </div>
        </div>
      </div>
      <div className="bg-red-50 ">
        <div className="container md:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20 px-5 md:px-8 xl:px-6">
          <div className="text-center w-full rounded-xl mb-5 md:mb-10">
            <div className="text-header text-center ">
              Our Partnerships And Collabrations
            </div>
            <div className="text-desc mx-auto text-center lg:w-4/5 pb-0">
              We work with several partners to deliver more powerful solutions
              for our clients, across the world.
            </div>
            <Partners />
          </div>
        </div>
      </div>

      <SectionOne
        title="Connect with us"
        desc="Just click on the floating button below, and send us your questions or concerns then we will give you the help you need."
      />
    </MainLayout>
  );
}

export default Homepage;
