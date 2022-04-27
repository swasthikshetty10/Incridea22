import React from "react";
import {FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
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

  {/* <footer className="sm:p-4 w-screen sm:w-screen flex-col sm:flex-row h-32 sm:h-24 flex items-center sm:justify-between  justify-center text-center bg-[#000] text-white relative inset-x-0 bottom-0 ">
        <img src={logo} className="mx-3 h-10 sm:h-9" alt="Incridea Logo" />
        <div className="text-center pt-2 sm:pt-0">Made with ♥ by: Incridea</div>
        <div className="">
          <a href="#!" type="button">
            <FaInstagram  size="1.5rem" />
          </a>
          <a href="#!" type="button" className="ml-4">
            <AiOutlineYoutube  size="1.8rem" />
          </a>
        </div>
      </footer> */}
  return (
    <>

      <footer className="p-4 flex flex-wrap shadow md:flex md:items-center md:justify-center md:p-6 bg-black">
        <div className="text-sm sm:text-center text-gray-200">© 2022 <Link to="/" className="hover:underline">Made with ♥ by: Incridea</Link>
        </div>
        <div className="flex mx-3 gap-2">

        <a href="#" className="place-items-center  "><FaInstagram className="text-white h-7" />  </a>
        <a href="#" className="place-items-center  "><FaYoutube className="text-white h-7" /></a>
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
