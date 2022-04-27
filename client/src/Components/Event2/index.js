import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import EventsCard from "./EventsCard";
import Search from "./Search";
import TabsSimple from "./TabsSimple";
import { data } from "./data";
import src from "../../Images/navrasa.png";
import FilterBar from "./FilterBar";
import { queryByRole } from "@testing-library/react";
import Footer from "../Footer";
import { eventData } from './eventData'
function Event2() {
  console.log(eventData)
  const [branch, setBranch] = useState("CORE");
  const [day, setDay] = useState("0");
  const [query, setQuery] = useState("");
  const [elements, setElements] = useState(data);

  useEffect(() => {
    //filter code

    setElements(
      eventData.filter(
        (ele) =>
          (String(ele.day) === day || day === "0") &&
          (ele.branch === branch || branch === "CORE") &&
          ele.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, day, branch]);

  const Cell = ({ toggle, name, height, description, css, maximized }) => <></>;

  return (
    <>
      <Navbar tab="events" />
      <div className="bg-black p-5 sm:p-10 h-full">
        <FilterBar
          day={day}
          setDay={setDay}
          query={query}
          setQuery={setQuery}
        />
        <div className="flex justify-center flex-col items-center gap-8 lg:gap-14 pt-10 lg:pt-20">
          <h1 className="text-6xl md:text-6xl tracking-widest  font-bold text-[#EDEDED]">
            EVENTS
          </h1>
          {/* <FilterBar {...{ day, setDay, query, setQuery }} /> */}
          <TabsSimple {...{ branch, setBranch }} />

          <div className="max-w-screen-xl flex flex-wrap justify-center gap-x-10 gap-y-10 ">
            {elements.map((value, index) => {
              return (
                <EventsCard
                  key={index}
                  name={value.name}
                  src={value.image}
                  desc={value.smallDesc}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Event2;
