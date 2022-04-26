import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Container>
      <Text
        data-scroll
        data-scroll-speed="2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        Here'll go a small paragraph talking about how rein got started and the
        origin story. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eveniet commodi quasi a sunt cum sint sequi sit, maxime delectus
        reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Cum, illo!
      </Text>
    </Container>
  );
};

export default About;

const Container = styled.section`
  height: 50vh;
  max-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8rem;
  margin-top: 1rem;

  @media screen and (max-width: 400px) {
    padding: 0 2rem;
    height: 100%;
    max-height: unset;
  }
`;

const Text = styled(motion.p)`
  max-width: 700px;
  font-size: 2em;
  color: #202020;
  @media screen and (max-width: 400px) {
    font-size: 1em;
  }
`;
