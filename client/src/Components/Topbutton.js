import React, { useEffect } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { useNavigate } from "react-router-dom"

function Topbutton({ topref, showBtn }) {

    const navigate = useNavigate()
    const executeScroll = () => {
        navigate('/')
    }
    return (
        <>
            <button style={{display: showBtn ? 'initial': 'none'}} onClick={executeScroll} className="fixed bottom-2 right-5 inline-flex items-center justify-center  mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg bg-black z-50">
                <p
                    className='relative px-2  p-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'
                >
                    <span>
                        <AiFillHome />
                    </span>
                </p>
            </button>
        </>
    )
}

export default Topbutton