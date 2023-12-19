import React, { useState, useEffect } from "react";
import bannerImg from "assets/images/banner/bannerSection.jpg";
import DemoForm from "./Demo/DemoForm";

function SectionOne({ title, desc }) {
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
    <div
      className="relative flex justify-center items-center h-[25rem] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className=" bg-black opacity-50 h-[25rem] w-full"></div>

      <div className="text-white absolute text-center p-5">
        <p className="text-header m-auto capitalize">{title}</p>
        {/* <p className="text-desc w-full">{desc}</p> */}
        <button
          className="py-5 px-10 bg-primary rounded-full mt-10 font-bold"
          onClick={openModal}
        >
          Contact Us Now !
        </button>
        {isModalOpen && <DemoForm isOpen={isModalOpen} isClose={closeModal} />}
      </div>
    </div>
  );
}

export default SectionOne;
