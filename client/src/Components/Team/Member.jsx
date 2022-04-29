import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneOutbound } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

const Member = ({ name, role, src, mob, email }) => {



  return (
    <>
      <Fade as="div" className=" max-w-sm scale-90 lg:scale-100 h-full text-center w-[80%] lg:w-[22%] mt-2">
        <div className="transition-transform hover:scale-105 duration-300">
          <div className="bg-[#2f2f2f] h-full pt-6 ">
            <img className="h-40 m-auto " src={src} alt="" />
          </div>
          <div className="text-center h-40 bg-[#1d1d1d]  p-2">
            <h1 className="pt-2  font-semibold text-xl text-white tracking-wide">
              {name}
            </h1>
            <h3 className="pt-2 pb-4 text-sm text-slate-400 font-semibold tracking-wider">
              {role}
            </h3>
            <div className="flex justify-center gap-3 mb-2">
              {/* <FaInstagram className="text-white cursor cursor-pointer   transition ease-in-out hover:-translate-x-1 hover:text-lg hover:-translate-y-1 " /> */}
              <a href={`mailto:${email}` }>
              <HiOutlineMail className=" cursor-pointer text-[#9d7643] hover:text-white  transition-all  ease-out text-2xl hover:text-3xl   " />
              </a>
              <a href={`tel:${mob}`}>
              <BsTelephoneOutbound className="   cursor-pointer text-[#9d7643] hover:text-white transition-all  ease-out text-2xl hover:text-3xl  " />
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Member;
