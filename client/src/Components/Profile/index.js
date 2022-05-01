import React from "react";
import Navbar from "../Navbar"
import Details from "./Details"

function Profile() {
  

  return (
    <div className="overflow-x-hidden" >
      <Navbar tab="profile" />
      <div className="text-lg lg:w-screen  h-[100vh] w-[100vw] bg-[#000] m-auto flex flex-col items-center justify-center">
      <Details/>
      </div>
    </div>
  );
}

export default Profile;
