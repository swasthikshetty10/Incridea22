import React, { useContext, useState } from "react";
import { getUserInfo } from "../../firebaseConfig";
import { useEffect } from "react";
import QRCode from "qrcode";
import fileDownload from "js-file-download";
import axios from "axios";
import Navbar from "../Navbar"
import { BsDownload } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import Logout from "../Auth/Logout";
import Details from "./Details"


// const firebaseConfig = {
//   apiKey: "AIzaSyChSXTSYZm0-EqrOhVbnP9FNopgEifCqu4",
//   authDomain: "incridemo.firebaseapp.com",
//   projectId: "incridemo",
//   storageBucket: "incridemo.appspot.com",
//   messagingSenderId: "599759960850",
//   appId: "1:599759960850:web:0c378639e025467c15d1cb",
// };

function Profile() {
  

  return (
    <div className="" >
      <Navbar tab="profile" />
      <div className="text-lg lg:w-screen  h-screen w-screen bg-[#000] m-auto flex flex-col items-center justify-center">
      <Details/>
        
      </div>
    </div>
  );
}

export default Profile;
