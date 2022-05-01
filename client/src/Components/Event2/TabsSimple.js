import * as React from "react";

export default function TabsSimple({ branch, setBranch }) {
  return (
    <>
      <div className="text-sm pb-8 font-medium text-center text-gray-500  dark:border-gray-700">
        <ul className="flex flex-wrap justify-center -mb-px">
          {
            ["ALL", "CORE", "BTE", "CIVIL", "CSE", "ECE", "EEE", "MECH", "ISE"].map((ele, i) =>


              <li className="mr-2" key={i}>
                <button onClick={() => setBranch(ele)} className={`inline-block p-4  border-b-2  border-transparent hover:border-igold  hover:text-[#EDEDED]    ${branch === ele ? " border-[#a57c47] text-[#EDEDED]" : ""}`}>{ele}</button>
                {/* <a href="#" onClick={(e)=>{setBranch(ele)} } className={"inline-block p-4 rounded-t-lg border-b-2 border-gray-600 border-transparent hover:border-igold  hover:text-[#EDEDED] " }>{ele}</a> */}
              </li>)
          }


        </ul>
      </div>
    </>
  );
}
