import React from 'react'
import { FaPhoneAlt } from "react-icons/fa"
import { BiCurrentLocation } from "react-icons/bi"
import { HiOutlineMail } from "react-icons/hi"

function Contact() {

    return (

        <>
            <div className="flex h-fit flex-col justify-between w-[90vw] md:w-[85w] lg:w-[70vw] mx-auto mb-12 gap-3   ">
                <div className="leading-[2.5rem]  text-5xl text-center md:text-6xl font-title  text-white sm:ml-4 p-4 sm:p-12 tracking-widest"  >Contact Us</div>
                <div className='flex flex-col md:flex-row justify-between' >
                <div className=' font-body text-xl text-white pb-1.5 text-center md:text-left leading-8' > N.M.A.M. Institute of Technology <br /> Nitte, Karkala Taluk, Udupi - 574110 <br />
                    <a href="https://goo.gl/maps/iEbB91zVRoDBbSZi6" rel='noreferrer' target="_blank">

                        <button
                         type="button"
                         className="text-igold hover:text-white border-2 border-igold hover:bg-igold  mt-2  font-medium rounded-none text-md px-3 py-2 text-center max-w-fit transition ease-in-out ">
                         Find us on Maps  <BiCurrentLocation className='inline' />
                        </button>
                    </a>
                </div>
                 <div className='font-body text-xl mt-5 md:mt-0 text-white pb-1.5 text-center md:text-right'>

                    <div className=' font-body text-xl  text-white pb-1.5 ' > <p className=' inline'> <FaPhoneAlt className=' text-igold inline mr-1' /> Phone :</p><a className='text-igold  hover:text-white transition-colors ' href="tel:9620004763"> 9620004763</a></div>

                    <div className=' font-body text-xl  text-white pb-1.5 ' > <HiOutlineMail className=' text-igold inline mr-1 ' /> <p className=' inline'>  Email Us :</p>  <a className='text-igold hover:text-white transition-colors ' href="mailto:student.coordinator@nmamit.in"> student.coordinator@nmamit.in </a></div>

                    <div className=' font-body text-xl  text-white pb-1.5 ' > <p className=' inline'> <FaPhoneAlt className=' text-igold inline mr-1' /> Technical Query :</p><a className='text-igold  hover:text-white transition-colors ' href="tel:8861885124"> 8861885124</a></div>
                </div>

                </div>


            </div>
        </>
    )
}

export default Contact