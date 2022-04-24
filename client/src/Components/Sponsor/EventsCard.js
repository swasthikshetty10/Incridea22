import React from 'react'


function EventsCard({ src, SponsorTitle, SponsorDesc, SponsorWebsiteLink }) {


    return (
        <>

            <div className="flex flex-col p-0 sm:flex-col border-0 overflow-hidden  items-center bg-[#171717 ]  md:flex-row md:max-w-xl   min-w-[90%] h-[50vh]  ">


                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-1/2 md:rounded-none md:rounded-l-lg" src={src} alt="" />

                <div className="flex flex-col justify-center p-4 overflow-visible leading-normal">
                    <h5 className="mb-2 text-5xl font-bold tracking-tight text-[#EDEDED] text-left py-5">{SponsorTitle}</h5>
                    <p className="mb-3 font-normal text-gray-300 ">{SponsorDesc}</p>
                    <a href={SponsorWebsiteLink}>
                    <button type="button" class="text-white bg-[#DA0037] hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-none text-sm px-5 py-2.5 text-center mr-2 my-2 max-w-fit   ">Go to Website</button>
                    </a>
                </div>
            </div>


        </>
    )
}

export default EventsCard;