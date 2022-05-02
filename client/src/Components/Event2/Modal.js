import React from 'react'
import { BsFillCalendar3RangeFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { BiTimeFive } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { Zoom } from "react-awesome-reveal"


function Modal({ data, img, closeModal }) {

    return (
        <Zoom as="div" duration={500} className='flex flex-col h-screen justify-center items-center fixed top-0 right-0 left-0 z-[999] w-full'>
            <div id="extralarge-modal" tabindex="-1" className=" overflow-y-hidden  md:inset-0  flex items-center justify-center justify-items-center overflow-x-hidden  ">
                <div className="relative p-4 w-full max-w-7xl h-full md:h-auto backdrop-lg rounded-lg shadow-lg  border-0  " >
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-blend-color rounded-lg shadow  bg-clip-padding backdrop-blur  bg-opacity-90 bg-gradient-to-r from-[#232526] to-[#414345] ">
                        {/* <!-- Modal header --> */}
                        <div className="flex flex-wrap justify-between items-center p-3 md:p-4  rounded-t border-b dark:border-gray-600">
                            <div className=''>
                                <h3 className="text-3xl font-bold  text-gray-100 "  >
                                    {data.name}
                                </h3>
                                {data.round && <p className='text-sm text-gray-200'>Round {data.round}</p>}
                            </div>
                            <button type="button" className="hover:text-white text-gray-200 bg-transparent gap-1 text-md p-1.5 ml-auto inline-flex items-center " data-modal-toggle="extralarge-modal" onClick={() => { closeModal(false) }} >
                                {/* <ImCross /> */}
                                <IoIosArrowBack className=" inline" /> Back
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="overflow-y-scroll sm:overflow-y-auto  h-[80vh] sm:h-auto p-1 sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row">

                            <div className="p-3 flex flex-col justify-between space-y-3 sm:min-w-max">
                                <img src={img} alt={""} class=" block sm:w-32 md:w-48 lg:w-72" />
                                <div>

                                    <div className=" text-gray-100"> <GoLocation className=" text-igold inline mr-2" /> {data.venue}</div>
                                    <div className=" text-gray-100"> <BsFillCalendar3RangeFill className=" text-igold inline mr-2" /> {data.day ? `1${parseInt(data.day) + 1}/05/2022` : "- "}</div>
                                    <div className=" text-gray-100"> <BiTimeFive className=" text-igold inline mr-2" />{data.Time}</div>
                                    <div className=" text-gray-100"> <FaBuilding className=" text-igold inline mr-2" /> {data.branch}  </div>
                                    {/* <div className=" text-white"> <BiTimeFive className="inline mr-2" />Team - 5:00PM</div> */}
                                    <div className="pt-3 text-gray-100 text-lg bold"> <HiUserGroup className="inline mr-2" /><span className='font-bold'>Organizer details</span>
                                        <br />
                                        {data.contactDetails.map((org, i) =>
                                            <div key={i} className=''>
                                                <span className='text-[17px]' >
                                                    {org.name}
                                                </span><br />
                                                <span className='text-sm' >
                                                    <a href={`tel:${org.phoneNumber}`}>{org.phoneNumber}</a>
                                                </span>

                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 pt-0  space-y-6  sm:overflow-y-scroll  sm:h-[75vh]">
                                <div className="">

                                    <h1 className="text-gray-100/100 text-4xl font-bold py-3">Description</h1>
                                    <p className=" text-base leading-relaxed text-gray-100 ">
                                        {data.fullDesc}

                                    </p>
                                </div>
                                {
                                    data.rules && <div className="">
                                        <h1 className="text-gray-100/100 text-4xl font-bold py-3">Rules</h1>
                                        <p className="  text-base leading-relaxed text-gray-100 ">
                                            <ol className=" list-decimal list-inside">
                                                {
                                                    data.rules.map((value, index) =>
                                                        <li key={index}>{value}</li>
                                                    )
                                                }
                                            </ol>
                                        </p>

                                    </div>
                                }
                                {
                                    data.games && <>
                                        <h1 className="text-gray-100/100 text-4xl pt-3 font-bold ">Games</h1>
                                        {
                                            data.games.map((game, idx) => (
                                                <div key={idx}>
                                                    <h2 className="text-gray-100/100 text-3xl font-bold ">{game.name}</h2>
                                                    {
                                                        game.rules &&
                                                        <>
                                                            <h3 className=" text-gray-100/100 text-2xl font-semibold pt-3 pb-1">Rules</h3>
                                                            <ol className='list-decimal list-inside text-base leading-relaxed text-gray-100'>
                                                                {game.rules?.map((rule, i) => <li key={i}>{rule}</li>)}
                                                            </ol>
                                                        </>
                                                    }
                                                    {game.rounds && <>
                                                        <h3 className="text-gray-100/100 text-2xl font-semibold pt-3 pb-1">Rounds</h3>
                                                        {game.rounds && Object.keys(game.rounds)?.map((key, index) => {
                                                            return <div key={index}>
                                                                <h2 className="text-gray-100 text-xl font-light pt-2  " >{key}</h2>
                                                                <ol className="py-1 text-base leading-relaxed text-gray-100 list-decimal list-inside">
                                                                    {game.rounds[key].map((val, i) => {
                                                                        return <li>{val}</li>
                                                                    })}
                                                                </ol>
                                                            </div>
                                                        }
                                                        )}</>}
                                                    {game.registrationDetails && <>
                                                        <h3 className=" text-gray-100/100 text-2xl font-semibold pt-3 pb-1">Registration Details</h3>
                                                        <ol className='list-decimal list-inside text-base leading-relaxed text-gray-100'>
                                                            {game.registrationDetails?.map((detail, i) => <li key={i}>{detail}</li>)}
                                                        </ol>
                                                    </>}
                                                </div>
                                            ))
                                        }
                                    </>
                                }
                                {
                                    data.designCriteria && <div className="">
                                        <h1 className="text-gray-100/100 text-4xl font-bold py-3">Design Criteria</h1>
                                        <p className="  text-base leading-relaxed text-gray-100 ">
                                            <ol className=" list-decimal list-inside">
                                                {
                                                    data.designCriteria.map((value, index) =>
                                                        <li key={index}>{value}</li>
                                                    )
                                                }
                                            </ol>
                                        </p>

                                    </div>
                                }
                                {
                                    data.botSpecifications && <div className="">
                                        <h1 className="text-gray-100/100 text-4xl font-bold py-3">Bot Specifications</h1>
                                        <p className="  text-base leading-relaxed text-gray-100 ">
                                            <ol className=" list-decimal list-inside">
                                                {
                                                    data.botSpecifications.map((value, index) =>
                                                        <li key={index}>{value}</li>
                                                    )
                                                }
                                            </ol>
                                        </p>

                                    </div>
                                }
                                {
                                    data.teamRegulations && <div className="">
                                        <h1 className="text-gray-100/100 text-4xl font-bold py-3">Team Regulations</h1>
                                        <p className="  text-base leading-relaxed text-gray-100 ">
                                            <ol className=" list-decimal list-inside">
                                                {
                                                    data.teamRegulations.map((value, index) =>
                                                        <li key={index}>{value}</li>
                                                    )
                                                }
                                            </ol>
                                        </p>

                                    </div>
                                }
                                {
                                    data.teamRegulations && <div className="">
                                        <h1 className="text-gray-100/100 text-4xl font-bold py-3">Team Regulations</h1>
                                        <p className="  text-base leading-relaxed text-gray-100 ">
                                            <ol className=" list-decimal list-inside">
                                                {
                                                    data.teamRegulations.map((value, index) =>
                                                        <li key={index}>{value}</li>
                                                    )
                                                }
                                            </ol>
                                        </p>

                                    </div>
                                }
                                {
                                    data.botDimensions && <div className="">
                                        <h1 className="text-gray-100/100 text-4xl font-bold py-3">Bot Dimensions</h1>
                                        <p className="  text-base leading-relaxed text-gray-100 ">
                                            <ol className=" list-decimal list-inside">
                                                {
                                                    data.botDimensions.map((value, index) =>
                                                        <li key={index}>{value}</li>
                                                    )
                                                }
                                            </ol>
                                        </p>

                                    </div>
                                }
                                {
                                    data.arenaSpecifications && <div className="">
                                        <h1 className="text-gray-100/100 text-4xl font-bold py-3">Arena Specifications</h1>
                                        <p className="  text-base leading-relaxed text-gray-100 ">
                                            <ol className=" list-decimal list-inside">
                                                {
                                                    data.arenaSpecifications.map((value, index) =>
                                                        <li key={index}>{value}</li>
                                                    )
                                                }
                                            </ol>
                                        </p>

                                    </div>
                                }
                                <div className="">
                                    {

                                        data.roundDetails && (
                                            <>
                                                <h1 className="text-gray-100/100 text-4xl py-3 font-bold ">Rounds</h1>
                                                {Array.isArray(data.roundDetails) ? <ol className='  text-base leading-relaxed text-gray-100'>
                                                    {data.roundDetails.map((detail, idx) => <li key={idx}>{detail}</li>)}
                                                </ol>
                                                    :
                                                    Object.keys(data.roundDetails).map((key, index) =>
                                                        <div key={index}>
                                                            <h2 className="text-gray-100 text-xl font-semibold pt-3  " >Rounds {index + 1}</h2>
                                                            <p className=" py-1 text-base leading-relaxed text-gray-100 ">
                                                                <ol className=" list-decimal list-inside">
                                                                    {data.roundDetails[key].map((val, i) => {
                                                                        return <li>{val}</li>
                                                                    })}
                                                                </ol>
                                                            </p>
                                                        </div>
                                                    )
                                                }
                                            </>
                                        )
                                    }

                                </div>
                                {
                                    data.judgingCriteria && <div className="">

                                        <h1 className="text-gray-100/100 text-4xl font-bold py-3">Judging Criteria</h1>
                                        <p className="  text-base leading-relaxed text-gray-100 ">
                                            <ol className=" list-decimal list-inside">
                                                {
                                                    data.judgingCriteria.map((value, index) =>

                                                        <li key={index}>{value}</li>
                                                    )
                                                }
                                            </ol>
                                        </p>

                                    </div>
                                }
                                <div className='p-3'></div>
                            </div>
                        </div>
                        {/* <!-- Modal footer --> */}
                        {/* <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">

                            <button data-modal-toggle="extralarge-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-100 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </Zoom>
    )
}

export default Modal