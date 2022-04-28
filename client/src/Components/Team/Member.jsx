import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Member = ({ name, role, src }) => {
  return (
    <>
      <div className=" max-w-sm scale-90 lg:scale-100 h-full text-center w-[50%] lg:w-[22%] mt-2">
        <div className="transition-transform hover:scale-105 duration-300">
          <div className="bg-[#2f2f2f] h-full pt-6 ">
            <img className="h-40 m-auto " src={src} alt="" />
          </div>
          <div className="text-center h-fit bg-[#1d1d1d]  p-2">
            <h1 className="pt-2  font-semibold text-xl text-white">{name}</h1>
            <h3 className="pt-2 pb-4 text-sm text-slate-400 font-semibold tracking-wider">
              {role}
            </h3>
            <div className="flex justify-center gap-3">
              <FaInstagram className="text-white cursor cursor-pointer" />
              <HiOutlineMail className="text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
