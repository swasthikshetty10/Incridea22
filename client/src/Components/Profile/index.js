import React from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";

function Profile() {
  return (
    <>
      <div className="inline h-screen w-2 bg-gradient-to-t from-cyan-900 to-transparent"></div>
      <div className="ml-4 text-lg bg-slate-800 h-screen m-auto pt-28 pl-20 pr-20">
        <First />
        <Second />
        <Third />
        {/* <Fourth /> */}
      </div>
    </>
  );
}

export default Profile;
