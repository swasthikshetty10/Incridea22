import React from 'react'
import { useState } from 'react';
import vibe from '../../Images/Vibe.png'
import navarasa from '../../Images/navrasa.png'
import "bootstrap-icons/font/bootstrap-icons.css";
import { BsFillCalendar3RangeFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
// import { ImCross } from "react-icons/im";
import { GoLocation } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { BiTimeFive } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";



function Modal({ closeModal }) {
    const [] = useState(false)

    return (
        <>
            <div id="extralarge-modal" tabindex="-1" className="overflow-y-auto   overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex items-center justify-center justify-items-center ">
                <div className="relative p-4 w-full max-w-7xl h-full md:h-auto backdrop-lg rounded-lg shadow-lg shadow-blue-500/50 border-0  " >
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-blend-color rounded-lg shadow  bg-clip-padding backdrop-blur bg-gradient-to-r from-rose-100 to-teal-100 ">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                            <h3 className="text-3xl font-bold  text-gray-800 "  >
                                Event Name
                            </h3>
                            <button type="button" className="text-gray-700 bg-transparent hover:bg-red-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="extralarge-modal" onClick={() => { closeModal(false) }} >

                                {/* <ImCross /> */}
                                <IoIosArrowBack className="inline mr-0" /> Back
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-1 sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row">

                            <div className="p-3 flex flex-col justify-around space-y-3 min-w-max">
                                <img src={navarasa} class="w-16 sm:w-32 md:w-48 lg:w-60" />
                                <div>

                                    <div className=" text-gray-900"> <GoLocation className="inline mr-2" />Venue - Ramanujan BLock</div>
                                    <div className=" text-gray-900"> <FaUsers className="inline mr-2" />Team Size - 5</div>
                                    <div className=" text-gray-900"> <BsFillCalendar3RangeFill className="inline mr-2" />Event Date - 12/05/2022</div>
                                    <div className=" text-gray-900"> <BiTimeFive className="inline mr-2" />Time - 5:00PM</div>
                                    {/* <div className=" text-white"> <BiTimeFive className="inline mr-2" />Team - 5:00PM</div> */}
                                    <div className="pt-3 text-gray-900"> <HiUserGroup className="inline mr-2" />Organizer details :
                                        <br />

                                        <div>Moghe Sudheesh Rao:
                                            +91 9902145643</div>
                                        <div>Pranava Moodithaya P:
                                            +91 7975060473</div>
                                    </div>
                                </div>


                            </div>
                            <div className="p-3 space-y-6   overflow-scroll overflow-x-hidden h-[80vh]">
                                <div className="">

                                    <h1 className="text-gray-800/100 text-4xl font-bold pb-5 ">Description</h1>
                                    <p className=" text-base leading-relaxed text-gray-900 ">
                                        Sanskrit literature has a profound saying which goes, "Kaavyeshu Naatakam Ramyam”: Drama is the finest form of poetry. 'Drama' is a metaphorical amalgamation of visual, auditory, and material nuances of character. <br />

                                        Having said that, it is our honor and privilege to introduce “NAVARASA”, a drama competition open to undergraduates of all universities. Through Navarasa, we wish to create a platform for all budding playwrights, theatre artists, and art patrons to entertain theatre lovers.
                                        <br />
                                        <br />
                                        Organizer details :
                                        <br />
                                        Moghe Sudheesh Rao:
                                        +91 9902145643
                                        <br />
                                        Pranava Moodithaya P:
                                        +91 7975060473
                                    </p>
                                </div>

                                <div className="">

                                    <h1 className="text-gray-900/100 text-4xl font-bold ">Rules</h1>
                                    <h2 className="text-gray-900/100 text-2xl font-semibold " >Rounds 1</h2>
                                    <p className=" py-3 text-base leading-relaxed text-gray-800 ">

                                        <ol className=" list-decimal list-inside">
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut ipsam corrupti, odit eveniet labore?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut ipsam corrupti, odit eveniet labore?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut ipsam corrupti, odit eveniet labore?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut ipsam corrupti, odit eveniet labore?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut ipsam corrupti, odit eveniet labore?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut ipsam corrupti, odit eveniet labore?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut ipsam corrupti, odit eveniet labore?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut ipsam corrupti, odit eveniet labore?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut ipsam corrupti, odit eveniet labore?</li>
                                        </ol>
                                    </p>
                                    <h2 className="text-gray-900/100 text-2xl font-semibold " >Rounds 2</h2>
                                    <p className=" py-3 text-base leading-relaxed text-gray-800 ">
                                        <ol className="list-decimal list-inside ">
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut ipsam corrupti, odit eveniet labore?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut ipsam corrupti, odit eveniet labore?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut ipsam corrupti, odit eveniet labore?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut ipsam corrupti, odit eveniet labore?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut ipsam corrupti, odit eveniet labore?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut ipsam corrupti, odit eveniet labore?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut ipsam corrupti, odit eveniet labore?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut ipsam corrupti, odit eveniet labore?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut ipsam corrupti, odit eveniet labore?</li>
                                        </ol>
                                    </p>
                                </div>

                            </div>
                        </div>
                        {/* <!-- Modal footer --> */}
                        {/* <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">

                            <button data-modal-toggle="extralarge-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal