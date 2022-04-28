import Member from "./Member";
import { persons } from "./data";
import src from "../../Images/team/p1.png";
import Navbar from "../Navbar";

const Team = () => {
  return (
    <>
      {/* // <div className="w-4/5 m-auto mt-16"> */}
      <Navbar tab="team" />
      <div className="bg-[#000] ">
        <h1 className="leading-[2.5rem]  text-5xl text-center md:text-6xl font-title pb-0 text-white sm:ml-4 p-4 sm:p-12 tracking-widest  bg-[#000]">
          TEAM
        </h1>
        <p className="text-white lg:mb-6 p-3 text-xl font-body text-center">
          Meet the people behind the scenes
        </p>
        <div className="flex  font-bo max-w-screen-xl  lg:gap-8 m-auto flex-wrap justify-center h-full bg-[#000] pb-16">
          {persons.map((person, id) => {
            return (
              <Member id={id} name={person.name} role={person.role} src={src} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Team;
