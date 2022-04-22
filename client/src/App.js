import React from "react";
import { Routes, Route } from "react-router-dom";
import Event2 from "./Components/Event2";
import Gallery from "./Components/Gallary";
import Home from "./Components/Home";
import Sponser from "./Components/Sponser";
import Profile from "./Components/Profile";
import Team from "./Components/Team";

import "./index.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/events" element={<Event2 />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/Sponsers" element={<Sponser />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
