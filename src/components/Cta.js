import React, { useState, useEffect } from "react";

import DemoForm from "../components/Demo/DemoForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareUpRight } from "@fortawesome/free-solid-svg-icons";

function Cta() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });

  return (
    <div className="slider flex items-center justify-center md:min-h-screen relative">
      <div className="w-full h-screen py-6 flex flex-col justify-center sm:py-12 bg-hero-pattern ">
        <p className="font-semibold capitalize text-xl text-center text-white md:text-5xl lg:text-6xl">
          Explore Your Business Potential Now
        </p>
        <div
          onClick={openModal}
          className="bg-secondary border-4 text-xl uppercase font-normal py-3 px-10 rounded-xl w-fit mx-auto mt-3 md:mt-10 hover:scale-105 hover:bg-background hover:text-black text-white"
        >
          Get Inquiries
        </div>
      </div>
      {/* </div> */}
      {isModalOpen && <DemoForm isOpen={isModalOpen} isClose={closeModal} />}
      {/* <img
        className="h-full w-full opacity-80 md:h-screen"
        src={image}
        alt="test"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute mt-20 text-white text-center flex flex-col items-center">
        <p className="font-semibold capitalize text-xl md:text-5xl lg:text-6xl">
            Explore Your Business Potential Now
        </p>

        <div
          onClick={openModal}
          className="bg-[#f0f8ff]  border-4 text-xl uppercase font-normal py-3 px-10 rounded-xl w-fit mx-auto mt-3 md:mt-10 hover:scale-105 hover:bg-secondary hover:text-[#f0f8ff] text-black"
        >
          Get Inquiries
        </div>

      </div>
      
      {isModalOpen && <DemoForm isOpen={isModalOpen} isClose={closeModal} />} */}
      //{" "}
    </div>
  );
}

export default Cta;
