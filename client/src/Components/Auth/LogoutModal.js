import React from "react"
import { Zoom } from "react-awesome-reveal"
import { IoMdClose } from "react-icons/io"

function LogoutModal({closeModal, signOut})  {
	return (
			<div onClick={closeModal} className='z-[500] h-[100vh] grow flex flex-col justify-center items-center w-screen text-white bg-black bg-opacity-70 fixed top-0 right-0 left-0'>
					<Zoom as="div" duration={400} className='flex flex-col justify-center items-center '>
					<div onClick={(e) => e.stopPropagation()} id="extralarge-modal" tabindex="-1">
							<div className="  " >
									{/* <!-- Modal content --> */}
									<div className=" relative w-full h-[full] md:h-auto backdrop-lg  shadow-lg  border-0relative bg-blend-color shadow  bg-clip-padding backdrop-blur bg-opacity-90 bg-gradient-to-r from-[#232526] to-[#414345] ">
											{/* <!-- Modal header --> */}
											<div className="flex  flex-wrap justify-between items-center p-3 md:p-4   border-b dark:border-gray-600">
															<h3 className="text-xl font-body font-bold  text-gray-100 mr-20"  >
																	Logging you out
															</h3>
													<button type="button" className="hover:text-white text-gray-200 bg-transparent gap-1 text-md p-1.5 ml-auto inline-flex items-center " data-modal-toggle="extralarge-modal" 
															onClick={closeModal} >
															<IoMdClose className="text-2xl inline" />
													</button>
											</div>
											{/* <!-- Modal body --> */}
											<div className="p-4 flex font-body">
													Sure you want to proceed?
											</div>
											{/* Modal Footer */}
											<div className="p-4 font-body justify-end flex flex-row">
												 <button onClick={signOut} className='font-bold hover:bg-igold text-[#cd9b58] hover:text-white transition-colors border-2 border-igold  p-2'>Yes, I'm Sure</button>
											</div>
									</div>
							</div>
					</div>
			</Zoom>
			</div>
	)
}

export default LogoutModal