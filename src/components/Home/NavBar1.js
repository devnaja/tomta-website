import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo/Tomta_Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { Link, NavLink } from "react-router-dom";
import * as data from "../../data/menu.json";
import "../../input.css";

const menuList = data;

const Header = (dropdownOpen) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });

  return (
    <div>
      <nav className="h-max px-5 md:px-20 top-0 bg-primary z-10">
        <div className="p-4 mx-auto flex md:justify-between justify-center">
          <Link
            className="w-full sm:w-auto static flex font-bold text-button"
            to="/"
          >
            <img
              src={logo}
              onClick={() => setActive("home")}
              className="w-10 sm:w-1/3 lg:w-28"
              alt="Logo"
              to="/home"
            />
            <p className="uppercase lg:hidden">TOMTA Technology</p>
          </Link>

          {/* webview */}

          <ul
            className="list-none hidden sm:flex justify-end items-center"
            id="dropdownButton"
          >
            {menuList.lists.map((nav, index) => (
              <li
                key={nav.id}
                className={`relative group font-semibold font-bold cursor-pointer text-[16px] text-white
              ${index === menuList.lists.length - 1 ? "mr-0" : "mr-10"}`}
              >
                {nav.list.length > 0 ? (
                  <button
                    className="w-max"
                    aria-expanded={dropdown ? "true" : "false"}
                  >
                    {nav.title} <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                ) : (
                  <NavLink to={nav.id}>
                    <button
                      className={` ${
                        active === nav.id ? "text-button" : "text-white"
                      }`}
                      onClick={() => setActive(nav.id)}
                    >
                      {nav.title}
                    </button>{" "}
                  </NavLink>
                )}

                {/* dropdown menu */}

                {nav.list.length > 0 ? (
                  <div
                    id="dropdown"
                    className={`absolute bg-primary z-10 right-0 rounded-md p-2 w-full`}
                  >
                    <ul className={`space-y-2 hidden group-hover:block`}>
                      {nav.list.map((list, i) => (
                        <li
                        key={i}
                          className={` ${
                            active === list.title
                              ? "text-button"
                              : "text-white"
                          }`}
                          onClick={() => setActive(list.title)}
                        >
                          <NavLink
                            className="active flex p-2 rounded-md hover:text-button"
                            aria-current="page"
                            to={`${list.id}`}
                          >
                            {list.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>

          {/* mobile view */}
          <div className="sm:hidden flex justify-end items-center z-10">
            <svg
              className={`${
                !toggle ? "flex" : "hidden"
              } w-5 h-5 text-button`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              onClick={() => setToggle(!toggle)}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </div>
        </div>
        <div className="mx-auto">
          <div
            id="default-modal"
            aria-hidden="true"
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute bg-slate-400 h-modal md:h-full top-0 left-0 right-0 md:inset-0 z-50 justify-center items-center`}
          >
            <div className="relative w-full max-w-2xl p-4 h-screen md:h-auto mx-auto">
              <div className="bg-white rounded-lg h-full shadow relative dark:bg-gray-700">
                <div className="flex items-start justify-between px-5 pt-5 border-b rounded-t dark:border-gray-600">
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="default-modal"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => setToggle(!toggle)}
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  <div
                    className={`${
                      !toggle ? "hidden" : "flex"
                    } px-6 bg-white absolute top-10 right-0 my-5 w-full sidebar`}
                  >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                      {menuList.lists.map((nav, index) => (
                        <li
                          key={nav.id}
                          className={`font-roboto cursor-pointer text-[16px] 
                          ${
                            index === menuList.lists.length - 1
                              ? "mb-0"
                              : "mb-4"
                          }`}
                          onClick={() => setDropdown(nav.id)}
                        >
                          {nav.list.length > 0 ? (
                            <button className="w-max">{nav.title}</button>
                          ) : (
                            <NavLink to={nav.id}>
                              <button
                                className={` ${
                                  active === nav.id
                                    ? "text-secondary"
                                    : "text-primary"
                                }`}
                                onClick={() => setActive(nav.id)}
                              >
                                {nav.title}
                              </button>{" "}
                            </NavLink>
                          )}

                          <ul className={`space-y-2`}>
                            {nav.list.map((list, i) => (
                              <li
                              
                                className={` ${
                                  dropdown === list.parent_id
                                    ? "flex"
                                    : "hidden"
                                } `}
                                onClick={() => setActive(list.title)}
                              >
                                <NavLink
                                  className={` ${
                                    active === list.title
                                      ? "text-secondary"
                                      : "text-primary"
                                  } active flex p-2 rounded-md  `}
                                  aria-current="page"
                                  to={`${list.id}`}
                                >
                                  {list.title}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* <div className="h-screen w-screen absolute top-0 bg-gray-500 z-10"></div> */}
    </div>
  );
};

export default Header;
