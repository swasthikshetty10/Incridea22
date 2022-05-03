
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Event2 from "./Components/Event2";
import Gallery from "./Components/Gallery2";
import Home from "./Components/Home";
import Sponsor from "./Components/Sponsor/index";
import Team from "./Components/Team/index";
import './index.css';
import Footer from './Components/Footer';
import Register from "./Components/Auth/Register";
import Pronite from "./Components/Pronite";
import TechTeam from "./Components/TechTeam"
import { useEffect } from "react";
import { useLocation } from "react-router";
import Loader from "./Components/Gallery2/components/Loader";
import LoginForm from "./Components/Auth/LoginForm"
import ForgotPass from './Components/Auth/ForgotPass';
import OtpFiled from './Components/Auth/OtpFiled';
import UserInput from './Components/Auth/UserInput';
import { AuthProvider } from './Context/AuthContext'
import Profile from "./Components/Profile"
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
    <AuthProvider>
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
            <Route path='/login' element={<LoginForm />} />
            <Route path='/userinput' element={<UserInput />} />
            <Route path='/forgot' element={<ForgotPass />} />
            <Route exact path='/otp' element={<OtpFiled />} />
            <Route exact path='/register/:email' element={<Register />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/privacy' element={<Privacy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </div>
    </AuthProvider>
  ));

}

export default App;
