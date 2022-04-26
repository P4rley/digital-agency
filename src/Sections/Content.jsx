import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import img1 from "../Assets/image-1.jpg";
import img2 from "../Assets/image-3.jpg";

const Content = () => {
  return (
    <Container>
      <ContentWrapper>
        <Text
          data-scroll
          data-scroll-speed="2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          Here will go a small intro paragraph that talks more about the origin
          story. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Debitis sequi saepe voluptatibus asperiores sunt veniam.
          <br />
          <br />
          Here will go a small intro paragraph that talks more about the origin
          story. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Debitis sequi saepe voluptatibus asperiores sunt veniam, quibusdam, .
        </Text>
        <Button>Let's work together</Button>
      </ContentWrapper>

      <Image1 src={img1} alt="" data-scroll data-scroll-speed="2" />
      <Image2 src={img2} alt="" data-scroll data-scroll-speed="1" />
    </Container>
  );
};

export default Content;

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #202020;

  @media screen and (max-width: 850px) {
    height: 80vh;
  }
  @media screen and (max-width: 850px) {
    height: 50vh;
  }
`;

const ContentWrapper = styled.div`
  width: 250px;
  position: absolute;
  top: 5%;
  left: 30%;
  @media screen and (max-width: 400px) {
    left: 10%;
  }
`;
const Text = styled(motion.p)`
  font-size: 1em;
  @media screen and (max-width: 400px) {
    font-size: 0.6em;
    width: 180px;
  }
`;
const Button = styled.button`
  margin-top: 2rem;
  font-size: 1em;
  outline: none;
  border: none;
  background-color: transparent;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    bottom: -7px;
    width: 100%;
    height: 3px;
    background-color: #202020;
    border-radius: 20px;
    transition: all 0.4s ease-in-out;
  }
  &:hover::before {
    width: 0%;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.6em;
  }
`;

const Image1 = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 600px;
  height: 70%;
  @media screen and (max-width: 850px) {
    width: 300px;
    height: 50%;
  }
  @media screen and (max-width: 400px) {
    width: 150px;
    height: 30%;
  }
`;
const Image2 = styled.img`
  position: absolute;
  left: 0;
  bottom: 0%;
  width: 70vw;
  height: 400px;
  @media screen and (max-width: 850px) {
    height: 300px;
    bottom: 20%;
  }
  @media screen and (max-width: 400px) {
    height: 200px;
    bottom: 0;
  }
`;
