import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { Zoom } from 'react-awesome-reveal';
import { IoMdClose } from 'react-icons/io';
import { auth } from '../../firebaseConfig'

function Logout(props) {

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <button  {...props} onClick={() => {
                setOpenModal(true)
            }}>LOGOUT  </button>
      {openModal && <LogoutModal closeModal={() => setOpenModal(false)} />}
        </>
    )
}

function LogoutModal({closeModal})  {
    return (
             <div onClick={(e) => closeModal()} className='flex text-white text-body h-[90vh] justify-center items-center bg-black bg-opacity-50 fixed top-0 right-0 left-0 z-[999] w-full'>
            <Zoom as="div" duration={400} className='flex flex-col justify-center items-center '>
            <div onClick={(e) => e.stopPropagation()} id="extralarge-modal" tabindex="-1" className=" overflow-y-hidden  md:inset-0  flex items-center justify-center justify-items-center overflow-x-hidden  ">
                <div className="relative p-4 w-full max-w-7xl h-full md:h-auto backdrop-lg  shadow-lg  border-0  " >
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-blend-color  shadow  bg-clip-padding backdrop-blur  bg-opacity-90 bg-gradient-to-r from-[#232526] to-[#414345] ">
                        {/* <!-- Modal header --> */}
                        <div className="flex gap-10 flex-wrap justify-between items-center p-3 md:p-4   border-b dark:border-gray-600">
                                <h3 className="text-2xl font-body font-bold  text-gray-100 "  >
                                    Logging you out
                                </h3>
                            <button type="button" className="hover:text-white text-gray-200 bg-transparent gap-1 text-md p-1.5 ml-auto inline-flex items-center " data-modal-toggle="extralarge-modal" 
                                onClick={closeModal} >
                                {/* <ImCross /> */}
                                <IoMdClose className="text-2xl inline" />
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-4 flex font-body">
                            Sure you want to proceed?
                        </div>
                        {/* Modal Footer */}
                        <div className="p-4 font-body justify-end flex flex-row">
                           <button onClick={() => signOut(auth)} className='font-bold hover:bg-igold text-[#cd9b58] hover:text-white transition-colors border-2 border-igold  p-2'>Yes, I'm Sure</button>
                        </div>
                    </div>
                </div>
            </div>
        </Zoom>
        </div>
    )
}

export default Logout