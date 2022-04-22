import React, {useState} from 'react'
import NavbarInput from "@material-tailwind/react/NavbarInput";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
function Search() {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <>
    <div className="container flex ">
    <NavbarCollapse open={openNavbar}>
    <NavbarInput  type="text" placeholder="Search here" />
    </NavbarCollapse>
    </div>
    </>
  )
}

export default Search