import React from 'react'

function FilterBar({ day, setDay, query, setQuery }) {
    return (
        <div className='max-w-screen-lg w-full flex flex-wrap justify-center items-center m-auto gap-3  lg:s-mb-10 '>
            <div className="flex justify-around">
                <div className=" w-52 xl:w-72">
                    <div className="rounded-none overflow-hidden input-group relative flex items-stretch w-full ">
                        <input onChange={(e) => setQuery(e.target.value)} value={query} type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-2 text-base font-normal text-[#EDEDED] bg-[#444444] bg-clip-padding border-3 border-solid border-gray-900  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none" placeholder="Search Events" />
                    </div>
                </div>
            </div>
            <div>
                <select onChange={(e) => setDay(e.target.value)} id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-center py-2 px-1 sm:px-3 sm:py-2 focus:outline-none focus:bg-[#9d7643] text-[#EDEDED] font-semibold rounded-none bg-[#9d7643]" >
                    <option value={0}>All  </option>
                    <option value={1}>Day 1  </option>
                    <option value={2}>Day 2  </option>
                    <option value={3}>Day 3  </option>
                </select>
            </div>
        </div>
    )
}

export default FilterBar