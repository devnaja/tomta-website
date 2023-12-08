import React from "react";
import Banner from "../Banner";
import bannerImg from "../../assets/images/banner2.jpg";
import aboutImage from "../../assets/images/about.jpg";

function History() {
  return (
    <div className="pb-5 lg:pb-20">
      <Banner image={bannerImg} />

      <div className="about-us grid md:grid-cols-2 lg:gap-20 mt-5 lg:mt-20 ">
          <div className="my-auto">
            <img
              src={aboutImage}
              alt="About"
              className="m-auto rounded-[5rem] my-auto p-5 w-4/5"
            />
          </div>
          <div className="">
            <div className="mx-auto lg:mr-20 w-4/5">
              <div className="uppercase font-bold text-3xl mb-5">About Us </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <br></br>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
        </div>
      </div>

      <div className="about-us grid md:grid-cols-2 lg:gap-20 mt-10 lg:mt-20">
        <div className="flex">
          <div className="mx-auto lg:ml-20 w-4/5">
            <div className="uppercase font-bold text-3xl mb-5">
              Why Choose Us?{" "}
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <br></br>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className=" my-auto ">
          <img
            src={aboutImage}
            alt="About"
            className="m-auto rounded-[5rem] my-auto p-5 w-4/5"
          />
        </div>
      </div>
    </div>
  );
}

export default History;
