import Member from "./Member";
import { persons } from "./data";
import src from "../../Images/team/p1.png";

const Team = () => {
  return (
    // <div className="w-4/5 m-auto mt-16">
    <div className="flex flex-wrap justify-center">
      {persons.map((person, id) => {
        return (
          <Member id={id} name={person.name} role={person.role} src={src} />
        );
      })}
    </div>
    // </div>
  );
};

export default Team;
