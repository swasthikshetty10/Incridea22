import React from "react";
import Navbar from "../Navbar";
import EventsCard from "./EventsCard";
import codeNinja from "../../Images/Sponsor/codingninja.png";
import redfm from "../../Images/Sponsor/redfm.png";
import lifestyle from "../../Images/Sponsor/lifestyle.png";
import dlithe from "../../Images/Sponsor/dlithe.png";
import paramvah from "../../Images/Sponsor/paramvah.jpg";
import { Fade , Zoom, Slide } from "react-awesome-reveal";


const SponsorDetails = [
  {
    name: "Coding Ninjas",
    description: `At Coding Ninjas' mission is to continuously innovate the best ways to train the next generation of developers and to transform the the way tech education is delivered.
      Coding Ninjas boasts of world-class teaching faculty and a state-of-art learning platform for Coding education with faculty alumni of IIT, Stanford, IIIT and Facebook. Coding Ninjas teaches 17+ Programming courses ins Machine Learning, Data Science, Web Development, Android and more.`,
    image: codeNinja,
    url: "https://www.codingninjas.com/",
  },
  {
    name: "Paramvah Studios",
    
    description: `Paramvah Studios aims to be a world class production house creating memorable films & characters using latest technologies & best creative talents. We are a production house, engaged in creating movie content and Paramvah Studios is more than just a name for us.`,
    image: paramvah,
    url: "https://www.paramvah.com/",
  },
  {
    name: "Red FM",
    description: `RED FM* Network (RED FM + SURYAN FM) through its presence across 64 cities caters to over 40 million listeners. We have been recently rated as India's most admired FM radio station by the ASF. Red FM offers advertisers a number of distinctive opportunities to reach their target audiences using any of our specialized verticals.`,
    image: redfm,
    url: "https://www.redfmindia.in",
  },
  {
    name: "Lifestyle",
    description: `Lifestyle International (P) Ltd. opened its first Lifestyle store in India in 1999 and in a little over a decade has come to be recognized amongst leading retail companies in the country.
      It is a part of the multi-billion dollar Dubai based retail and hospitality conglomerate Landmark Group.`,
    image: lifestyle,
    url: "https://www.lifestylestores.com/in/en/",
  },
  {
    name: "DLithe",
    description: `While academics and work provides required knowledge and experience, it is necessary for individuals to bridge gaps in skills. 
      Our vision is to build an agile workforce which is competent in “Domain, Technology and Personality” towards readiness of global industry needs. Upgrade your skill and be competent to work in agile world. Explore your journey with us!`,
    image: dlithe,
    url: "https://dlithe.com/",
  },

];

const Sponsor = () => {
  return (
    <>
      {console.log(SponsorDetails)}
      <Navbar tab="sponsors" />
      <div className="bg-black sm:p-4 lg:p-8">
        <div className="text-center gap-5 pt-2">
          <h1
            className="font-title  text-5xl md:text-6xl tracking-widest pb-4
           text-[#EDEDED]"
          >
            OUR SPONSORS
          </h1>
          <p className="text-[#9d7643] font-bold lg:mb-6 pt-1 pb-3 text-2xl font-body text-center">
            Big names backing an extraordinary fest
          </p>
          <div className="gap-5 ">
          <Fade duration={1000} delay={100} >

            {SponsorDetails.map((sponorDetail , i) => (
              <EventsCard
                rev = {i%2}
                ImageSrc={sponorDetail.image}
                SponsorTitle={sponorDetail.name}
                SponsorDesc={sponorDetail.description}
                SponsorWebsiteLink={sponorDetail.url}
              />
            ))}
            </Fade>
          </div>
        </div>
      </div>
      {/* {console.log(SponsorDetails)} */}
    </>
  );
};

export default Sponsor;
