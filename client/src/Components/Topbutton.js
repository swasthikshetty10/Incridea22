import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function Topbutton({ topref, showBtn }) {
  const navigate = useNavigate()
  const executeScroll = () => {
    navigate('/')
  }
  return (
    <>
      <button
        title='Back home'
        style={{ display: showBtn ? 'initial' : 'none' }}
        onClick={executeScroll}
        className='text-2xl p-2.5 bg-black text-white fixed bottom-2 right-5 inline-flex items-center justify-center  mb-3 mr-3  overflow-hidden z-50'
      >
        <span>
          <AiFillHome />
        </span>
      </button>
    </>
  )
}

export default Topbutton
