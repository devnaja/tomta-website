import React, { useState } from "react";
import Details from "../Career/Details";

const listing = [
  {
    id: 1,
    position: "Senior Full Stack",
    field: "Engineering",
    type: "Full TIme",
    location: "Remote, UK",
    isOpen: true,
    responsible: [
      'To develop applications based on customer’s requirements and specifications', 
      'To perform User Acceptance Test (UAT) to ensure the application is compliant with user and business requirements',
      'To resolve issues regarding to application and project assigned',
      'To maintain and support the application',
      'To attend training and to do research & development of relevant knowledge and skills',
      'To ensure that all information system operate according to internal standards'
    ],
    requirement: [
      'To develop applications based on customer’s requirements and specifications',
      'To perform User Acceptance Test (UAT) to ensure the application is compliant with user and business requirements',
      'To resolve issues regarding to application and project assigned',
      'To maintain and support the application',
      'To attend training and to do research & development of relevant knowledge and skills',
      'To ensure that all information system operate according to internal standards'
    ]
  },
  {
    id: 2,
    position: "Senior Full Stack",
    field: "Engineering",
    type: "Full TIme",
    location: "Remote, UK",
    isOpen: false,
    responsible: [
      'To develop applications based on customer’s requirements and specifications', 
      'To perform User Acceptance Test (UAT) to ensure the application is compliant with user and business requirements',
      'To resolve issues regarding to application and project assigned',
      'To maintain and support the application',
      'To attend training and to do research & development of relevant knowledge and skills',
      'To ensure that all information system operate according to internal standards'
    ],
    requirement: [
      'To develop applications based on customer’s requirements and specifications',
      'To perform User Acceptance Test (UAT) to ensure the application is compliant with user and business requirements',
      'To resolve issues regarding to application and project assigned',
      'To maintain and support the application',
      'To attend training and to do research & development of relevant knowledge and skills',
      'To ensure that all information system operate according to internal standards'
    ]
  },
  {
    id: 3,
    position: "Web Designer",
    field: "Engineering",
    type: "Full TIme",
    location: "Remote, UK",
    isOpen: false,
    responsible: [
      'To develop applications based on customer’s requirements and specifications', 
      'To perform User Acceptance Test (UAT) to ensure the application is compliant with user and business requirements',
      'To resolve issues regarding to application and project assigned',
      'To maintain and support the application',
      'To attend training and to do research & development of relevant knowledge and skills',
      'To ensure that all information system operate according to internal standards'
    ],
    requirement: [
      'To develop applications based on customer’s requirements and specifications',
      'To perform User Acceptance Test (UAT) to ensure the application is compliant with user and business requirements',
      'To resolve issues regarding to application and project assigned',
      'To maintain and support the application',
      'To attend training and to do research & development of relevant knowledge and skills',
      'To ensure that all information system operate according to internal standards'
    ]
  },
  {
    id: 4,
    position: "Senior Full Stack",
    field: "Engineering",
    type: "Full TIme",
    location: "Remote, UK",
    isOpen: true,
    responsible: [
      'To develop applications based on customer’s requirements and specifications', 
      'To perform User Acceptance Test (UAT) to ensure the application is compliant with user and business requirements',
      'To resolve issues regarding to application and project assigned',
      'To maintain and support the application',
      'To attend training and to do research & development of relevant knowledge and skills',
      'To ensure that all information system operate according to internal standards'
    ],
    requirement: [
      'To develop applications based on customer’s requirements and specifications',
      'To perform User Acceptance Test (UAT) to ensure the application is compliant with user and business requirements',
      'To resolve issues regarding to application and project assigned',
      'To maintain and support the application',
      'To attend training and to do research & development of relevant knowledge and skills',
      'To ensure that all information system operate according to internal standards'
    ]
  },
];
function ListingCareer() {
  const [isContentVisible, setIsContentVisible] = useState("");

  // const toggleContent = (e) => {
  //   setIsContentVisible(isContentVisible);
  // };

  return (
    <div className="px-5 md:px-20 py-5 md:py-10">
      <div className="text-center">
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
        <div
          key={i}
          className=" overflow-hidden justify-center p-2 pt-5 max-w-4xl m-auto"
          onClick={() =>  setIsContentVisible(isContentVisible === list.id ? null : list.id)}
        >
          <div className="bg-white m-auto border w-full max-w-4xl flex flex-col sm:flex-row  sm:items-center justify-between px-5 py-4 rounded-t-md">
            <div className="">
              <span className="text-primary text-sm">{list.field}</span>
              <h3 className="font-bold mt-px">{list.position}</h3>
              <div className="flex items-center gap-3 mt-2">
                <span className="bg-button rounded-full px-3 py-1 text-sm">
                  {list.type}
                </span>
                <span className="text-slate-600 text-sm flex gap-1 items-center">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>{" "}
                  {list.location}
                </span>
              </div>
            </div>
          </div>
          <div className={`${isContentVisible === list.id ? "block" : "hidden"}`}>
            <Details details={list} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListingCareer;
