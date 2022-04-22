import React from 'react'
import {FaInstagram} from 'react-icons/fa';

function Footer() {
    return (
        <>
            <footer className="text-center bg-gray-900 text-white">
                <div className="container px-6 pt-6">
                    <div className="flex justify-center mb-6">
                        <a href="#!" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <FaInstagram/>
                        </a>

                    </div>
                </div>

                <div className="text-center p-4" style="background-color: rgba(0, 0, 0, 0.2);">
                    © 2022 Copyright:
                    <a className="text-whitehite" href="https://tailwind-elements.com/">Incridea Team</a>
                </div>
            </footer>
        </>
    )
}

export default Footer