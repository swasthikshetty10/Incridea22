import React from "react";
import Navbar from "../Navbar";
import { loginDummyUser } from "../../firebaseConfig";

function Home() {
  const func = (email, pass) => {
    loginDummyUser(email, pass);
  };
  return (
    <>
      <Navbar tab="home" />
      {/* <Footer/> */}
      <div className="bg-[#171717]"></div>
      <div className="bg-black">
        <button
          className="text-white"
          onClick={() => func("dummyprayag@gmail.com", "dummyprg")}
        >
          Prg dummy
        </button>
        <button
          className="text-white ml-4"
          onClick={() => func("dummythanmay@gmail.com", "dummytan")}
        >
          tanboy
        </button>
      </div>
    </>
  );
}

export default Home;
