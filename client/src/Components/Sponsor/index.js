// import React, { useEffect, useState } from 'react'
import Navbar from "../Navbar";
import EventsCard from "./EventsCard";

import src from "../../Images/Sponsor/codingninja.png";

const ImageSrcLinks = [
  "../../Images/Sponsor/codingninja.png",
  "../../Images/Sponsor/redfm.png",
  "../../Images/Sponsor/lifestyle.png",
  "../../Images/Sponsor/dlithe.png",
];

const SponsorTitles = ["Coding Ninjas", "Red FM", "Lifestyle", "Dlithe"];

const SponsorDescriptions = [
  "Coding Ninjas is a place that trains passionate people in various technologies. Our core programs are intensive, immersive training that transforms people into outstanding developers.",
  "Red FM is an Indian FM radio network headquartered in Chennai and owned by Chennai-based Sun Group. Red FM 93.5 is India's only Hindi CHR FM radio network spread across 48 cities.",
  "Originating in India in 1999, Lifestyle is an Emirati retail fashion brand which comes under Dubai-based retail and hospitality conglomerate, the Landmark Group.",
  "Being agile is the need of hour. The world is on disruptive mode. The world is looking for agile workforce that are adoptable and produce quicker results.",
];
const SponsorWebsiteLinks = [
  "https://www.codingninjas.com/",
  "https://www.redfmindia.in",
  "https://www.lifestylestores.com/in/en/",
  "https://dlithe.com/",
];

function Sponsor() {
  return (
    <>
      <Navbar tab="sponsor" />
      <div className="bg-[#171717] ">
        <div className="flex justify-center flex-col items-center gap-8 lg:gap-14 pt-10 lg:pt-20">
          <h1 className="text-5xl md:text-6xl tracking-widest  font-bold text-[#EDEDED]">
            Our Sponsors
          </h1>
          <div className="flex justify-center gap-5 flex-wrap">
            <EventsCard
              ImageSrc={ImageSrcLinks[0]}
              SponsorTitle={SponsorTitles[0]}
              SponsorDesc={SponsorDescriptions[0]}
              SponsorWebsiteLink={SponsorWebsiteLinks[0]}
            />
            <EventsCard
              ImageSrc={ImageSrcLinks[1]}
              SponsorTitle={SponsorTitles[1]}
              SponsorDesc={SponsorDescriptions[1]}
              SponsorWebsiteLink={SponsorWebsiteLinks[1]}
            />
            <EventsCard
              ImageSrc={ImageSrcLinks[2]}
              SponsorTitle={SponsorTitles[2]}
              SponsorDesc={SponsorDescriptions[2]}
              SponsorWebsiteLink={SponsorWebsiteLinks[2]}
            />
            <EventsCard
              ImageSrc={ImageSrcLinks[3]}
              SponsorTitle={SponsorTitles[3]}
              SponsorDesc={SponsorDescriptions[3]}
              SponsorWebsiteLink={SponsorWebsiteLinks[3]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sponsor;
