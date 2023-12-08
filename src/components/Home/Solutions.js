import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import * as data from "data/solutions.json";

function Solutions() {
  const [isLoading, setIsLoading] = useState(true);
  const menuList = data;

  function onLoad() {
    // delay for demo only
    setTimeout(() => setIsLoading(false), 1000);

    // setIsLoading(false)
  }

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
    <div>
      <div className="flex justify-center items-center">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 ">
          {menuList.lists.map((list, i) => (
            <NavLink to={"/solutions/" + list.id}>
              <div
                key={list.id}
                className="bg-white rounded-lg h-full overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              >
                <div className="p-1 bg-blue-200"></div>
                <div className="">
                  <img
                    alt="ad-img"
                    className="w-full"
                    src="https://via.placeholder.com/300x200/EDEAE8"
                    style={{ display: isLoading ? "block" : "none" }}
                  />
                  <img
                    src={list.image}
                    alt="image"
                    className="w-full h-64"
                    style={{ display: isLoading ? "none" : "block" }}
                    onLoad={onLoad}
                  />
                </div>
                <div className="">
                  <p className="p-4 text-xl font-bold">{list.title}</p>

                  <p className="text-body-color text-base px-4">{list.desc}</p>
                </div>
                <div className="p-5 text-right">
                  <span className="text-sm font-semibold text-black">
                    {" "}
                    Read more &nbsp; →{" "}
                  </span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Solutions;
