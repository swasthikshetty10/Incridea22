// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";

// import logo from "../Images/logo.png";

// function Navbar({ tab }) {
//   const [click, setClick] = useState(0);
//   const handleHamburger = () => {
//     if (click === 0) {
//       document.getElementById("mobile-menu-4").classList.add("hidden");
//       document.getElementById("mobile-menu-4").classList.add("visible");

//       setClick(1);
//     } else {
//       document.getElementById("mobile-menu-4").classList.add("visible");
//       document.getElementById("mobile-menu-4").classList.remove("hidden");

//       setClick(0);
//     }
//   };
//   return (
//     <>
//       <nav className="bg-[#171717] px-2 sm:px-4 py-4 h-1/6">
//         <div className="container flex flex-wrap justify-between items-center mx-auto ">
//           <Link to="/" className="flex items-center">
//             <img src={logo} className="mx-3 h-6 sm:h-16" alt="Incridea Logo" />
//             {/* <span className="self-center text-xl font-semibold whitespace-nowrap ">Incridea</span> */}
//           </Link>
//           <div className="flex md:order-2">
//             <button
//               type="button"
//               class="rounded-md text-white bg-[#9d7643] focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-md font-bold px-5 py-2.5 text-center mr-2 mb-2"
//             >
//               {" "}
//               <Link to="/login">LOGIN/REGISTER</Link>{" "}
//             </button>
//           </div>
//         </div>

//         <div>
//           <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
//             <li>
//               <Link
//                 to="/"
//                 className={`block py-2 pr-4 pl-3  border-b border-gray-100 text-xl   hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9d7643] md:p-0 ${
//                   tab === "home" ? "text-[#9d7643]" : "text-[#EDEDED]"
//                 } `}
//                 aria-current="page"
//               >
//                 HOME
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/events"
//                 className={`block py-2 pr-4 pl-3  border-b border-gray-100 text-xl hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9d7643] md:p-0 ${
//                   tab === "events" ? "text-[#9d7643]" : "text-[#EDEDED]"
//                 } `}
//               >
//                 EVENTS
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/gallery"
//                 className={`block py-2 pr-4 pl-3  border-b border-gray-100 text-xl hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9d7643] md:p-0 ${
//                   tab === "gallery" ? "text-[#9d7643]" : "text-[#EDEDED]"
//                 } `}
//               >
//                 GALLERY
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/sponsors"
//                 className={`block py-2 pr-4 pl-3  border-b border-gray-100 text-xl hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9d7643] md:p-0 ${
//                   tab === "sponsor" ? "text-[#9d7643]" : "text-[#EDEDED]"
//                 } `}
//               >
//                 SPONSORS
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/team"
//                 className={`block py-2 pr-4 pl-3  border-b border-gray-100 text-xl hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9d7643] md:p-0 ${
//                   tab === "about" ? "text-[#9d7643]" : "text-[#EDEDED]"
//                 } `}
//               >
//                 ABOUT US
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../Images/logo.png";

function Navbar({ tab }) {
  const [click, setClick] = useState(1);
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
      {/* {... click===0? onClick()=>setClick(1):onClick()=>setClick(0)}  */}


      <nav className="bg-[#000] px-2 sm:px-4 py-6 font-nav" style ={{"fontFamily":"CinzelDecorative-Bold"}} >
        <div className="container text-center flex flex-wrap justify-between items-center mx-auto">

      {/* <nav className="bg-[#000] px-2 sm:px-4 py-6 font-nav min-w-fit ">
        <div className="container text-center flex flex-wrap justify-between items-center  content-center mx-auto"> */}

          <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="mx-3 h-10  md:h-16"
              alt="Incridea Logo"
            />
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap ">Incridea</span> */}
          </Link>
          <div className="flex md:order-2"style ={{"fontFamily":"CinzelDecorative-Bold"}}>
            <button
              type="button"

            //   class="text-white bg-[#9d7643] focus:ring-4 focus:outline-none  text-md px-5 py-2.5 text-center mr-2 mb-2"
            // >
            //   {" "}
            //   <Link to="/login">Login/Register</Link>{" "}

              className="rounded-none text-white bg-[#9d7643] font-sans focus:ring-4 focus:outline-none  text-sm md:text-lg font-bold px-3 py-2.5 text-center mr-1 mb-2 hover:text-white ">
              
              <Link to="/login">login / register</Link>

            </button>

            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              onClick={handleHamburger}

              className={`  inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none`}

              // className=" inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden "

              aria-controls="mobile-menu-4"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="justify-between items-center w-full md:flex md:w-auto hidden md:order-1"
            id="mobile-menu-4"
          >
            <ul style ={{"fontFamily":"CinzelDecorative-Bold"}} className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  to="/"
                  className={`block py-2 pr-4 pl-3  border-b border-gray-100 text-xl   hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9d7643] md:p-0 ${
                    tab === "home" ? "text-[#9d7643]" : "text-[#EDEDED]"
                  } `}
                  aria-current="page"
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className={`block py-2 pr-4 pl-3  border-b border-gray-100 text-xl   hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9d7643] md:p-0 ${
                    tab === "events" ? "text-[#9d7643]" : "text-[#EDEDED]"
                  } `}
                >
                  events
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"

                  className={`block py-2 Opr-4 pl-3  border-b border-gray-100 text-xl   hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9d7643] md:p-0 ${

                  // className={`block py-2 pr-4 pl-3  border-b border-gray-100 text-xl   hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9d7643] md:p-0 ${

                    tab === "gallery" ? "text-[#9d7643]" : "text-[#EDEDED]"
                  } `}
                >
                  gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/sponsors"
                  className={`block py-2 pr-4 pl-3  border-b border-gray-100 text-xl   hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9d7643] md:p-0 ${
                    tab === "sponsors" ? "text-[#9d7643]" : "text-[#EDEDED]"
                  } `}
                >
                  sponsors
                </Link>
              </li>

              <li>
                <Link
                  to="/team"
                  className={`block py-2 pr-4 pl-3  border-b border-gray-100 text-xl   hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9d7643] md:p-0 ${
                    tab === "team" ? "text-[#9d7643]" : "text-[#EDEDED]"
                  } `}
                >
                  about us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
