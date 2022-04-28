import React, { useState } from 'react'
import { BsFillCalendar3RangeFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import Modal from '../Event2/Modal';
import { FaUsers } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

function EventsCard({ name, src, desc, time, venue, day, branch, round, data }) {

    const [openModal, setModal] = useState(false);

    return (
        <>
            <Fade duration={1000} delay={100} >
                <div className="relative flex  flex-col mx-0 justify-center rounded-2xl shadow-md hover:shadow-lg  cursor-pointer transition-all ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300    " onClick={() => { setModal(true) }} >


                    <div className="mx-auto flex w-60 h-72 flex-col pb-8 justify-start bg-[#1d1d1d]  rounded-none shadow-xl  ">
                        <img className="aspect-video rounded-t-none object-cover object-center  " src={src} />
                        <div className="p-2 flex flex-col justify-between h-full  ">
                            <div className='text-center pb-2'>
                                <h1 className=" text-2xl text-center font-medium text-gray-100 ">{name}</h1>
                            </div>

                            <div>

                                <div className='text-center text-gray-400'>
                                    <span className='inline-flex overflow-wrap mr-2'>{venue}</span>|
                                    <span className='inline-flex overflow-wrap  ml-2'>{time}</span>
                                </div>
                                <div className='text-center  text-sm text-gray-500'>
                                    {round && `round ${round}`}
                                </div>

                            </div>
                            {/* <p className="text-sm tracking-tight text-center font-medium text-[#a5a5a5] leading-6  "> {desc} </p> */}

                        </div>
                        <div className=' flex justify-center'>
                            <button type="button" class="absolute bottom-[-1.75rem]   text-white bg-[#9d7643]  hover:bg-gradient-to-bl  font-medium rounded-none text-sm px-5 py-2.5 text-center w-fit m-auto   my-2" onClick={() => { setModal(true) }}  >Know More <BsFillArrowRightCircleFill className='inline mx-1' /> </button>
                        </div>

                    </div>
                </div>
            </Fade>
            {openModal &&

                < Modal
                    data={data}


                    closeModal={setModal} />

            }
        </>
    )
}

export default EventsCard;