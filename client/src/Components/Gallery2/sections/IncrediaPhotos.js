import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { useRef } from "react";

import { motion } from "framer-motion";

import {images} from '../data/imagedata'

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
  z-index:1;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Kaushan Script', cursive;
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: transparent};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    background:transparent;
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  position: absolute;
  left: 0%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  /* width: 65%;  */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
  width: ${(props) => props.width};
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    min-width: 100%;
    height: auto;
    cursor: pointer;
  }
  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 90vw;
  }
`;

const Photos = ({ img,width, title = "" }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
      width={width}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const IncrediaPhotos = ({id, elementnumber=1, title}) => {
  
  const ref = useRef(null);
  const horizontalRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;

    // console.log("Incredia: " +element);

    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 =new gsap.timeline();

    //use this to calculate the total actual height of the previous element
    // console.log(scrollingElement.offsetWidth);

    console.log("t1: "+t1);

    setTimeout(() => {
      // console.log("Incredia: " +element);
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: elementnumber*pinWrapWidth,
          scroller: ".Gallery2", // locomotive element
          scrub: true,
          pin: true,
          // markers:true,
        },
        // we have to increase scrolling height of this section same as the scrolling element width
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none,",
      });

      // Horizontal Scrolling
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: elementnumber*pinWrapWidth,
          scroller: ".Gallery2", // locomotive element
          scrub: true,

          // markers:true,
        },
        // we have to increase scrolling height of this section same as the scrolling element width
        x: -pinWrapWidth,
        ease: "none,",
      });
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      // Let's clear instances
      t1.kill();
      // ScrollTrigger.clear();
      // ScrollTrigger.getAll().forEach(t => t.refresh());
  
    };
  }, []);

  return (
    <Section ref={ref} id={id}>
      <Title data-scroll data-scroll-speed="-1">
        {title}
      </Title>
      <Left>
        <p>
         
          <br />
          <br />
    
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Photos img={images[title][0]['img']} width={images[title][0]['width']} />
        <Photos img={images[title][1]['img']} width={images[title][1]['width']} />
        <Photos img={images[title][2]['img']} width={images[title][2]['width']} />
        <Photos img={images[title][3]['img']} width={images[title][3]['width']} />
        <Photos img={images[title][4]['img']} width={images[title][4]['width']} />
        <Photos img={images[title][5]['img']} width={images[title][5]['width']} />
        <Photos img={images[title][6]['img']} width={images[title][6]['width']} />
        <Photos img={images[title][7]['img']} width={images[title][7]['width']} />
        <Photos img={images[title][8]['img']} width={images[title][8]['width']} />
        <Photos img={images[title][9]['img']} width={images[title][9]['width']} />
        <Photos img={images[title][10]['img']} width={images[title][10]['width']} />
        <Photos img={images[title][11]['img']} width={images[title][11]['width']} />
        <Photos img={images[title][12]['img']} width={images[title][12]['width']} />
        <Photos img={images[title][13]['img']} width={images[title][13]['width']} />
      </Right>
    </Section>
  );
};

export default IncrediaPhotos;
