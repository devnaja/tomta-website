import React from "react";

function Modal({ isOpen, isClose, details }) {
  console.log("hello", details);
  return (
    <div className="fixed z-50 overflow-auto h-full inset-0 bg-black/60 flex items-center justify-center w-full ">
      <div className="bg-white rounded-lg max-w-4xl w-full ">
        <div className="md:flex h-full">
          <div className="w-full pb-10 pt-5 px-5 lg:px-10">
            <div className="flex justify-end">
              <button
                className="flex top-0 right-0 text-lg font-bold cursor-pointer"
                onClick={isClose}
              >
                X
              </button>
            </div>

            <div className="text-center mb-10 ">
              <h1 className="text-title ">{details.title}</h1>
              {/* <p>Enter your information to get the demo</p> */}
            </div>
            <div className="w-3/4 text-justify m-auto text-desc">
              <p>{details.moreDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
