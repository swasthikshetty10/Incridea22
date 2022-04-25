import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import EventsCard from "./EventsCard";

import src from "../../Images/Sponsor/codingninja.png";

function Sponsor() {
  return (
    <>
      {/* <Navbar tab="sponsor" /> */}
      <div className="bg-[#171717] ">
        <div className="flex justify-center flex-col items-center gap-8 lg:gap-14 pt-10 lg:pt-20">
          <h1 className="text-5xl md:text-6xl tracking-widest  font-bold text-[#EDEDED]">
            Our Sponsors
          </h1>
          <div className="flex justify-center gap-5 flex-wrap">
            <EventsCard src={src} />
            <EventsCard src={src} />
            <EventsCard src={src} />
            <EventsCard src={src} />
            <EventsCard src={src} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sponsor;
