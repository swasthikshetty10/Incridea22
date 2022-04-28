import Member from "./Member";
import { persons } from "./data";
import src from "../../Images/team/p1.png";
import Navbar from "../Navbar";

const Team = () => {
  return (
    <>
      {/* // <div className="w-4/5 m-auto mt-16"> */}
      <Navbar tab="team" />
      <div className="bg-[#000]">
        <h1 className="leading-[2.5rem] font-title text-white sm:ml-4 p-8 sm:p-12 tracking-widest text-4xl bg-[#000]">
          Meet the people
          <br /> behind the scenes
        </h1>
        <div className="flex font-bo max-w-screen-xl  lg:gap-8 m-auto flex-wrap justify-center h-full bg-[#000] pb-16">
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
