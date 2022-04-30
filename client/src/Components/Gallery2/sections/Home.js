import React, { Suspense } from "react";
import styled from "styled-components";

// import Navbar from "../../Navbar";

// import CoverVideo from '../components/CoverVideo';
// import NavBar from '../components/NavBar';
// import Logo from './../components/Logo';

const CoverVideo = React.lazy(() => import("../components/CoverVideo"));
const Navbar = React.lazy(() => import("../../Navbar"));
// const Logo = React.lazy(() => import("../components/Logo"));

const Section = styled.section`

  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const Home = ({topref}) => {
  return (
    <Section id="home" ref={topref}>
      <Suspense fallback={<></>}>
        {/* <Logo /> */}
        <Navbar  tab="gallery" />
        <CoverVideo />
      </Suspense>
    </Section>
  );
};

export default Home;
