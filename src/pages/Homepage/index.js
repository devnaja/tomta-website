import React, { useState, useEffect } from "react";
import MainLayout from "layouts/MainLayout";
import HomeBanner from "components/Home/heroBanner2";
import Solutions from "components/Home/Listing";
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
          <p className="text-body mx-auto text-center lg:w-4/5">
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
            <p className="text-body mx-auto text-center lg:w-4/5">
              Our comprehensive suite of solutions is designed to empower
              businesses, driving them toward success in the digital era.
            </p>
          </div>
          <Products />
        </div>
      </div>
      <div className="bg-white">
        <div className="container md:max-w-screen-xl mx-auto grid content-center tracking-wide rounded-3xl py-10 md:py-20 px-5 md:px-8 xl:px-6">
          <div className="flex flex-col items-center justify-between w-full xl:flex-row">
            <div className="text-center xl:text-left lg:max-w-lg mb-10 xl:mb-0">
              <p className="text-header">Trusted by Leading Innovators</p>
              <p className="text-body text-justify">
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
          <div className="text-center w-full rounded-xl mb-10 xl:mb-0">
            <div className="text-header text-center ">
              Our Partnerships And Collabrations
            </div>
            <div className="text-body mx-auto text-center lg:w-4/5">
              We work with several partners to deliver more powerful solutions
              for our clients, across the world.
            </div>
            <Partners />
          </div>
        </div>
      </div>

      <SectionOne title="Got a project that you would like to discuss?" />
    </MainLayout>
  );
}

export default Homepage;
