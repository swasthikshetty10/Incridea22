import React from "react";
import Navbar from "../Navbar";
import { loginDummyUser } from "../../firebaseConfig";

function Home() {
  return (
    <>
      <Navbar tab="home" />
      {/* <Footer/> */}
      <div className="bg-[#171717]"></div>
      <div className="bg-black">
      </div>
    </>
  );
}

export default Home;
