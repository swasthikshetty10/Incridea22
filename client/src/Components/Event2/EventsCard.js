import React, { useState } from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Modal from '../Event2/Modal';
import { Fade } from "react-awesome-reveal";

function EventsCard({ name, src, desc, time, venue, day, branch, round, data }) {

    const [openModal, setModal] = useState(false);

    return (
        <>
            <Fade>
                <div className="relative flex  flex-col mx-0 justify-center rounded-2xl shadow-md hover:shadow-lg  cursor-pointer transition-all ease-out  hover:-translate-y-1 hover:scale-103 duration-300    "  >
                    <div className="relative flex  flex-col mx-0 justify-center rounded-2xl shadow-md hover:shadow-lg  cursor-pointer transition-all ease-out  hover:-translate-y-1 hover:scale-105 duration-300    " >
                        <div className="mx-auto flex w-60 h-72 flex-col pb-8 justify-start bg-[#1d1d1d]/50  rounded-none shadow-xl  ">
                            <img className="aspect-video rounded-t-none object-cover object-center" alt={name} src={src} />
                            <div className="p-2 flex flex-col justify-start gap-1 h-full  ">
                                <div className='text-center pb-1'>
                                    <h1 className={`${name.length > 15 ? name.length > 20 ? "text-lg" : "text-xl" : "text-2xl "} text-center font-medium text-gray-100 `}>{name}</h1>
                                    <div className='text-center  text-sm text-gray-500'>
                                        {round && `round ${round}`}
                                    </div>
                                </div>

                                <div>

                                    <div className={`text-center text-gray-400`}>
                                        <div>
                                            <span className={`inline-flex font-bold overflow-wrap mr-2   ${`${venue}`.length > 25 ?
                                                (`${venue}`.length > 32 ? 'text-xs' : "text-sm")
                                                : 'text-md'}`}>{venue}</span>
                                        </div>
                                        <div className='flex justify-center text-sm '>
                                            <span className='inline-flex overflow-wrap  pr-2'>{day ? `1${parseInt(day) + 1}/05/2022` : "All day"}</span> <span className='font-extrabold text-[#9d7643]'>|</span>
                                            <span className='inline-flex overflow-wrap  pl-2'> {time ? time : "NA"}</span>
                                        </div>
                                    </div>


                                </div>
                                {/* <p className="text-sm tracking-tight text-center font-medium text-[#a5a5a5] leading-6  "> {desc} </p> */}

                            </div>


                        </div>
                        <div className=' flex justify-center'>
                            <button type="button" className="absolute bottom-[-1.75rem] font-semibold  text-[#9d7643] transition ease-in-out transition-duration-100  bg-[#000000] hover:bg-[#9d7643] backdrop-grayscale hover:text-white border-[#9d7643] border-2   rounded-none text-sm px-5 py-2.5 text-center w-fit m-auto   my-2" onClick={() => { setModal(true) }}  >Know More <BsFillArrowRightCircleFill className='inline mx-1' /> </button>
                        </div>

                    </div>
                </div>
            </Fade>
            {openModal &&

                < Modal
                    data={data}
                    img={src}


                    closeModal={setModal} />

            }
        </>
    )
}

export default EventsCard;