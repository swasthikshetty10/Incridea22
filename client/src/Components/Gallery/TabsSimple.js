import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';




export default function TabsSimple({ branch, setBranch }) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, val) => {
    setValue(val)
    setBranch(event.target.innerText)
  };

  return (
    <>
      


      <div className="text-sm font-medium text-center text-gray-500  dark:border-gray-700">
        <ul className="flex flex-wrap justify-center -mb-px">
          {
            // ["CORE","BT","CV", "CSE","EEE","ECE","ME","ISE" ].map((ele , i) =>
            ["2020","2019","2018" ].map((ele , i) =>
            
            
            <li className="mr-2" key={i}>
            <a href="#" onClick={(e)=>{setBranch(ele)} } className={"inline-block p-4 rounded-t-lg border-b-2 border-gray-600 border-transparent hover:border-[#DA0037]  hover:text-[#EDEDED] " }>{ele}</a>
          </li>) 
          }
         
        
        </ul>
      </div>



    </>
  );
}




{/* {branches.map((branch_name, index) =>
          <Tab 
          key={index}
          onClick={(e) => setBranch(branch_name)}
          
          label={branch_name} />
          )} */}

