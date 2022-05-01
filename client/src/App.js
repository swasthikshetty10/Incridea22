
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Event2 from "./Components/Event2";
import Gallery from "./Components/Gallery2";
import Home from "./Components/Home";
import Sponsor from "./Components/Sponsor/index";
import Team from "./Components/Team/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
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
import 'bootstrap/dist/css/bootstrap.min.css';
import UserInput from './Components/Auth/UserInput';
import { AuthProvider } from './Context/AuthContext'
import { auth } from "./firebaseConfig";
import Profile from "./Components/Profile"
import Details from "./Components/Profile/Details";
const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>{props.children}</>
};
function App() {
  console.log(auth.currentUser)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (loading ? <Loader animate={true} /> : (
    <AuthProvider>
      <ChakraProvider>
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
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route exact path='/profile' element={<Profile />} />



              {/* temporary route */}
              <Route exact path="/details" element={<Details />} />


            </Routes>
            <Footer />
          </ScrollToTop>
        </div>
      </ChakraProvider>
    </AuthProvider>
  ));

}

export default App;
