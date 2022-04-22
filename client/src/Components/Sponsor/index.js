import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar';
import EventsCard from './EventsCard'

import { data } from './data'
import src from '../../Images/Sponsor/codingninja.png'




function Sponsor() {
    const [branch, setBranch] = useState("CORE");
    const [day, setDay] = useState("0");
    const [query, setQuery] = useState("");
    const [elements, setElements] = useState(data)

    useEffect(() => {
        //filter code

        setElements(data.filter(ele => (String(ele.day) === day || day === "0") && ((ele.branch === branch || branch == "CORE") && (ele.name.toLowerCase().includes(query.toLowerCase())))))

    }, [query, day, branch])





    return (

        <div className='bg-gradient-to-r from-rose-100 to-teal-100 '>
            <Navbar tab="sponsor" />
            <div className='bg-gradient-to-r from-rose-100 to-teal-100 p-5 sm:p-10'>
                <div className='flex justify-center flex-col items-center gap-8 lg:gap-14 pt-10 lg:pt-20'>
                    <h1 className='text-6xl md:text-6xl tracking-widest  font-bold text-gray-700'>Our Sponsors</h1>

                    <EventsCard src={src} />
                    <EventsCard src={src} />
                    <EventsCard src={src} />
                    <EventsCard src={src} />
                    <EventsCard src={src} />



                </div>


            </div >
        </div >


    )
}

export default Sponsor