import { FaInstagram } from "react-icons/fa";

const Member = ({ name, role, src }) => {
  return (
    <>
      <div className=" max-w-sm scale-90 lg:scale-100 h-full shadow-white shadow-2xl  text-center w-[50%] lg:w-[22%] mt-2">
        <div className="transition-transform hover:scale-105 duration-300">
          <div className="bg-[#cbcbcb] h-full pt-6 ">
            <img className="h-40 m-auto " src={src} alt="" />
          </div>
          <div className="text-center h-fit bg-white p-2">
            <h1 className="pt-2  font-semibold text-xl text-black">{name}</h1>
            <h3 className="pt-2 pb-4 text-sm text-slate-400 font-semibold tracking-wider">
              {role}
            </h3>
            <FaInstagram className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
