import React, { useState } from 'react'


function EventsCard({ src }) {


    return (
        <>

            <div className="flex flex-col p-0 sm:flex-col border-0 overflow-hidden  items-center bg-[#171717 ]  md:flex-row md:max-w-xl   min-w-[90%] h-[50vh]  ">


                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-1/2 md:rounded-none md:rounded-l-lg" src={src} alt="" />

                <div className="flex flex-col justify-center p-4 overflow-visible leading-normal">
                    <h5 className="mb-2 text-5xl font-bold tracking-tight text-[#EDEDED] text-left py-5">Coding Ninja</h5>
                    <p className="mb-3 font-normal text-gray-300 ">Lorem ipst3eaum dolor sit amet consectetur, adipisicing elit. Deserunt, obcaecati, ea illo similique fuga sapiente magnam aut numquam voluptatum alias et quos eligendi nemo nihil cumque, reiciendis quae cum amet. Ut assumenda fugit odio corrupti vitae voluptates, dolorum animi. Aliquam qui commodi rerum accusantium sed obcaecati quidem laboriosam? Quia, minima.</p>
                    <button type="button" class="text-white bg-[#DA0037] hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-none text-sm px-5 py-2.5 text-center mr-2 my-2 max-w-fit   ">Go to Website</button>

                </div>
            </div>


        </>
    )
}

export default EventsCard;