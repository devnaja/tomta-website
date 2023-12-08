import React, { useState } from "react";
import logo from "/Tomta_Logo.png";
import menu from "../../assets/images/menu.png";
import close from "../../assets/images/close.png";
import { Link, NavLink } from "react-router-dom";
import * as data from "../../data/menu.json";
import "../../input.css";

const menuList = data;

const Header = (dropdownOpen) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="h-max px-5 md:px-20 top-0 bg-primary z-10">
      <div className="p-4 mx-auto flex md:justify-between justify-center">
        <Link
          className="w-full sm:w-auto static flex font-bold text-background "
          to="/"
        >
          <img
            src={logo}
            onClick={() => setActive("home")}
            className="w-10 sm:w-1/3 lg:w-28"
            alt="Logo"
            to="/home"
          />
          <p className="uppercase">TOMTA Technology</p>
        </Link>
        {/* ${dropdownOpen ? '' : 'hidden'} */}

        {/* webview */}

        <ul
          className="list-none hidden sm:flex justify-end items-center flex-1"
          id="dropdownButton"
        >
          {menuList.list.map((nav, index) => (
            <li
              key={nav.id}
              className={`relative group font-semibold font-bold cursor-pointer text-[16px] text-white
              ${index === menuList.list.length - 1 ? "mr-0" : "mr-10"}`}
            >
              {/* dropdown button */}
              <button
                className="w-max"
                aria-expanded={dropdown ? "true" : "false"}
              >
                {nav.title}
              </button>

              {/* dropdown menu */}
              <div
                id="dropdown"
                className={`absolute bg-primary z-10 right-0 rounded-md p-2`}
              >
                <ul className={`space-y-2 hidden group-hover:block`}>
                  {nav.list.map((list, i) => (
                    <li
                      key={list.id}
                      className={` ${
                        active === list.title ? "text-secondary" : "text-white"
                      } `}
                      onClick={() => setActive(list.title)}
                    >
                      <NavLink
                        className="active flex p-2 rounded-md hover:text-secondary"
                        aria-current="page"
                        to={`${list.id}`}
                      >
                        {list.title}
                      </NavLink>
                    </li>
                    // <li className="flex p-2">{list.title}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        {/* mobile view */}
        <div className="sm:hidden flex justify-end items-center z-10">
          <svg
            className={`${!toggle ? "flex" : "hidden"} w-5 h-5 text-secondary`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            onClick={() => setToggle(!toggle)}
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>

          {/* close svg */}
          <svg
            className={`${!toggle ? "hidden" : "flex"} w-5 h-5 text-secondary`}
            onClick={() => setToggle(!toggle)}
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
            />
          </svg>

          <div
            id="default-modal"
            aria-hidden="true"
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-10 right-0 my-5 w-full sidebar`}
            className="hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center"
          >
            <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
              <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
                {/* close svg */}
                <svg
                  className={`${
                    !toggle ? "hidden" : "flex"
                  } w-5 h-5 text-secondary`}
                  onClick={() => setToggle(!toggle)}
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                  />
                </svg>

                <div className="p-6 space-y-6">re{toggle}</div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          {/* <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-background absolute top-10 right-0 my-5 w-full sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {menuList.list.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-roboto cursor-pointer text-[16px] ${
                    active === nav.title ? "text-primary" : "text-secondary"
                  } ${index === menuList.list.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <button
                    className="w-max"
                    aria-expanded={dropdown ? "true" : "false"}
                  >
                    {nav.title}
                  </button>

                  <ul className={`space-y-2 hidden group-hover:block`}>
                  {nav.list.map((list, i) => (
                    <li
                      className={` ${
                        active === list.title ? "text-secondary" : "text-white"
                      } `}
                      onClick={() => setActive(list.title)}
                    >
                      <NavLink
                        className="active flex p-2 rounded-md active:text-secondary"
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
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
