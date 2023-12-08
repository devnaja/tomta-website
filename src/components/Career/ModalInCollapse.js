import React, { useState } from "react";
import Collapse from "./Collapse";
import Details from "./Details";
import ApplyForm from "./ApplyForm";

const listing = [
  {
    id: 1,
    position: "Senior Full Stack",
    field: "Engineering",
    type: "Full TIme",
    location: "Remote, UK",
    isOpen: true,
    responsible: [
      "To develop applications based on customer’s requirements and specifications",
      "To perform User Acceptance Test (UAT) to ensure the application is compliant with user and business requirements",
      "To resolve issues regarding to application and project assigned",
      "To maintain and support the application",
      "To attend training and to do research & development of relevant knowledge and skills",
      "To ensure that all information system operate according to internal standards",
    ],
    requirement: [
      "To develop applications based on customer’s requirements and specifications",
      "To perform User Acceptance Test (UAT) to ensure the application is compliant with user and business requirements",
      "To resolve issues regarding to application and project assigned",
      "To maintain and support the application",
      "To attend training and to do research & development of relevant knowledge and skills",
      "To ensure that all information system operate according to internal standards",
    ],
  },
  {
    id: 2,
    position: "Senior Full Stack",
    field: "Engineering",
    type: "Full TIme",
    location: "Remote, UK",
    isOpen: false,
    responsible: [
      "To develop applications based on customer’s requirements and specifications",
      "To perform User Acceptance Test (UAT) to ensure the application is compliant with user and business requirements",
      "To resolve issues regarding to application and project assigned",
      "To maintain and support the application",
      "To attend training and to do research & development of relevant knowledge and skills",
      "To ensure that all information system operate according to internal standards",
    ],
    requirement: [
      "To develop applications based on customer’s requirements and specifications",
      "To perform User Acceptance Test (UAT) to ensure the application is compliant with user and business requirements",
      "To resolve issues regarding to application and project assigned",
      "To maintain and support the application",
      "To attend training and to do research & development of relevant knowledge and skills",
      "To ensure that all information system operate according to internal standards",
    ],
  },
  {
    id: 3,
    position: "Web Designer",
    field: "Engineering",
    type: "Full TIme",
    location: "Remote, UK",
    isOpen: false,
    responsible: [
      "To develop applications based on customer’s requirements and specifications",
      "To perform User Acceptance Test (UAT) to ensure the application is compliant with user and business requirements",
      "To resolve issues regarding to application and project assigned",
      "To maintain and support the application",
      "To attend training and to do research & development of relevant knowledge and skills",
      "To ensure that all information system operate according to internal standards",
    ],
    requirement: [
      "To develop applications based on customer’s requirements and specifications",
      "To perform User Acceptance Test (UAT) to ensure the application is compliant with user and business requirements",
      "To resolve issues regarding to application and project assigned",
      "To maintain and support the application",
      "To attend training and to do research & development of relevant knowledge and skills",
      "To ensure that all information system operate according to internal standards",
    ],
  },
  {
    id: 4,
    position: "Senior Full Stack",
    field: "Engineering",
    type: "Full TIme",
    location: "Remote, UK",
    isOpen: true,
    responsible: [
      "To develop applications based on customer’s requirements and specifications",
      "To perform User Acceptance Test (UAT) to ensure the application is compliant with user and business requirements",
      "To resolve issues regarding to application and project assigned",
      "To maintain and support the application",
      "To attend training and to do research & development of relevant knowledge and skills",
      "To ensure that all information system operate according to internal standards",
    ],
    requirement: [
      "To develop applications based on customer’s requirements and specifications",
      "To perform User Acceptance Test (UAT) to ensure the application is compliant with user and business requirements",
      "To resolve issues regarding to application and project assigned",
      "To maintain and support the application",
      "To attend training and to do research & development of relevant knowledge and skills",
      "To ensure that all information system operate according to internal standards",
    ],
  },
];

const ModalInCollapse = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" ">
      <div className="text-center m-10">
        <p className="text-4xl font-bold">
          Join our world-class team of developer
        </p>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
      </div>
      {listing.map((list, i) => (
        <Collapse key={i} list={list} className="w-4xl m-auto   ">
          {/* children */}
          <div className="max-w-4xl m-auto">
            <button className="flex justify-end rounded bg-secondary text-white p-2 float-right mt-5 mr-5" onClick={openModal}>
                Apply Now
            </button>
            <Details details={list}  />
          </div>
          
          

          {isModalOpen && (
            <ApplyForm isOpen={isModalOpen} isClose={closeModal} details={list} />
          )}
        </Collapse>
      ))}
    </div>
  );
};

export default ModalInCollapse;
