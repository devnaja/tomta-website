import React, { useState } from "react";

const Collapse = ({ children, list }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div key={list.id} className=" rounded-lg my-4">
      <div
        className="flex items-center max-w-4xl m-auto justify-between cursor-pointer"
        onClick={toggleCollapse}
      >
        {/* <h2 className="text-lg font-semibold">{list.position}</h2> */}

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
          <span>{isCollapsed ? "▼" : "▲"}</span>

        </div>
      </div>
      {!isCollapsed && <div className="">{children}</div>}
    </div>
  );
};

export default Collapse;
