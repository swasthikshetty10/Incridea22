import React from "react";
import Navbar from "../Navbar";
import higher from "../../Images/home/higher.png"
import avatar from "../../Images/home/avatar.png"


function Home() {
  return (
    <>
      <Navbar tab="home" />

      <div className="flex pt-5 items-center justify-center flex-col-reverse md:flex-row ">
        <div className="flex gap-3 px-5  flex-col">
          <img src={higher} className=" "  alt="" />
          <p className="text-gray-100 text-lg pb-10" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nam laboriosam, nulla amet sint similique consequuntur iste enim fuga, magni consequatur repellat consectetur architecto ipsam quasi at culpa nemo perferendis illo odit omnis magnam? Maxime magni corporis natus mollitia distinctio tempora laborum fugit officia! Quis, architecto. Voluptas deleniti excepturi sunt.</p>

        </div>

          <div className="min-w-fit">
              {/* <img className="absolute top-20 left-5 z-10 md:top-8 md:left-[50rem] md:h-[90vh] " src={circle} alt="" /> */}
            <img className="md:max-w-[50vw]" src={avatar} alt="" />
          </div>


      </div>




    </>
  );
}

export default Home;
