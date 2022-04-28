import React from "react";
import "./sponsor.css";
import {BsBoxArrowUpRight} from "react-icons/bs"

const EventsCard = ({
  ImageSrc,
  SponsorTitle,
  SponsorDesc,
  SponsorWebsiteLink,
}) => {
  return (
    <>
      {/* {console.log(ImageSrc, SponsorTitle, SponsorDesc, SponsorWebsiteLink)} */}
      <div className="event__card py-4 lg:p-8 bg-[#1d1d1d] my-5">
        <div className="event__img__wrapper w-[50%] ">
          <img className="event__img" src={ImageSrc} alt="" />
        </div>
        <div className="event__content_wrapper py-0 px-3 mx-auto mt-4 sm:py-2 gap-4 ml-8">
          <h5 className="event__heading text-3xl font-subheading">
            {SponsorTitle}
          </h5>
          <p className="event__description text-justify font-body">
            {SponsorDesc}
          </p>
          <a href={SponsorWebsiteLink}> 
            <button
              type="button"
              className="text-white bg-[#9d7643]  mt-1  font-medium rounded-none text-sm px-5 py-2.5 text-center max-w-fit transition ease-in-out hover:scale-110  hover:-translate-y-1"
            >
              Go to Website  <BsBoxArrowUpRight className="inline mx-2 " />
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default EventsCard;
