import React from "react";
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <Navbar />
      <Home />
    </Container>
  );
};

export default Hero;

const Container = styled.section`
  min-height: 100vh;
`;
