
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Event2 from "./Components/Event2";
import Gallery from "./Components/Gallery2";
import Home from "./Components/Home";
import Sponsor from "./Components/Sponsor/index";
import Team from "./Components/Team/index";
// import Sponsor from "./Components/Sponsor";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Footer from './Components/Footer';
import Pronite from "./Components/Pronite";
import TechTeam from "./Components/TechTeam"
// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";
import Loader from "./Components/Gallery2/components/Loader";
import Privacy from "./Components/Privacy";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  return <>{props.children}</>
};
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (loading ? <Loader animate={true} /> : (
      <div className="App">
        <ScrollToTop>

          <Routes>
            <Route exact index path="/" element={<Home />} />
            <Route exact path="/events" element={<Event2 />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/Sponsors" element={<Sponsor />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/pronite" element={<Pronite />} />
            <Route exact path="/TechTeam" element={<TechTeam />} />
            <Route exact path="/privacy" element={<Privacy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </div>
  ));

}

export default App;
