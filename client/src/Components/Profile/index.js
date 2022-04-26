import React, { useState } from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import { getUserInfo } from "../../firebaseConfig";
import { useEffect } from "react";
import { key } from "../../firebaseConfig";
import Zero from "./Zero";

// const firebaseConfig = {
//   apiKey: "AIzaSyChSXTSYZm0-EqrOhVbnP9FNopgEifCqu4",
//   authDomain: "incridemo.firebaseapp.com",
//   projectId: "incridemo",
//   storageBucket: "incridemo.appspot.com",
//   messagingSenderId: "599759960850",
//   appId: "1:599759960850:web:0c378639e025467c15d1cb",
// };

function Profile() {
  console.log("profile");
  const [participant, setParticipant] = useState({});
  console.log(participant);

  useEffect(() => {
    const apiKey = JSON.parse(
      localStorage.getItem(`firebase:authUser:${key}:[DEFAULT]`)
    );
    getUserInfo(apiKey.uid)
      .then((participant) => {
        console.log(participant);
        setParticipant(participant);
        // console.log(participant); //Available to you
      })
      .catch((e) => {
        console.log(e);
      });
  }, [participant.uid]);

  return (
    <div>
      <div className="text-lg border-x-8 lg:w-screen overflow-auto h-screen w-screen border-x-sky-400 bg-[#171717] m-auto flex flex-col items-center justify-center">
        <Zero />
        <div className="md:h-fit overflow-auto h-fit w-full border md:w-fit border-gray-400 mt-4 backdrop-blur-sm bg-white/1 py-8 lg:py-10 px-16 rounded-lg shadow-2xl">
          <First participant={participant} />
          <Second />
          <Third />
          <Fourth />
        </div>
      </div>
    </div>
  );
}

export default Profile;
