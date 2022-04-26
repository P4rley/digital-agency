import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Care = () => {
  return (
    <Container>
      <Header>
        <Heading1 data-scroll data-scroll-delay="0.20" data-scroll-speed="4">
          we care
        </Heading1>
        <Desc
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          Culture, beliefs and those other things, we care about a lot of stuff.
          These are the things we live by.
        </Desc>
        <Heading2 data-scroll data-scroll-speed="4" data-scroll-delay="0.20">
          about these
        </Heading2>
      </Header>
      <BoxWrapper>
        <Box>
          <Number>/01</Number>
          <Text>
            If we feel can't be of any help to you or your company, we won't
            help you
          </Text>
          <Button>i want an example</Button>
        </Box>
        <Box>
          <Number>/02</Number>
          <Text>
            We promise to dig the deepest we can in the roots of your problem to
            see you rise to the top in the future, you have our word.
          </Text>
          <Button>i want an example</Button>
        </Box>
        <Box>
          <Number>/03</Number>
          <Text>
            We promise to dig the deepest we can in the roots of your problem to
            see you rise to the top in the future, you have our word.
          </Text>
          <Button>i want an example</Button>
        </Box>
        <Box>
          <Number>/04</Number>
          <Text>
            We promise to dig the deepest we can in the roots of your problem to
            see you rise to the top in the future, you have our word.
          </Text>
          <Button>i want an example</Button>
        </Box>
        <Box>
          <Number>/05</Number>
          <Text>
            We promise to dig the deepest we can in the roots of your problem to
            see you rise to the top in the future, you have our word.
          </Text>
          <Button>i want an example</Button>
        </Box>
      </BoxWrapper>
    </Container>
  );
};

export default Care;

const Container = styled.div`
  min-height: 100vh;
  position: relative;
`;
const Header = styled.div`
  position: relative;
  height: 70vh;

  @media screen and (max-width: 850px) {
    height: 40vh;
  }
  @media screen and (max-width: 400px) {
    height: 30vh;
  }
`;
const Heading1 = styled.h1`
  position: absolute;
  font-size: 13em;
  right: 0;
  top: 0%;
  color: #202020;
  @media screen and (max-width: 850px) {
    font-size: 9em;
  }
  @media screen and (max-width: 400px) {
    font-size: 4em;
    top: 5%;
  }
`;
const Heading2 = styled.h1`
  position: absolute;
  font-size: 13em;
  left: 0;
  top: 50%;
  color: #202020;
  @media screen and (max-width: 850px) {
    font-size: 9em;
  }
  @media screen and (max-width: 400px) {
    font-size: 4em;
  }
`;
const Desc = styled(motion.p)`
  position: absolute;
  left: 20%;
  top: 24%;
  width: 250px;
  color: #606060;
  @media screen and (max-width: 850px) {
    font-size: 0.8em;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.5em;
    width: 150px;
    top: 30%;
    left: 10%;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 850px) {
    justify-content: flex-start;
  }
`;
const Box = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 2px solid #202020;
  padding: 3rem 0;
  :last-child {
    border-bottom: 2px solid #202020;
  }

  @media screen and (max-width: 400px) {
    padding: 2rem 0;
    justify-content: center;
    align-items: center;
  }
`;
const Number = styled.p`
  font-size: 0.8em;
  font-weight: 600;
  color: #202020;

  @media screen and (max-width: 400px) {
    font-size: 0.5em;
  }
`;
const Text = styled.p`
  width: 300px;
  color: #202020;
  @media screen and (max-width: 400px) {
    font-size: 0.4em;
    padding: 0 2rem;
  }
`;
const Button = styled.button`
  font-size: 1em;
  outline: none;
  border: none;
  background-color: transparent;
  position: relative;
  cursor: pointer;
  color: #202020;

  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
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
    &::before {
      content: "";
      width: 60%;
      height: 2px;
    }
  }
`;
