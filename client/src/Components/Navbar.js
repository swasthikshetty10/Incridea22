import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../Images/logo.png";

function Navbar({ tab }) {
  const [click, setClick] = useState(0);
  const handleHamburger = () => {
    if (click === 0) {
      document.getElementById("mobile-menu-4").classList.add("hidden");
      document.getElementById("mobile-menu-4").classList.add("visible");

      setClick(1);
    } else {
      document.getElementById("mobile-menu-4").classList.add("visible");
      document.getElementById("mobile-menu-4").classList.remove("hidden");

      setClick(0);
    }
  };
  return (
    <>
      <nav className="bg-[#171717] px-2 sm:px-4 py-4 h-1/6">
        <div className="container flex flex-wrap justify-between items-center mx-auto items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mx-3 h-6 sm:h-16" alt="Incridea Logo" />
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap ">Incridea</span> */}
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              class="rounded-md text-white bg-[#9d7643] focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-md font-bold px-5 py-2.5 text-center mr-2 mb-2"
            >
              {" "}
              <Link to="/login">LOGIN/REGISTER</Link>{" "}
            </button>
          </div>
        </div>

        <div>
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to="/"
                className={`block py-2 pr-4 pl-3  border-b border-gray-100 text-xl   hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#DA0037] md:p-0 ${
                  tab === "home" ? "text-[#DA0037]" : "text-[#EDEDED]"
                } `}
                aria-current="page"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className={`block py-2 pr-4 pl-3  border-b border-gray-100 text-xl hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#DA0037] md:p-0 ${
                  tab === "events" ? "text-[#DA0037]" : "text-[#EDEDED]"
                } `}
              >
                EVENTS
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={`block py-2 pr-4 pl-3  border-b border-gray-100 text-xl hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#DA0037] md:p-0 ${
                  tab === "gallery" ? "text-[#DA0037]" : "text-[#EDEDED]"
                } `}
              >
                GALLERY
              </Link>
            </li>
            <li>
              <Link
                to="/sponsors"
                className={`block py-2 pr-4 pl-3  border-b border-gray-100 text-xl hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#DA0037] md:p-0 ${
                  tab === "sponsor" ? "text-[#DA0037]" : "text-[#EDEDED]"
                } `}
              >
                SPONSORS
              </Link>
            </li>

            <li>
              <Link
                to="/team"
                className={`block py-2 pr-4 pl-3  border-b border-gray-100 text-xl hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#DA0037] md:p-0 ${
                  tab === "about" ? "text-[#DA0037]" : "text-[#EDEDED]"
                } `}
              >
                ABOUT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
