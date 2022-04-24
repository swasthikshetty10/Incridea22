import Member from "./Member";
import { persons } from "./data";
import src from "../../Images/team/p1.png";
import Navbar from "../Navbar";

const Team = () => {
  return (
    <>
      {/* // <div className="w-4/5 m-auto mt-16"> */}
      <Navbar tab="team" />
      <h1 className="text-white pt-6 text-center font-semibold text-4xl bg-[#171717]">
        MEET THE PEOPLE BEHIND THE SCENES
      </h1>
      <div className="flex flex-wrap justify-center bg-[#171717] py-6">
        {persons.map((person, id) => {
          return (
            <Member id={id} name={person.name} role={person.role} src={src} />
          );
        })}
      </div>
      {/* </div> */}
    </>
  );
};

export default Team;
