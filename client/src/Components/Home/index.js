import React from "react";
import Navbar from "../Navbar";
import higher from "../../Images/home/higher.png"
import avatar from "../../Images/home/avatar.png"
import Counter from "./Counter";


function Home() {
  return (
    <>
      <Navbar tab="home" />

      <div className="flex py-5 items-center justify-center flex-col-reverse md:flex-row ">
        <div className="flex gap-3 px-5  flex-col">
          <img src={higher} className=" " alt="" />
          <p className="text-gray-100 text-lg  text-justify" >An amalgamation of all forms of technical, literary and cultural activities Incridea is a celebration of fervour and talent. It is the national level techno-cultural fest of <a target="blank" className="underline" href="https://nmamit.nitte.edu.in/"> NMAM Institute of Technology</a> , Nitte .
          </p>
          <div className="bg-white border-0 rounded-md px-6 py-2 w-fit font-bold  text-center " >
            Registrations Starts 29th April
          </div>
        </div>

        <div className="min-w-fit">
          {/* <img className="absolute top-20 left-5 z-10 md:top-8 md:left-[50rem] md:h-[90vh] " src={circle} alt="" /> */}
          <img className="md:max-w-[50vw]" src={avatar} alt="" />
        </div>
      </div>

      <div className="flex justify-center text-center items-center py-5" style={{ fontFamily: "CinzelDecorative-Bold" }}>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl p-3 font-semibold text-[#9d7643]">Countdown Has Begun</h2>
          <Counter />
        </div>
      </div>


    </>
  );
}

export default Home;
