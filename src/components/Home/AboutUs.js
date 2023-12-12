import React, { useState } from "react";
import aboutImage from "../../assets/images/about.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareUpRight } from "@fortawesome/free-solid-svg-icons";
import DemoForm from "../Demo/DemoForm";

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen text-center px-5 md:px-20 py-5 md:py-10 ">
      <div className="font-bold md:text-3xl md:mb-8 uppercase lg:w-1/2 mx-auto">
        Explore our website and discover the exciting world of TOMTA
      </div>
      <div className="about-us grid md:grid-cols-2 lg:gap-20">
        <div>
          <img src={aboutImage} alt="About" className="mx-auto" />
        </div>
        <div className="flex">
          <div className=" my-auto">
            <div className="uppercase font-bold text-3xl mb-5">About Us </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <div
              onClick={openModal}
              className="py-3 px-5 rounded-xl text-md font-semibold border-2 w-fit mx-auto mt-5 bg-button text-dimBlue"
            >
              Read More
              <FontAwesomeIcon
                className="pl-3"
                icon={faSquareUpRight}
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <DemoForm isOpen={isModalOpen} isClose={closeModal} />}
    </div>
  );
}

export default About;
