import React from 'react'
import { FaPhoneAlt } from "react-icons/fa"
import { BiCurrentLocation } from "react-icons/bi"
import { HiOutlineMail } from "react-icons/hi"
import { BsBoxArrowUpRight } from "react-icons/bs"




const center = {
    lat: -3.745,
    lng: -38.523
};

function Contact() {

    return (

        <>
            <div className="flex h-fit flex-col justify-center w-[80vw] md:w-[100vw] mx-auto mb-12 gap-3   ">
                <div className="leading-[2.5rem]  text-5xl text-center md:text-6xl font-title pb-0 text-white sm:ml-4 p-4 sm:p-12 tracking-widest"  >Contact Us</div>
                <div className='flex flex-col md:flex-row gap-2 items-center justify-center' >
                    <div className="flex flex-row   ">
                        <div className=' font-body text-xl text-white pb-1.5 text-left' ><p className='hidden md:inline'> </p> <br /> N.M.A.M. Institute of Technology <br /> Nitte, Karkala Taluk,
                            Udupi - 574110 <br />
                            <button
                                type="button"
                                className="text-igold hover:text-white border-2 border-igold hover:bg-igold  mt-2  font-medium rounded-none text-md px-3 py-2 text-center max-w-fit transition ease-in-out "
                            >
                                Find us on Maps  <BiCurrentLocation className='inline' />
                            </button>
                        </div>
                        <div className='font-body text-xl mt-3 text-white pb-1.5 text-right'>

                            <div className=' font-body text-xl  text-white pb-1.5 ' > <p className=' md:inline'> <FaPhoneAlt className=' text-igold inline mr-1' /> Phone :</p><a className='text-igold  hover:text-white ' href="tel:9620004763"> 9620004763</a></div>

                            <div className=' font-body text-xl  text-white pb-1.5 ' > <HiOutlineMail className=' text-igold inline mr-1 ' /> <p className=' inline'>  Email Us :</p>  <a className='text-igold hover:text-white ' href="mailto:student.coordinator@nmamit.in"> student.coordinator@nmamit.in </a></div>

                            <div className=' font-body text-xl  text-white pb-1.5 ' > <p className=' md:inline'> <FaPhoneAlt className=' text-igold inline mr-1' /> Technical queury :</p><a className='text-igold  hover:text-white ' href="tel:8861885124"> 8861885124</a></div>
                        </div>


                    </div>

                </div>


            </div>
        </>
    )
}

export default Contact


//icons

