import React from "react";
import Navbar from "../Navbar";
import EventsCard from "./EventsCard";
import codeNinja from "../../Images/Sponsor/codingninja.png";
import redfm from "../../Images/Sponsor/redfm.png";
import lifestyle from "../../Images/Sponsor/lifestyle.png";
import dlithe from "../../Images/Sponsor/dlithe.png";

const SponsorDetails = [
  {
    name: "Coding Ninjas",
    description:
      `At Coding Ninjas' mission is to continuously innovate the best ways to train the next generation of developers and to transform the the way tech education is delivered.
      Coding Ninjas boasts of world-class teaching faculty and a state-of-art learning platform for Coding education with faculty alumni of IIT, Stanford, IIIT and Facebook. Coding Ninjas teaches 17+ Programming courses in Foundation,l Advanced, Data & Development courses such as Machine Learning, Data Science, Web Development, Android and more. Today, Coding Ninjas ecosystem comprises of 40,000+ students and alumni, 1000+ Campus Ambassadors, 2000+ Teaching Assistants, and 150+ employees.
      `,
    image: codeNinja,
    url: "https://www.codingninjas.com/",
  },
  {
    name: "Red FM",
    description:
      `RED FM* Network (RED FM + SURYAN FM) through its presence across 64 cities caters to over 40 million listeners. We have been recently rated as India's most admired FM radio station by the ASF. Over the years we have won more than 175 awards, across various forums, including the prestigious EMVIES, ABBY's, Goa Fest, New York Radio Festival, IRF, Golden Mikes etc. Red FM offers advertisers a number of distinctive opportunities to reach their target audiences using any of our specialized verticals. Our advertising team offers you opportunities to drive your communication through our multiple verticals.`,
    image: redfm,
    url: "https://www.redfmindia.in",
  },
  {
    name: "Lifestyle",
    description:
      `Lifestyle International (P) Ltd. opened its first Lifestyle store in India in 1999 and in a little over a decade has come to be recognized amongst leading retail companies in the country.
      It is a part of the multi-billion dollar Dubai based retail and hospitality conglomerate Landmark Group. Positioned as a trendy, youthful and vibrant store, Lifestyle offers consumers an enjoyable shopping experience. Each Lifestyle store brings together multiple concepts under one roof - Apparel, Footwear, Children's Wear, Beauty & Accessories offering a convenient one stop shop and a choice of leading national & international brands to customers.`,
    image: lifestyle,
    url: "https://www.lifestylestores.com/in/en/",
  },
  {
    name: "Dlithe",
    description:
      `Being agile is the need of hour. The world is on disruptive mode. The world is looking for agile workforce that are adoptable and produce quicker results. While academics and work provides required knowledge and experience, it is necessary for individuals to bridge gaps in skills. 
      Our vision is to build an agile workforce which is competent in “Domain, Technology and Personality” towards readiness of global industry needs. Upgrade your skill and be competent to work in agile world. Explore your journey with us`,
    image: dlithe,
    url: "https://dlithe.com/",
  },
];

const Sponsor = () => {
  return (
    <>
      {console.log(SponsorDetails)}
      <Navbar tab="sponsor" />
      <div className="bg-black ">
        <div className="text-center pt-2">
          <h1 className="text-5xl md:text-6xl tracking-widest pb-5 font-bold text-[#EDEDED]">
            Our Sponsors
          </h1>
          <div className=" gap-5">
            {SponsorDetails.map((sponorDetail) => (
              <EventsCard
                ImageSrc={sponorDetail.image}
                SponsorTitle={sponorDetail.name}
                SponsorDesc={sponorDetail.description}
                SponsorWebsiteLink={sponorDetail.url}
              />
            ))}
          </div>
        </div>
      </div>
      {/* {console.log(SponsorDetails)} */}
    </>
  );
};

export default Sponsor;
