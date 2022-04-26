import React from "react";
import { FaInstagram } from "react-icons/fa";
import logo from "../Images/logo.png";
import { AiOutlineYoutube } from "react-icons/ai";
function Footer() {
  // <a
  //             href="#!"
  //             type="button"
  //             className="rounded-full flex  justify-center items-center border text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
  //           >
  //             <FaInstagram size="1.5rem" />
  //           </a>
  //           <div className="text-center p-4">
  //           © 2022 Copyright: {}
  //           <a className="text-whitehite" href="https://tailwind-elements.com/">
  //             Incridea
  //           </a>
  //         </div>
  return (
    <>
      <footer className="p-20 sm:p-4 w-full sm:w-screen flex-col sm:flex-row h-32 sm:h-24 flex items-center sm:justify-between justify-center text-center bg-[#000] text-white">
        <img src={logo} className="mx-3 h-10 sm:h-9" alt="Incridea Logo" />
        <div className="text-center pt-2 sm:pt-0">Made with ♥ by: Incridea</div>
        <div className="pt-2 sm:pt-0">
          <a href="#!" type="button">
            <FaInstagram size="1.5rem" />
          </a>
          <a href="#!" type="button" className="ml-4">
            <AiOutlineYoutube size="1.5rem" />
          </a>
        </div>
      </footer>
    </>
  );
}

// className="rounded-full flex  justify-center items-center border text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"

export default Footer;
