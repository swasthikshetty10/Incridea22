import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import higher from "../../Images/home/higher.png"
import avatar from "../../Images/home/avatar.png"
import Counter from "./Counter";
import { Slide, Fade } from 'react-awesome-reveal'
// import cloud from './cloud1.png'
import chakra from './chakra.png'
function Home() {
  const [rotation, setRotation] = useState("rotate-0")
  const [second, secSecond] = useState(0)
  useEffect(() => {
    const rot = `${(second * 6) % 360}deg`
    setRotation(rot)
  }, [second])
  return (
    <>

      <Fade duration={1500}>
        <Navbar tab="home" />
      </Fade>
      <div className="overflow-x-hidden relative  flex py-5 items-center justify-center flex-col-reverse md:flex-row tracking-wide" style={{ fontFamily: "CinzelDecorative-Bold" }}>
        {/* Fog divs */}
        <div id="foglayer_01" class="fog">
          <div class="image01"></div>
          <div class="image02"></div>
        </div>
        <div id="foglayer_02" class="fog">
          <div class="image01"></div>
          <div class="image02"></div>
        </div>
        <div id="foglayer_03" class="fog">
          <div class="image01"></div>
        <div class="image02"></div>
        </div>
        <Slide direction="left" duration={1000}>
          <div className="flex gap-3 px-5 flex-col" >
            <img src={higher} className=" " alt="" />
            <p className="text-gray-100 font-body text-lg  text-justify" >An amalgamation of all forms of technical, literary and cultural activities Incridea is a celebration of fervour and talent. It is the national level techno-cultural fest of
              <a target="blank" className="  text-[#cd9b58] hover:text-white transition-all ease-out delay-75 text-base" href="https://nmamit.nitte.edu.in/"> NMAM Institute of Technology</a>, Nitte.
            </p>
            <div className="select-none bg-white border-0 hover:bg-opacity-100  bg-opacity-10 text-white px-6 py-2 w-fit font-bold font-body text-center " >
              Registrations begin on 30th April, 5PM
            </div>
          </div>
        </Slide>
        <Slide duration={1000} direction="right" >
          <div className="min-w-fit hover:scale-95 delay-100 duration-300 transform ease-in">
            {/* <img className="absolute top-20 left-5 z-10 md:top-8 md:left-[50rem] md:h-[90vh] " src={circle} alt="" /> */}
            <img className="md:max-w-[50vw]" src={avatar} alt="" />
          </div>
        </Slide>
        {/* <Slide className="w-full h-full absolute -z-10" direction="left" duration={3500} delay={100}>
          <img className="custom-animation md:h-full w-96 sm:w-full top-0 right-0  translate-x-12  h-64 sm: md:translate-x-72 lg:translate-x-96 md:scale-80" src={cloud} alt="" />
        </Slide> */}

      </div>
      <div className="relative overflow-hidden pt-36 pb-96">
        <div className="absolute w-full flex justify-between ">
          <div className=" shrink-0 -ml-[305px] md:-ml-[395px]  " >
            <img style={{ transform: `rotate(-${rotation})` }} className={`h-[30rem] md:h-[40rem] w-auto`} src={chakra} alt="" />
          </div>
          <div className="shrink-0 -mr-[395px] hidden md:block -mt-[15px]">
            <img style={{ transform: `rotate(${rotation})` }} className="h-[40rem] w-auto" src={chakra} alt="" />
          </div>
        </div>
        <Slide direction="up">
          <div className="flex justify-center text-center items-center py-5" style={{ fontFamily  : "CinzelDecorative-Bold" }}>
            <div className="flex flex-col items-center justify-center pt-20 -mt-36 md:m-0 ">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl m-3 text-[#9d7643] p-2 sm:p-3 lg:p-4 bg-opacity-30 backdrop-blur-lg rounded-md bg-gray-1000">Going live in</h2>
              <Counter setSecond={secSecond} />
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}

export default Home;
