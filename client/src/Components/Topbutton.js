import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';
import {Link} from "react-router-dom"
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Topbutton({ topref }) {
    const executeScroll = () => topref.current.scrollIntoView()
    return (
        <>
            <button className="fixed bottom-2 right-5 inline-flex items-center justify-center  mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg bg-black z-50">

                <Link to="/gallery"
                    // onclick={executeScroll}
                    className='relative px-2  p-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'
                >
                    <span className="">
                        <AiOutlineArrowUp />
                    </span>
                </Link>
            </button>
        </>
    )
}

export default Topbutton