import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import EventsCard from "./EventsCard";
import TabsSimple from "./TabsSimple";
import FilterBar from "./FilterBar";
import { eventData } from "./eventData";

function Event2() {
  const [branch, setBranch] = useState("ALL");
  const [day, setDay] = useState("0");
  const [query, setQuery] = useState("");
  const [elements, setElements] = useState(eventData);

  useEffect(() => {
    //filter code
    setElements(
      eventData.filter(
        (ele) =>
          (String(ele.day) === day || day === "0") &&
          (ele.branch === branch || branch === "ALL") &&
          ele.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, day, branch]);

  // const Cell = ({ toggle, name, height, description, css, maximized }) => <></>;

  return (
    <>
      <Navbar tab="events" />
      <div className="bg-black  sm:p-10 h-full">
        <div className="flex justify-center flex-col items-center gap-8 lg:gap-5 pb-5">
          <h1 className="text-5xl md:text-6xl tracking-widest font-title pt-3 sm:pt-0 text-[#EDEDED]">
            EVENTS
          </h1>
          <p className="text-igold  lg:mb-6 pt-1 pb-3 text-3xl font-body text-center">
            55 events, 55 places to be.
          </p>
          <FilterBar
            day={day}
            setDay={setDay}
            query={query}
            setQuery={setQuery}
          />
          {/* <FilterBar {...{ day, setDay, query, setQuery }} /> */}
          <TabsSimple {...{ branch, setBranch }} />

          {elements.length > 0 ? (
            <div className="max-w-screen-xl flex flex-wrap justify-center gap-x-10 gap-y-14 ">
              {elements.map((value, index) => {
                return (
                  <EventsCard
                    key={index}
                    name={value.name}
                    src={value.image}
                    desc={value.fullDesc}
                    time={value.Time}
                    venue={value.venue}
                    day={value.day}
                    branch={value.branch}
                    sponsor={value.sponsor}
                    sponsorLink={value.sponsorLink}
                    round={value.round ? value.round : null}
                    data={value}
                  />
                );
              })}
            </div>
          ) : (
            <>
              <h3 className="text-igold mt-6 pt-1  text-3xl font-body text-center">
                No events found!
              </h3>
              <p className="text-gray-500  lg:mb-6 pt-1 pb-3 text-lg font-body text-center">
                Try changing up the filters?
              </p>
            </>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Event2;
