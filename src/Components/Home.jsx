import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import img1 from "../Assets/image-7.jpg";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      duration: 2,
      delayChildren: 1, // 2
      staggerChildren: 0.3,
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

const item2 = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      duration: 2,
      delay: 6,
    },
  },
};

const Home = () => {
  return (
    <Container>
      <TextContainer variants={container} initial="hidden" animate="show">
        <Text1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.20"
            data-scroll-speed="4"
          >
            L
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.17"
            data-scroll-speed="4"
          >
            e
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.14"
            data-scroll-speed="4"
          >
            t
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.12"
            data-scroll-speed="4"
          >
            '
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.10"
            data-scroll-speed="4"
          >
            s
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.08"
            data-scroll-speed="4"
          >
            &nbsp;g
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.07"
            data-scroll-speed="4"
          >
            e
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.05"
            data-scroll-speed="4"
          >
            t
          </motion.h1>
        </Text1>
        <Text2>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.15"
            data-scroll-speed="4"
          >
            f
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            a
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4"
          >
            m
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.07"
            data-scroll-speed="4"
          >
            i
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.05"
            data-scroll-speed="4"
          >
            l
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4"
          >
            i
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.03"
            data-scroll-speed="4"
          >
            a
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.02"
            data-scroll-speed="4"
          >
            r
          </motion.h1>
        </Text2>
      </TextContainer>
      <LitleText
        variants={item2}
        initial="hidden"
        animate="show"
        data-scroll
        data-scroll-delay="0.09"
        data-scroll-speed="2"
      >
        Here will go a small intro paragraph that talks about our company and
        team
        <Button>Deep dive</Button>
      </LitleText>

      <Image src={img1} alt="" data-scroll data-scroll-speed="-2" />
    </Container>
  );
};

export default Home;

const Container = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled(motion.div)`
  font-size: 8em;
  z-index: 5;
  text-shadow: 1px 1px 1px #dedede;

  @media screen and (max-width: 850px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 3em;
  }
`;
const Text1 = styled.div`
  position: absolute;
  left: 0;
  top: 20%;
  display: flex;
  @media screen and (max-width: 400px) {
    top: 30%;
  }
`;
const Text2 = styled.div`
  position: absolute;
  top: 32%;
  left: 30%;
  display: flex;
  @media screen and (max-width: 850px) {
    top: 27%;
  }
  @media screen and (max-width: 400px) {
    top: 37%;
  }
`;
const LitleText = styled(motion.p)`
  position: absolute;
  top: 20%;
  right: 15%;
  width: 200px;
  font-size: 0.8em;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: #606060;

  @media screen and (max-width: 850px) {
    right: 10%;
    top: 17%;
    font-size: 0.6em;
    width: 150px;
  }
  @media screen and (max-width: 400px) {
    top: 20%;
    font-size: 0.5em;
    width: 100px;
  }
`;

const Button = styled(motion.button)`
  cursor: pointer;
  border: 2px solid #202020;
  outline: none;
  background-color: transparent;
  margin-top: 1rem;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-size: 1em;
  font-weight: 600;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: #202020;
    color: #eeeeee;
  }

  @media screen and (max-width: 850px) {
    width: 60px;
    height: 60px;
  }
  @media screen and (max-width: 400px) {
    width: 40px;
    height: 40px;
    font-size: 0.5em;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 42%;
  left: 0;
  width: 85%;
  height: 58%;
  object-fit: cover;
  z-index: 3;
  border-radius: 0 10px 10px 0;

  @media screen and (max-width: 850px) {
    top: 30%;
    height: 40%;
  }
`;
