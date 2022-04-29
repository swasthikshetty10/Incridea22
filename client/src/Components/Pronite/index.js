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
  top: '120%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
  fontWeight: 'bolder',

}


function Pron() {
  return (
    <>
      <Navbar tab='pronite' />
      <div style={{ textAlign: 'center' }}>
        <div className='py-[40vh]' >
          <div >
            <div className='text-white font-nav  text-7xl md:text-9xl'>pronites </div>
            <p className='py-2 text-2xl text-[#9d7643] md:text-3xl font-body ' >These are the nights you will remember.</p>
          </div>
        </div>

        <Parallax className='h-[100vh] mt-2' bgImage={require('./rd.jpg')} bgImageStyle={{ objectFit: 'cover' }} strength={-200} >
          <div style={{ height: 500 }}>
            <div style={inlineStyleRD} className='text-white  text-7xl'>RAGHU DIXIT <br /><p className='py-2 text-2xl md:text-3xl font-body ' >sub oijsd here</p> </div>

          </div>
        </Parallax>




        <Parallax className='h-[100vh]' bgImage={require('./tb.jpg')} bgImageStyle={{ objectFit: 'cover' }} strength={-200} >
          <div style={{ height: 500 }}>
            <div style={inlineStyleTB} className='text-white font-body font-extrabold text-6xl  md:text-7xl'>THAIKKUDAM BRIDGE <br /><p className='py-2 text-2xl md:text-3xl font-normal ' >sub oijsd here</p> </div>

          </div>
        </Parallax>

      </div>
    </>
  );
}

export default Pron;