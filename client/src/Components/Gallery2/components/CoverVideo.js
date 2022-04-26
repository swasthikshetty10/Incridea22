import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/Walking Girl.mp4";
import { motion } from "framer-motion";
import "../assets/css/css_for_fonts.css"

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
  }
  @media (max-width: 30em) {
    object-position: center 50%;
  }
`;
const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;
const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: 'Kaushan Script', cursive;
   //font-family: 'Rubik Glitch', cursive;
    font-size: 90px;
    margin:-15px auto;
    letter-spacing:2px;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 50em) {
      font-size: 60px;
      margin:-10px auto;
    }

  }
  h2 {
    font-family: 'Ms Madi', cursive;
    font-size: 30px;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: bolder;
    -webkit-text-stroke: 0.01px white;
    text-transform: capitalize;
    letter-spacing: 3px;
    margin-top:15px;

    @media (max-width: 50em) {
      font-size: 22.5px;
      margin-top: 15px;
      
    }
  }
`;

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 4, // 2
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.18"
            data-scroll-speed="4"
          >
            T
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.16"
            data-scroll-speed="4"
          >
           h
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            e&nbsp;    
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.125"
            data-scroll-speed="4"
          >
            W
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.12"
            data-scroll-speed="4"
          >
            a
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.115"
            data-scroll-speed="4"
          >
            l
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.11"
            data-scroll-speed="4"
          >
            l&nbsp;
          </motion.h1>
          
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.105"
            data-scroll-speed="4"
          >
            O
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.10"
            data-scroll-speed="4"
          >
            f
          </motion.h1>
          </div>
          <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.095"
            data-scroll-speed="4"
          >
            I
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4"
          >
            n
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.085"
            data-scroll-speed="4"
          >
            c
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.08"
            data-scroll-speed="4"
          >
            r
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.075"
            data-scroll-speed="4"
          >
            i
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.07"
            data-scroll-speed="4"
          >
            d
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.065"
            data-scroll-speed="4"
          >
            e
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.06"
            data-scroll-speed="4"
          >
            a
          </motion.h1>
        </div>
        <motion.h2
          variants={item}
          data-scroll
          data-scroll-delay="0.055"
          data-scroll-speed="2"
        >
          Inovate. Create. Ideate
        </motion.h2>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
