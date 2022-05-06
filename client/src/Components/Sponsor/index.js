import React from "react";
import Navbar from "../Navbar";
import EventsCard from "./EventsCard";
import codeNinja from "../../Images/Sponsor/codingninja.png";
import wipfli from "../../Images/Sponsor/WipfliLogo.png";
import redfm from "../../Images/Sponsor/redfm.png";
import lifestyle from "../../Images/Sponsor/lifestyle.png";
import dlithe from "../../Images/Sponsor/dlithe.png";
import paramvah from "../../Images/Sponsor/paramvah.jpg";
import Quadx from "../../Images/Sponsor/QuadXdrones.jpg"
import NrityaShaktii from "../../Images/Sponsor/NrityaShaktii.png"
import Decathlon from "../../Images/Sponsor/Decathlon-logo.png"
import Radisson from "../../Images/Sponsor/Radisson.jpg"
import yamuna from "../../Images/Sponsor/yamuna.png"
import idp from "../../Images/Sponsor/idp.png"
import harsha from "../../Images/Sponsor/harsha.png"
import dew from "../../Images/Sponsor/dew.png"
import { Fade } from "react-awesome-reveal";


const SponsorDetails = [
  {
    name: "Wipfli",
    subtitle: "Official Title Sponser",
    description: `Wipfli brings the curiosity needed to uncover what's been overlooked. Our ingenuity helps create unexpected results. Our team of more than 3,000 associates works together to bring integrated solutions to turn data into insights, to optimize workflows, to increase margins and to transform through digital innovation`,
    image: wipfli,
    url: "https://www.wipfli.com/",
  },
  {
    name: "Coding Ninjas",
    subtitle: "ED-Tech Sponser",
    description: `At Coding Ninjas' mission is to continuously innovate the best ways to train the next generation of developers and to transform the the way tech education is delivered.
      Coding Ninjas boasts of world-class teaching faculty and a state-of-art learning platform for Coding education with faculty alumni of IIT, Stanford, IIIT and Facebook. Coding Ninjas teaches 17+ Programming courses ins Machine Learning, Data Science, Web Development, Android and more.`,
    image: codeNinja,
    url: "https://www.codingninjas.com/",
  },
  {
    name: "Paramvah Studios",
    subtitle: "",
    description: `Paramvah Studios aims to be a world class production house creating memorable films & characters using latest technologies & best creative talents. We are a production house, engaged in creating movie content and Paramvah Studios is more than just a name for us.`,
    image: paramvah,
    url: "https://www.paramvah.com/",
  },
  {
    name: "Red FM",
    subtitle: "Radio Partner",
    description: `RED FM* Network (RED FM + SURYAN FM) through its presence across 64 cities caters to over 40 million listeners. We have been recently rated as India's most admired FM radio station by the ASF. Red FM offers advertisers a number of distinctive opportunities to reach their target audiences using any of our specialized verticals.`,
    image: redfm,
    url: "https://www.redfmindia.in",
  },
  {
    name: "Lifestyle",
    subtitle: "Fashion Partner",
    description: `Lifestyle International (P) Ltd. opened its first Lifestyle store in India in 1999 and in a little over a decade has come to be recognized amongst leading retail companies in the country.
      It is a part of the multi-billion dollar Dubai based retail and hospitality conglomerate Landmark Group.`,
    image: lifestyle,
    url: "https://www.lifestylestores.com/in/en/",
  },
  {
    name: "DLithe",
    subtitle: "",
    description: `While academics and work provides required knowledge and experience, it is necessary for individuals to bridge gaps in skills. 
      Our vision is to build an agile workforce which is competent in “Domain, Technology and Personality” towards readiness of global industry needs. Upgrade your skill and be competent to work in agile world. Explore your journey with us!`,
    image: dlithe,
    url: "https://dlithe.com/",
  },
  {
    name: "QuadX Drones",
    description: `Established in 2019, QuadX Drones is India's first and most trusted online store to provide end-to-end drone related services. Whether it be a shoot or a aftersales repair of your bird, QuadX Drones has got it all covered. We offer wide ranges of DJI Drones as well as custom built FPV Kwads to match all your aerial needs. `,
    image: Quadx,
    url: "https://www.quadxdrones.com/",
  },
  {
    name: "NRITYA SHAKTI",
    subtitle: "Dance Partner",
    description: `Nritya Shakti is home to all dancers to explore the best in them no matter what their age and experience is. We believe in providing world class dance education which enables our students to become performers of global standards. We are offering training programs which students can customise as per their interests from 20 different dance styles. We strive to offer a positive environment for dancers to grow and have a great learning experience. `,
    image: NrityaShaktii,
    url: "https://www.nrityashakti.com/",
  },
  {
    name: "Decathlon",
    subtitle: "Fitness Partner",
    description: `Decathlon is a family-owned company, founded in 1976, and inspired by the belief that the best sports products should be accessible to everyone.

    Ever-evolving and high performance design, the best quality at the lowest possible price, and expert advice that customers of all ages, backgrounds and skill levels can access in-store or online, from anywhere, at any time, is what makes us who we are. And we're pretty proud of that. `,
    image: Decathlon,
    url: "https://www.decathlon.in/",
  },
  {
    name: "Country Inn & Suites by Radisson Manipal",
    subtitle: "Hospitality Partner",
    description: `Pull off of NH 169A and settle into your spacious room or suite at the Country Inn & Suites by Radisson, Manipal in Udupi. Our hotel's ideal location puts you within walking distance of Manipal University and several of its campuses. Families appreciate being near MIT's beautiful Venugopal Temple and enchanting attractions like End Point gardens and Malpe Beach. Our hotel also offers easy access to NH 66, which links to Goa and Kerala from Manipal - Udupi.`,
    image: Radisson,
    url: "https://www.radissonhotels.com/en-us/hotels/country-inn-manipal",
  },
  {
    name: "Yamuna Developers",
    description: `Yamuna Homes and Design is evolved from micro entity to macro since last 2 decade by providing specialised service in digging tube well and earth moving throughouat Karnataka. Our sister concern Yamuna Drilling Enterprises and Yamuna Earth Movers are the two main pillars created break through specially in digging the earth and moving the earth, former is for water latter is for levelling.`,
    image: yamuna,
    url: "http://www.yamunabuilders.com/",
  },
  {
    name: "IDP",
    description: `IDP is a global leader in international educational services. We've been in the industry for close to 50 years and know the best practices to help you realise your dream of studying abroad. Our range of services, experienced staff, and foothold in the industry ensures that your international future is bright and rewarding. `,
    image: idp,
    url: "https://www.idp.com/global",
  },
  {
    name: "Dew Drops",
    description: `Dew Drops offer the thrill of your lives into a biodiversity hotspot. Where you can have amphibians, fish birds, mammals, flowering plants, and reptiles as your new companions. Dew Drop offers adventure seekers the experience of a lifetime in a picture-perfect landscape which is set against the powerful Sahyadris. Dandeli is famous for its undulating hillocks, free-flowing Kali river, Acacia forests, and indigenous plantations that spread across more than 2,000 square kilometers. The place is located at an elevation of about 470 meters above sea level. `,
    image: dew,
    url: "https://dewdropsdandeli.com/",
  },
  {
    name: "Harsha India",
    description: `In 1987 the company marked its first step in retailing with opening of its showroom entitled 'Harsha' or 'Happiness' at Udupi. It is now a reputed consumer durable retailer adhering to strict ethical standards. trained to act fair and even, in selling goods and services to the consumers. `,
    image: harsha,
    url: "https://www.harshaindia.com/",
  },

];

const Sponsor = () => {
  return (
    <>
      <Navbar tab="sponsors" />
      <div className="bg-black sm:p-4 lg:p-8">
        <div className="text-center gap-5 pt-2">
          <h1
            className="font-title  text-5xl md:text-6xl tracking-widest pb-4
           text-[#EDEDED]"
          >
            SPONSORS
          </h1>
          <p className="text-igold  lg:mb-6 pt-1 pb-3 text-3xl font-body text-center">
            Big names backing an extraordinary fest.
          </p>
          <div className="gap-5 ">
            <Fade duration={1000} delay={100} >

              {SponsorDetails.map((sponorDetail, i) => (
                <EventsCard
                  key={i}
                  rev={i % 2}
                  ImageSrc={sponorDetail.image}
                  SponsorTitle={sponorDetail.name}
                  SponsorDesc={sponorDetail.description}
                  SponsorWebsiteLink={sponorDetail.url}
                  Subtitle={sponorDetail.subtitle}
                />
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsor;
