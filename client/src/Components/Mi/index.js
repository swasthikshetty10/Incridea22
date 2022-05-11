import React from "react";
import "../Sponsor/sponsor.css";
import { BsBoxArrowUpRight } from "react-icons/bs";
import ImgSrc from "./Mi.jpg";
import Navbar from "../Navbar";

const EventsCard = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center lg:h-[90vh]">
        <div
          className={`text-center px-3 py-4 md:p-5 h-auto   w-[80vw] m-auto flex flex-col  md:flex-row ${""} gap-3 justify-center md:justify-evenly items-center text-white py-4 lg:p-8 bg-[#1d1d1d] my-5`}
        >
          <div className="event__img__wrapper w-full  md:w-[50%] ">
            <img className="event__img  " src={ImgSrc} alt="company logo" />
          </div>
          <div className="event__content_wrapper  py-0  mx-auto my-3 sm:py-2 gap-4 px-0 md:px-8">
            <h5 className="event__heading text-3xl font-subheading">
              Mission Impossible
            </h5>
            {/* <h5 className="text-center  text-md  text-igold font-body"></h5> */}
            <p className="event__description text-justify font-body">
              They say Impossible is nothing! but is it for real? get ready to
              pump up your adrenalin and conqure the quest for the limited
              treasure! <br /> The Mission begines on{" "}
              <span className="font-bold"> 14th may 9 AM</span> sharp. Dont miss
              out, the ultimate treasure is waiting!
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MTc4MDg4b2E2Ym8wbDVyamxydXM2dHQwZ3AgbjBpZGV0ZzlhYnF0cTdram0wNDIzMHRqMzhAZw&tmsrc=n0idetg9abqtq7kjm04230tj38%40group.calendar.google.com"
            >
              <button
                type="button"
                className="text-white bg-igold  mt-1  font-medium rounded-none text-sm px-5 py-2.5 text-center max-w-fit transition ease-in-out hover:scale-110  hover:-translate-y-1"
              >
                Add to Google Calender{" "}
                <BsBoxArrowUpRight className="inline mx-2 " />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsCard;
