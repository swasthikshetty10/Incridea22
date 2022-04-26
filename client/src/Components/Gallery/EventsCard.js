import React, { useState } from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Modal from '../Event2/Modal';

function EventsCard({ name, src, desc }) {

    const [openModal, setModal] = useState(false);

    return (
        <>

            <div className="relative flex  flex-col mx-0 justify-center rounded-2xl shadow-xl hover:shadow-2xl  cursor-pointer transition ease-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 shadow-slate-300/60 hover:shadow-[#DA0037] "  >

                <div className="mx-auto flex w-60 h-fit flex-col  justify-start bg-white rounded-none shadow-xl ">
                    <img className="aspect-video rounded-none object-cover object-center " src={src} />
                   

                </div>
            </div>
            
        </>
    )
}

export default EventsCard;