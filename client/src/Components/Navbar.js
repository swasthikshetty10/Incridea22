import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../Images/logo.png';


function Navbar({tab}) {
    return (
        <>

            <nav className="bg-none border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="mx-3 h-6 sm:h-9" alt="Incridea Logo"/>
                            {/* <span className="self-center text-xl font-semibold whitespace-nowrap ">Incridea</span> */}
                    </Link>
                    <div className="flex md:order-2">
                    <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> <Link to="/login" >Sign in</Link> </button>

                        <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="mobile-menu-4" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <Link to="/" className={`block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${tab ==='home' ? 'text-blue-700' :'text-gray-700' } ` } aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/events" className={`block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${tab ==='events' ? 'text-blue-700' :'text-gray-700' } ` }>Events</Link>
                            </li>
                            <li>
                                <Link to="/gallery" className={`block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${tab ==='gallery' ? 'text-blue-700' :'text-gray-700' } ` }>Gallery</Link>
                            </li>
                            <li>
                                <Link to="/sponsors" className={`block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${tab ==='sponsor' ? 'text-blue-700' :'text-gray-700' } ` }>Sponsors</Link>
                            </li>
                            
                            <li>
                                <Link to="/events" className={`block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${tab ==='about' ? 'text-blue-700' :'text-gray-700' } ` }>About us</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar