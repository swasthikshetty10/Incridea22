import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar";
import higher from "../../Images/home/higher.png";
import avatar from "../../Images/home/avatar.png";
import Counter from "./Counter";
import { Slide, Fade } from "react-awesome-reveal";
import { AiOutlineDownload } from "react-icons/ai";
import schedule from "../../Assets/schedule.xlsx";
import chakra from "./chakra.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
function Home() {
  const [rotation, setRotation] = useState("rotate-0");
  const [second, secSecond] = useState(0);
  const user = useContext(AuthContext);
  useEffect(() => {
    const rot = `${(second * 6) % 360}deg`;
    setRotation(rot);
  }, [second]);
  return (
    <>
      <div className="">
        <Fade duration={1500}>
          <Navbar tab="home" sticky={true} />
        </Fade>
        <div
          className=" overflow-hidden  relative  flex py-12 items-center justify-center flex-col-reverse md:flex-row tracking-wide"
          style={{ fontFamily: "CinzelDecorative-Bold" }}
        >
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
            <div className="flex gap-3 px-5 md:px-12 flex-col">
              <img src={higher} className=" " alt="" />
              <p className="text-gray-100 font-body text-lg  text-justify">
                An amalgamation of all forms of technical, literary and cultural
                activities. Incridea is a celebration of fervour and talent. It
                is the national level techno-cultural fest of
                <a
                  target="blank"
                  className="  text-[#cd9b58] hover:text-white transition-colors ease-out text-base"
                  href="https://nmamit.nitte.edu.in/"
                >
                  {" "}
                  NMAM Institute of Technology
                </a>
                , Nitte.
              </p>
              <Link to={user ? "/events" : "/login"}>
                <div className="select-none bg-white hover:bg-white/25 cursor-pointer border-0 text-white transition ease-in duration-100   text-white bg-opacity-10  px-6 py-2 w-fit font-body  text-center ">
                  {user === null
                    ? "Registrations Open Now!"
                    : `Check Out The Events!`}
                </div>
              </Link>
            </div>
          </Slide>
          <Slide duration={1000} direction="right">
            <div className="min-w-fit hover:scale-95 hover:translate-y-3 delay-50 duration-500 transform ease-in-out">
              <img className="md:max-w-[50vw]" src={avatar} alt="" />
            </div>
          </Slide>

          <div className="h-20 overflow-hidden w-[125%] hidden border-igold/100 border-t-2 md:block absolute -bottom-10 -rotate-3">
            <div className="  p-10 w-full bg-gradient-to-b  bg-black   to-"></div>
          </div>
        </div>
      </div>
      <div className="relative select-none overflow-hidden pt-26 md:pt-36 pb-56">
        <div className="transform ease-linear absolute w-full flex  justify-between ">
          <div className=" shrink-0 py-52 md:py-0 md:mt-0 -ml-[305px] md:-ml-[395px]  ">
            <img
              style={{ transform: `rotate(-${rotation})` }}
              className={`transform ease-linear duration-50 h-[30rem] md:h-[40rem] w-auto`}
              src={chakra}
              alt=""
            />
          </div>
          <div className="shrink-0 -mr-[395px] hidden md:block -mt-[95px]">
            <img
              style={{ transform: `rotate(${rotation})` }}
              className="h-[40rem] w-auto transform ease-linear duration-50 "
              src={chakra}
              alt=""
            />
          </div>
        </div>
        <Slide direction="up">
          <div
            className="flex mt-[4rem] justify-center text-center items-center py-5"
            style={{ fontFamily: "CinzelDecorative-Bold" }}
          >
            <div className=" flex flex-col items-center justify-center pt-20 -mt-36 md:m-0 ">
              <h2 className="inline-flex gap-3 text-3xl sm:text-4xl lg:text-5xl m-3 text-igold p-2 sm:p-3 lg:p-4 bg-opacity-30 backdrop-blur-lg tracking-wide rounded-md bg-gray-1000 font-light">
                The Countdown Has Begun
              </h2>
              <Counter setSecond={secSecond} />
              <h2 style={{fontFamily: 'Cinzel'}} className="p-1 text-md md:text-xl mt-5 text-gray-400  bg-opacity-30 backdrop-blur-lg rounded-md bg-gray-1000">
                ...in the meantime, check out our{" "}
                <Link
                  to="/events"
                  className="text-[#cd9b58] hover:text-gray-100 transition-colors ease-out "
                >
                  events
                </Link>
                !
              </h2>
            </div>
          </div>
        </Slide>
      </div>
      <>
        <div
          style={{ fontFamily: "Cinzel" }}
          className=" p-10 bg-opacity-20 backdrop-blur-lg text-white  bg-gray-900 flex flex-col gap-4 md:gap-10 md:flex-row justify-center text-center items-stretch md:items-center"
        >
          <a
            href={
              "https://drive.google.com/file/d/1LE77p-mbwct-fWMzIKQuIzg2_6jF4NZh/view?usp=sharing"
            }
            download={"Incridea 22 Rulebook.pdf"}
            target="_blank"
            rel="noreferrer"
            className=" px-4 py-2 md:px-5 md:py-3 inline-flex items-center gap-2 font-bold text-igold transition-colors ease-out transition-duration-50 text-xl hover:bg-igold hover:text-white border-igold border-2 items-center justify-center"
          >
            Download Rulebook <AiOutlineDownload className="text-2xl" />
          </a>
          <a
            href={schedule}
            download={"Incridea 22 Schedule.xlsx"}
            target="_blank"
            rel="noreferrer"
            className=" px-3 py-2 md:px-5 md:py-3 inline-flex items-center gap-2 font-bold text-igold transition-colors ease-in transition-duration-50 text-xl hover:bg-igold hover:text-white border-igold border-2 items-center justify-center"
          >
            Download Schedule <AiOutlineDownload className="text-2xl" />
          </a>
          {/* <div className="">
            <h2 className="font-semibold text-3xl" style={{ fontFamily: "CinzelDecorative-Bold" }}>
              Be Part of Incridea's Events
            </h2>
          </div> */}
        </div>
      </>
      <div></div>
    </>
  );
}

export default Home;
