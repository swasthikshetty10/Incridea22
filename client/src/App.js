import React from 'react';
import { Routes, Route } from "react-router-dom";
import Event2 from './Components/Event2';
import Gallery from './Components/Gallary';
import Home from './Components/Home';
import Sponsor from './Components/Sponsor';

import './index.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/events" element={<Event2 />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/Sponsors" element={<Sponsor />} />
      </Routes>
    
    
    
      
    </div>
  );
}

export default App;
