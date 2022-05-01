import { FaInstagram, FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

const Member = ({ name, role, github, insta, linkedin, src, mob }) => {



  return (
    <>
      <Fade as="div" className=" max-w-sm scale-90 lg:scale-100 h-full text-center w-[80%] lg:w-[22%] mt-2">
        <div className="transition-transform hover:scale-105 duration-300">
          <div className="bg-[#2f2f2f] h-full pt-0 ">
            <img className=" aspect-video w-fit m-auto " src={src} alt="" />
          </div>
          <div className="text-center h-40 bg-[#1d1d1d]  p-2">
            <h1 className="pt-2  font-semibold text-xl text-white tracking-wide">
              {name}
            </h1>
            <h3 className="pt-2 pb-4 text-sm text-slate-400 font-semibold tracking-wider">
              {role}
            </h3>
            <div className="flex justify-center gap-3 mb-2">
              <a href={github}>

                <FaGithub className="text-igold hover:text-white cursor cursor-pointer   transition-all ease-out hover:-translate-x-1 text-2xl hover:text-3xl hover:-translate-y-1 " />
              </a>

              <a href={linkedin}>
                <FiLinkedin className="text-igold hover:text-white cursor-pointer  transition-all ease-in-out text-2xl hover:text-3xl   hover:-translate-y-1   " />
              </a>
              {insta !== '#' && <a href={insta}>
                <FaInstagram className="text-igold hover:text-white cursor-pointer  transition-all ease-in-out text-2xl hover:text-3xl   hover:-translate-y-1   " />
              </a>}
              <a href={`tel:${mob}`}>
                <BsTelephone className="  text-igold hover:text-white cursor-pointer  transition-all  ease-out hover:translate-x-1 text-2xl hover:text-3xl hover:-translate-y-1 " />
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Member;
