import React from 'react';
import { Parallax } from 'react-parallax';
import Navbar from '../Navbar';


const inlineStyleRD = {
  background: 'transparent',
  left: '50%',
  top: '100%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
}

const inlineStyleTB = {
  background: 'transparent',
  left: '50%',
  top: '100%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
}


function Pron() {
  return (
    <>
      <Navbar tab='pronite' />
      <div style={{ textAlign: 'center' }}>
        <div className='px-4 py-[40vh]' >
          <div >
            <div className='text-white font-nav  text-6xl md:text-9xl'>pronites </div>
            <p className='py-2 text-2xl text-[#9d7643] md:text-3xl font-body'>These are the nights that never die.</p>
          </div>
        </div>

        <Parallax className='h-[100vh] mt-2' bgImage={require('./rd.jpg')} bgImageStyle={{ objectFit: 'contain', backgroundPosition: "left" }} strength={-200} >
          <div style={{ height: 500, }} >
            <div style={inlineStyleRD} className='text-white font-extrabold  text-6xl  md:text-7xl'>
              <span style={{ textShadow: "2px 2px 15px #000000" }} >RAGHU DIXIT</span> 
              <br />
              <p style={{ textShadow: "2px 2px 15px #000000" }} className='py-2 text-2xl md:text-3xl font-body'>MAY 14, 7:30 PM</p> 
            </div>

          </div>
        </Parallax>
        <Parallax className='h-[100vh]' bgImage={require('./tb.jpg')} bgImageStyle={{ objectFit: 'contain' }} strength={-200} >
          <div style={{ height: 500 }}>
            <div style={inlineStyleTB} className='text-white font-extrabold text-6xl  md:text-7xl'>
              <span style={{ textShadow: "2px 2px 15px #000000" }}>THAIKKUDAM BRIDGE</span> 
              <br />
              <p style={{ textShadow: "2px 2px 15px #000000" }} className='py-2 text-2xl md:text-3xl font-normal'>MAY 15, 7:00 PM</p></div>

          </div>
        </Parallax>

      </div>
    </>
  );
}

export default Pron;