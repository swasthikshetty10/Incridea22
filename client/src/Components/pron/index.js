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
}


function Pron() {
  return (
    <>
      <Navbar tab='pron' />
      <div style={{ textAlign: 'center' }}>

        <Parallax className='h-[100vh] mt-2 '  bgImage={require('./rd.jpg')} strength={-200} >
          <div style={{ height: 500}}>
            <div style={inlineStyleRD} className='text-white font-body font-extrabold text-7xl'>Raghu Dixit <br /><p className='py-2 text-2xl md:text-3xl font-normal ' >sub oijsd here</p> </div>

          </div>
        </Parallax>



        <Parallax className='h-[100vh] object-cover  '  bgImage={require('./tb.jpg')} strength={-200} >
          <div style={{ height: 500 }}>
            <div style={inlineStyleTB} className='text-white font-body font-extrabold text-6xl  md:text-7xl'>Thaikkudam Bridge  <br /><p className='py-2 text-2xl md:text-3xl font-normal ' >sub oijsd here</p> </div>
            
          </div>
        </Parallax>

      </div>
    </>
  );
}

export default Pron;