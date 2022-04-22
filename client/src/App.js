import React from 'react';
import { Routes, Route } from "react-router-dom";
import Event2 from './Components/Event2';
import Home from './Components/Home';

import './index.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="events" element={<Event2 />} />
      </Routes>
    
    
    
      
    </div>
  );
}

export default App;
