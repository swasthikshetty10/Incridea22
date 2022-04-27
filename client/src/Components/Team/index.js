import Member from "./Member";
import { persons } from "./data";
import src from "../../Images/team/p1.png";
import Navbar from "../Navbar";

const Team = () => {
  return (
    <>
      {/* // <div className="w-4/5 m-auto mt-16"> */}
      <Navbar tab="team" />
      <div className="bg-[#171717]">
        <h1 className="text-white p-12 tracking-widest text-center font-semibold text-4xl bg-[#171717]">
          MEET THE PEOPLE BEHIND THE SCENES
        </h1>
        <div className="flex max-w-screen-xl  lg:gap-8 m-auto flex-wrap justify-center h-full bg-[#171717] pb-16">
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
