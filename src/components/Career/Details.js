import React, {useState} from "react";
import ApplyForm from "./ApplyForm";

const Details = ({ details }) => {

  const [isModalOpen, setIsModalOpen] = useState("");

  const openModal = (e) => {
    // alert('hello', e)
    setIsModalOpen(e);  
  };

  const closeModal = (e) => {
    setIsModalOpen(e);
  };  

  return (
    <div className="border-t-0 border rounded-b-lg max-w-4xl m-auto">
      <div className=" p-5 ">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div>
            <p className="font-light text-xl py-2">{details.position}</p>
            <p className="font-bold text-md indent-4 underline py-2 tracking-wider">
              Responsiblities
            </p>
          </div>
          <div className="flex justify-end">
            {/* <button
              type="button"
              disabled={details.isOpen}
              className={`${
                details.isOpen ? "opacity-50" : ""
              }  bg-secondary text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center`}
              onClick={() => openModal(details.id)}
            >
             Apply Now { 'id' + isModalOpen}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button> */}
          </div>
        </div>

        <div className="px-8 mb-5">
          <ul className="list-disc">
            {details.responsible.map((data, index) => (
              <li key={data.id} className="leading-6 tracking-wide">{data}</li>
            ))}
          </ul>
        </div>
        <p className="font-bold text-md indent-4 underline py-5 tracking-wider">
          Requirements
        </p>
        <div className="px-8">
          <ul className="list-disc">
            {details.requirement.map((data, index) => (
              <li key={data.id}  className="leading-6 tracking-wide">{data}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* <ApplyForm className={`isModalOpen === details.id ? "block" : "hidden"`} onClose={closeModal} /> */}
    </div>
  );
};

export default Details;
