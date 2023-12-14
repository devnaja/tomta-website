import React, { useState, useEffect } from "react";

import DemoForm from "../components/Demo/DemoForm";

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
    </div>
  );
}

export default Cta;
