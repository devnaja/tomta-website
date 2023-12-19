import React, { useState, useEffect } from "react";
import logo from "assets/images/logo/logo-ori-transparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
import * as data from "data/menu.json";

const menuList = data;

const NavBar1 = (dropdownOpen) => {
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
    <nav className="w-full z-10 absolute ">
      <div className="container md:max-w-screen-xl flex justify-between items-center mx-auto capitalize px-5 md:px-8 xl:px-6 py-5 xl:pt-12">
        <NavLink to="/">
          <div className="flex">
            <img
              src={logo}
              onClick={() => setActive("home")}
              className="w-10 md:w-20 xl:w-30 flex"
              alt="Logo"
            />
            <p className="my-auto text-center ml-2 uppercase p-0 text-title text-button font-bold">
              TOMTA
            </p>
          </div>
        </NavLink>
        <ul
          className="list-none hidden md:flex justify-end items-center"
          id="dropdownButton"
        >
          {menuList.lists.map((nav, index) => (
            <li
              key={nav.id}
              className={`relative group font-bold cursor-pointer text-[20px]
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
                <NavLink
                  to={`/${nav.id}`}
                  className={({ isActive }) =>
                    isActive ? "text-button" : "text-white"
                  }
                >
                  <button onClick={() => setActive(nav.id)}>{nav.title}</button>{" "}
                </NavLink>
              )}

              {nav.list.length > 0 ? (
                <div
                  id="dropdown"
                  className={`absolute z-10 right-0 rounded-md p-2 w-full`}
                >
                  <ul className={`space-y-2 hidden group-hover:block`}>
                    {nav.list.map((list, i) => (
                      <li
                        key={i}
                        className={` ${
                          active === list.title ? "text-button" : "text-white"
                        }`}
                        onClick={() => setActive(list.title)}
                      >
                        <NavLink
                          className="active flex p-2 rounded-md hover:text-white"
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
        <div className="flex md:hidden ">
          {toggle ? (
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-secondary hover:text-gray-900 text-base ml-auto inline-flex items-center"
              data-modal-toggle="default-modal"
            >
              <svg
                className="w-6 h-6 text-white"
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
          ) : (
            <svg
              className={`w-5 h-5 text-white`}
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
          )}
        </div>
      </div>

      {/* mobile navbar  */}
      <div id="containerSidebar" className="z-50">
        <div className="navbar-menu relative ">
          <nav
            id="sidebar"
            className={`${
              !toggle ? "hidden" : "flex"
            } fixed  z-50 left-0 bottom-0 flex w-3/4 -translate-x-full flex-col overflow-y-auto bg-primary pt-14 pb-8 sm:max-w-xs lg:w-80 h-screen`}
          >
            <div className="px-5 pb-6">
              <NavLink to="/">
                <img
                  src={logo}
                  onClick={() => setActive("home")}
                  className="w-20 flex lg:w-30"
                  alt="Logo"
                />
                {/* <p className="font-bold uppercase md:hidden p-0 text-2xl text-secondary leading-none">
                      TOMTA Technology
                    </p> */}
              </NavLink>
              <ul className="my-8 text-sm font-medium">
                {menuList.lists.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`text-xl w-full border-b-2 py-3 cursor-pointer
                         `}
                    onClick={() => setDropdown(nav.id)}
                  >
                    {nav.list.length > 0 ? (
                      <button className="w-max drop-shadow-2xl">
                        {nav.title}
                      </button>
                    ) : (
                      <NavLink
                        to={`/${nav.id}`}
                        className={({ isActive }) =>
                          isActive ? "text-button" : "text-white"
                        }
                      >
                        <button
                          className="flex items-center rounded py-3 pl-3 pr-4 w-full drop-shadow-2xl"
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
                            dropdown === list.parent_id ? "flex" : "hidden"
                          } `}
                          onClick={() => setActive(list.title)}
                        >
                          <NavLink
                            className={` ${
                              active === list.title
                                ? "text-white"
                                : "text-button"
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
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default NavBar1;
