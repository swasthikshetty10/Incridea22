
import React from "react";
import { Routes, Route, Red, Navigate } from "react-router-dom";
import Event2 from "./Components/Event2";
import Gallery from "./Components/Gallery2";
import Home from "./Components/Home";
import Sponsor from "./Components/Sponsor/index";
import Team from "./Components/Team/index";
// import Sponsor from "./Components/Sponsor";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from './Components/Footer';
import Pronite from "./Components/Pronite";
import TechTeam from "./Components/TechTeam"

function App() {

  return (
    <ChakraProvider>
    <div className="App">
      <Routes>
        <Route exact index path="/" element={<Home />} />
        <Route exact path="/events" element={<Event2 />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/Sponsors" element={<Sponsor />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/pronites" element={<Pronite />} />  
        <Route exact path="/TechTeam" element={<TechTeam />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
	  <Footer/>
    </div>
    </ChakraProvider>
  );

}

export default App;
