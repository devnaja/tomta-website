import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import * as data from "data/solutions.json";

function Listing() {
  const [isLoading, setIsLoading] = useState(true);
  const menuList = data;

  function onLoad() {
    setTimeout(() => setIsLoading(false), 1000);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
        {menuList.lists.map((list, i) => (
          <HashLink smooth to={`/solutions/listing#${list.id}`}>
            <div
              key={list.id}
              className="flex flex-col bg-white rounded-lg h-full mb-5 lg:mb-0 overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="border-t-8 border-blue-200">
                <img
                  alt="noImage"
                  className="w-full"
                  src="https://via.placeholder.com/300x200/EDEAE8"
                  style={{ display: isLoading ? "block" : "none" }}
                />
                <img
                  src={process.env.PUBLIC_URL + list.image}
                  alt="solution"
                  className="w-full h-64"
                  style={{ display: isLoading ? "none" : "block" }}
                  onLoad={onLoad}
                />
                <div className="px-4 xl:px-8 mt-4 xl:mt-8">
                  <p className="text-title font-semibold mb-2 xl:mb-5">
                    {list.title}
                  </p>
                  <p className="text-desc text-justify">{list.desc}</p>
                </div>
              </div>
              <div className="p-5 text-right mt-auto">
                <span className="text-desc font-bold">Read more &nbsp; →</span>
              </div>
            </div>
          </HashLink>
        ))}
      </div>
    </div>
  );
}

export default Listing;
