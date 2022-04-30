import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import higher from "../../Images/home/higher.png"
import avatar from "../../Images/home/avatar.png"
import Counter from "./Counter";
import { Slide, Fade } from 'react-awesome-reveal'
import { AiOutlineDownload } from 'react-icons/ai'
import schedule from '../../Assets/schedule.xlsx'
import rulebook from '../../Assets/rulebook.pdf'
// import cloud from './cloud1.png'
import chakra from './chakra.png'
import { Link } from "react-router-dom";
function Home() {
  const [rotation, setRotation] = useState("rotate-0")
  const [second, secSecond] = useState(0)
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const rot = `${(second * 6) % 360}deg`
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
    setRotation(rot)
  }, [second])
  return (
    <>
      <div className="">

        <Fade duration={1500}>
          <Navbar tab="home" sticky={true} />
        </Fade>
        <div className=" overflow-hidden  relative  flex py-5 items-center justify-center flex-col-reverse md:flex-row tracking-wide" style={{ fontFamily: "CinzelDecorative-Bold" }}>
          {/* Fog divs */}
          <div id="foglayer_01" className="fog">
            <div className="image01"></div>
            <div className="image02"></div>
          </div>
          <div id="foglayer_02" className="fog">
            <div className="image01"></div>
            <div className="image02"></div>
          </div>
          <div id="foglayer_03" className="fog">
            <div className="image01"></div>
            <div className="image02"></div>
          </div>
          <Slide direction="left" duration={1000}>
            <div className="flex gap-3 px-5 flex-col" >
              <img src={higher} className=" " alt="" />
              <p className="text-gray-100 font-body text-lg  text-justify" >An amalgamation of all forms of technical, literary and cultural activities. Incridea is a celebration of fervour and talent. It is the national level techno-cultural fest of
                <a target="blank" className="  text-[#cd9b58] hover:text-white transition-colors ease-out text-base" href="https://nmamit.nitte.edu.in/"> NMAM Institute of Technology</a>, Nitte.
              </p>
              <div className="select-none bg-white border-0 hover:bg-opacity-100  bg-opacity-10 text-white px-6 py-2 w-fit font-body  text-center " >
                Registrations begin May Day, 12PM
              </div>
            </div>
          </Slide>
          <Slide duration={1000} direction="right" >
            <div className="min-w-fit hover:scale-95 hover:translate-y-3 delay-50 duration-500 transform ease-in-out">
              {/* <img className="absolute top-20 left-5 z-10 md:top-8 md:left-[50rem] md:h-[90vh] " src={circle} alt="" /> */}
              <img className="md:max-w-[50vw]" src={avatar} alt="" />
            </div>
          </Slide>
          {/* <Slide className="w-full h-full absolute -z-10" direction="left" duration={3500} delay={100}>
          <img className="custom-animation md:h-full w-96 sm:w-full top-0 right-0  translate-x-12  h-64 sm: md:translate-x-72 lg:translate-x-96 md:scale-80" src={cloud} alt="" />
        </Slide> */}

          <div className="h-20 overflow-hidden w-[125%] hidden border-[#9d7643]/100 border-t-2 md:block absolute -bottom-10 -rotate-3">
            <div className="  p-10 w-full bg-gradient-to-b  bg-black   to-"></div>
          </div>
        </div>

      </div>
      <div className="relative select-none overflow-hidden pt-36 pb-56">
        <div className="transform ease-linear absolute w-full flex  justify-between ">
          <div className=" shrink-0 -ml-[305px] md:-ml-[395px]  " >
            <img style={{ transform: `rotate(-${rotation})` }} className={`transform ease-linear duration-50 h-[30rem] md:h-[40rem] w-auto`} src={chakra} alt="" />
          </div>
          <div className="shrink-0 -mr-[395px] hidden md:block -mt-[95px]">
            <img style={{ transform: `rotate(${rotation})` }} className="h-[40rem] w-auto transform ease-linear duration-50 " src={chakra} alt="" />
          </div>
        </div>
        <Slide direction="up">
          <div className="flex mt-[4rem] justify-center text-center items-center py-5" style={{ fontFamily: "CinzelDecorative-Bold" }}>
            <div className=" flex flex-col items-center justify-center pt-20 -mt-36 md:m-0 ">
              <h2 className="inline-flex gap-3 text-3xl sm:text-4xl lg:text-5xl m-3 text-[#9d7643] p-2 sm:p-3 lg:p-4 bg-opacity-30 backdrop-blur-lg tracking-wide rounded-md bg-gray-1000 font-light">The Countdown Has Begun</h2>
              <Counter setSecond={secSecond} />
              <h2 className="p-1 text-md md:text-xl mt-5 text-gray-400  bg-opacity-30 backdrop-blur-lg rounded-md bg-gray-1000">...and while you're here, check out our <Link to="/events" className="text-[#cd9b58] hover:text-gray-100 transition-colors ease-out ">events</Link>!</h2>
            </div>
          </div>
        </Slide>
      </div>
      <div direction="up" delay={500}>
        <div style={{ fontFamily: "CinzelDecorative-Bold" }} className=" p-10 bg-opacity-20 backdrop-blur-lg text-white  bg-gray-900 flex flex-col gap-4 md:gap-10 md:flex-row justify-center text-center items-stretch md:items-center">
            <a href={rulebook} download={'Incridea 22 Rulebook.pdf'} target="_blank" rel="noreferrer" className=" px-4 py-2 md:px-5 md:py-3 inline-flex items-center gap-2 font-bold text-[#9d7643] transition-colors ease-out transition-duration-50 text-xl hover:bg-[#9d7643] hover:text-white border-[#9d7643] border-2 items-center justify-center">
            Download Rulebook <AiOutlineDownload className="text-2xl" />
            </a>
            <a href={schedule} download={"Incridea 22 Schedule.xlsx"} target="_blank" rel="noreferrer" className=" px-3 py-2 md:px-5 md:py-3 inline-flex items-center gap-2 font-bold text-[#9d7643] transition-colors ease-in transition-duration-50 text-xl hover:bg-[#9d7643] hover:text-white border-[#9d7643] border-2 items-center justify-center">
              Download Schedule <AiOutlineDownload className="text-2xl" />
            </a>
          {/* <div className="">
            <h2 className="font-semibold text-3xl" style={{ fontFamily: "CinzelDecorative-Bold" }}>
              Be Part of Incridea's Events
            </h2>
          </div> */}
        </div>
      </div>
      <div>

      </div>
    </>
  );
}

export default Home;
