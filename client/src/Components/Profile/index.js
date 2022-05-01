import React from "react";
import Navbar from "../Navbar"
import Details from "./Details"

function Profile() {
  

  return (
    <div className="overflow-x-hidden" >
      <Navbar tab="profile" />
      <div className="text-lg mb-0 lg:w-screen h-[110vh] md:h-[70vh] w-[100vw] bg-[#000]  flex flex-col items-center justify-center">
      <Details/>
      </div>
    </div>
  );
}

export default Profile;
