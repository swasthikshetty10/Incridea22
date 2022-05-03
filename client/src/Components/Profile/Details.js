import React, { useState, useEffect } from "react";
import { getUserInfo } from "../../firebaseConfig";
import QRCode from "qrcode";
import { HiOutlineMail, HiUser } from "react-icons/hi"
import { MdPhoneAndroid } from "react-icons/md"
import { BsCloudDownload } from "react-icons/bs"
import { GiShipWheel } from 'react-icons/gi'
import schedule from '../../Assets/schedule.xlsx'
import { nickNames } from './nickNames.js'

function Details({user}) {

    const [src, setSrc] = useState("");


    const [participant, setParticipant] = useState({});
    useEffect(() => {
        if(user) {
            getUserInfo(user.uid)
                .then((participant) => {
                    setParticipant(participant);
                    QRCode.toDataURL(participant.pId + '').then((data) => {
                        setSrc(data);
                    });
                })
                .catch((e) => {
                });
        }
    }, [participant.id, user]);


    return (
        <>
            <div className="flex overflow-hidden  flex-col justify-center  py-8 bg-gray-900/30 ">
                <div className="flex flex-col-reverse items-center justify-evenly min-h-[55vh] px-4 py-8 md:flex-row  w-[95vw] md:w-[80vw] m-auto ">

                    {src ? <>
                        <div className=" text-white font-body flex flex-col  justify-between text-left px-2 py-4 leading-normal">
                            <div className=' text-center py-3 gap-x-2 ' >
                                <h2 className='tracking-wide pb-1 md:pb-2 text-3xl md:text-4xl capitalize font-bold' >Welcome, {nickNames[participant?.email?.toLowerCase().split('@')[0]] || participant.name}</h2>
                                <p>{participant.collegeName}</p>
                            </div>
                            <div className='space-y-2 text-center pb-3' >
                                <div className='text-xl border-2 rounded-none p-2 font-bold border-igold text-igold text-center my-3' >PID : {participant.pId}</div>
                                <div className='text-2xl font-bold ' > Participant Info: </div>
                                <div className='text-md ' > <HiOutlineMail className='inline mx-0 ' /> {participant.email}</div>
                                <div className='text-lg' > <HiUser className='inline mx-1' /> {participant.usn?.toUpperCase()}     </div>
                                <div className='text-lg' > <MdPhoneAndroid className='inline mx-1' /> {participant.phNo}    </div>
                            </div>
                        
                        </div>
                        
                        
                        
                        <div className='w-fit   text-white' >
                            <img src={src} className="min-w-[200px] w-[60vw] sm:w-[30vw] md:w-[18vw] m-auto pt-4 pb-2  " alt="QR code" />
                            <h3 className='text-center text-2xl ' >{participant.pId}</h3>
                        </div>
                    </> :
                    <div >
                    <GiShipWheel className="text-center text-8xl text-igold animate-spin-slow" />
                </div>
                    }


                </div>

                <div className="flex justify-center pb-10 gap-x-5 ">
                <a href={"https://drive.google.com/file/d/1LE77p-mbwct-fWMzIKQuIzg2_6jF4NZh/view?usp=sharing"} download={'Incridea 22 Rulebook.pdf'} target="_blank" rel="noreferrer" className=" text-lg  font-semibold  text-igold transition ease-in-out transition-duration-100  bg-[#000000] hover:bg-igold backdrop-grayscale hover:text-white border-igold border-2   rounded-none  px-3 py-2.5 text-center w-fit  my-2">
            Rulebook <BsCloudDownload className='inline ml-3' />
          </a>
          <a href={schedule} download={"Incridea 22 Schedule.xlsx"} target="_blank" rel="noreferrer" className=" text-lg  font-semibold  text-igold transition ease-in-out transition-duration-100  bg-[#000000] hover:bg-igold backdrop-grayscale hover:text-white border-igold border-2   rounded-none  px-3 py-2.5 text-center w-fit  my-2">
             Schedule <BsCloudDownload className='inline ml-3' />
          </a>
                </div>
            </div>

        </>
    )
}

export default Details