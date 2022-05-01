import React, { useContext, useEffect } from "react";
import Navbar from "../Navbar"
import Details from "./Details"
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  
  const user = useContext(AuthContext)
  const navigate = useNavigate()

  
  useEffect(() => {
    if (user == null) {
        navigate("/login");
    }}, [user]);

  return (
    <div className="overflow-x-hidden" >
      <Navbar tab="profile" />
      <div className="text-lg mb-0 lg:w-screen w-[100vw] bg-[#000]  flex flex-col items-center justify-center">
      <Details user={user}/>
      </div>
    </div>
  );
}

export default Profile;
