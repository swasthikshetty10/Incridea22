import React from 'react';
import { Parallax } from 'react-parallax';
import Navbar from '../Navbar';

const inlineStyle = {
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
      <Navbar tab='pron' />
      <div style={{ textAlign: 'center' }}>

        <Parallax className='h-[100vh] mt-2 ' bgImage={require('./rd.jpg')} strength={-200} >
          <div style={{ height: 500 }}>
            <div style={inlineStyle} className='text-white text-7xl'>Raghu Dixit</div>
          </div>
        </Parallax>

        <div className='h-[30vh] bg-white border border-white'>
          Hola
        </div>

        <Parallax className='h-[100vh]' bgImage={require('./tb.jpg')} strength={-200} >
          <div style={{ height: 500 }}>
            <div style={inlineStyle} className='text-white text-7xl'>Thaikkudam Bridge</div>
          </div>
        </Parallax>

      </div>
    </>
  );
}

export default Pron;