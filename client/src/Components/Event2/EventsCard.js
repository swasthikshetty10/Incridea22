import React, { useState } from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Modal from '../Event2/Modal';

function EventsCard({ name, src, desc }) {

    const [openModal, setModal] = useState(false);

    return (
        <>

            <div className="relative flex  flex-col mx-0 justify-center rounded-2xl shadow-xl hover:shadow-2xl  cursor-pointer transition ease-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:shadow-red-600 "  onClick={() => { setModal(true) }} >

                <div className="mx-auto flex w-60 h-72 flex-col  justify-start bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                    <img className="aspect-video rounded-t-2xl object-cover object-center " src={src} />
                    <div className="p-2 flex flex-col justify-center ">

                        <h1 className="text-2xl text-center font-medium text-gray-700 pb-2">{name}</h1>
                        <p className="text-sm tracking-tight text-center font-medium text-slate-400 leading-6  "> {desc} </p>
                        <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-5 py-2.5 text-center w-fit m-auto   my-2"  onClick={() => { setModal(true) }}  >Know More <BsFillArrowRightCircleFill className='inline mx-1' /> </button>
                    </div>

                </div>
            </div>
            {  openModal && 
            
             < Modal closeModal={setModal} />
             
             }
        </>
    )
}

export default EventsCard;