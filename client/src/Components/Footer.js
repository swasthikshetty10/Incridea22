import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    location.pathname === '/login' ? <></> :
      <>
        <footer className={"p-4 font-body gap-2 z-100 bg-black flex flex-col md:flex-row flex-wrap  justify-center items-center md:justify-between md:p-6"}>
          <div>
            <img className="h-12" src={logo} alt="logo" />
          </div>
          <div className="text-sm text-gray-400 text-center">
            {/* <p className="mb-1">
            <Link
              to="/techteam"
              className="transition-all ease-out delay-75 text-[#cd9b58] hover:tracking-wider text-base"
            >
              Made with ♥ by Technical Team, Incridea
            </Link>
          </p> NOTE: Remove link comment*/}
            <Link
              className="text-gray-400 transition-all ease-out delay-75 hover:text-gray-100"
              to="/privacy"
            >
              {" "}
              Privacy policy{" "}
            </Link>{" "}
            |{" "}
            <Link
              className="text-gray-400 transition-all ease-out delay-75 hover:text-gray-100"
              to="/rules"
            >
              {" "}
              Terms & Conditions{" "}
            </Link>{" "}
            |{" "}
            <Link
              className="text-gray-400 transition-all ease-out delay-75 hover:text-gray-100"
              to="/"
            >
              {" "}
              ©&nbsp;Incridea&nbsp;2022{" "}
            </Link>
          </div>
          <div className="flex mx-3 gap-4">
            <a
              href="https://instagram.com/incridea"
              className="place-items-center text-white text-xl"
            >
              <FaInstagram className="h-8 hover:text-igold" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCjvGyATGpvX5dsfIUwEOt1g"
              className="place-items-center text-white  text-xl "
            >
              <FaYoutube className="h-8 hover:text-igold" />
            </a>
          </div>
          {/* <ul className="flex flex-wrap  items-center mt-3 justify-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
         
          <li>
          </li>
          <li>
          </li>
        </ul> */}
        </footer>
      </>
  );
}

// className="rounded-full flex  justify-center items-center border text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"

export default Footer;
