import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";

import img from "../Assets/image-1.jpg";

// Import Swiper styles
import "../styles/slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Deep = () => {
  var settings = {
    dots: true,
    dotsClass: "slick-dots line-indicator",
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    customPaging: (i) => (
      <div
        style={{
          position: "absolute",
          width: "100%",
          top: "-7px",
          opacity: 0,
        }}
      >
        {i}
      </div>
    ),
  };
  return (
    <Container>
      <Wrapper
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <SliderWrapper {...settings}>
          <SliderItem>
            Everybody needs guidance to help make decissions in the workflow, we
            leave that task to our valuse, have a look.
          </SliderItem>

          <SliderItem>
            Everybody needs guidance to help make decissions in the workflow, we
            leave that task to our valuse, have a look.
          </SliderItem>

          <SliderItem>
            Everybody needs guidance to help make decissions in the workflow, we
            leave that task to our valuse, have a look.
          </SliderItem>

          <SliderItem>
            Everybody needs guidance to help make decissions in the workflow, we
            leave that task to our valuse, have a look.
          </SliderItem>
        </SliderWrapper>
      </Wrapper>

      <MarqueeContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <MarqueeWrapper gradient={false} speed={40}>
          <Text1>dig deep</Text1>
          <Text2>find the way</Text2>
        </MarqueeWrapper>
      </MarqueeContainer>

      <Content>
        <Number>/01</Number>
        <Left>
          <Desc
            data-scroll
            data-scroll-speed="2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            aliquid impedit eos atque! Illum est dolore doloribus ratione
            perferendis eaque alias fugit asperiores porro quia. Odio excepturi
            nemo nobis sint? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eum, aut dolore ea voluptates ratione nesciunt et natus quasi?
            At, id.
          </Desc>
          <Button>Let's work together</Button>
        </Left>
        <Right>
          <Image src={img} alt="" data-scroll data-scroll-speed="2" />
        </Right>
      </Content>
    </Container>
  );
};

export default Deep;

const Container = styled.div`
  height: 100vh;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const Wrapper = styled(motion.div)`
  position: relative;
`;

const SliderWrapper = styled(Slider)`
  position: absolute;
  width: 200px;
  font-size: 0.7em;
  top: 10%;
  left: 10%;
`;
const SliderItem = styled.p``;

const MarqueeContainer = styled(motion.div)`
  position: relative;
`;

const MarqueeWrapper = styled(Marquee)``;

const Text1 = styled.p`
  font-size: 12em;
  font-weight: 700;
  margin: 0 5rem;
`;
const Text2 = styled(Text1)``;

const Number = styled.div`
  font-size: 0.8em;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 10%;

  position: relative;
`;

const Left = styled.div`
  width: 300px;
  @media screen and (max-width: 400px) {
    margin-left: 1rem;
  }
`;

const Desc = styled.div`
  font-size: 1em;
  @media screen and (max-width: 850px) {
    font-size: 0.8em;
    width: 250px;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.5em;
    width: 100px;
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
    font-size: 0.5rem;
  }
`;
const Right = styled.div``;
const Image = styled.img`
  width: 400px;
  height: 100%;

  @media screen and (max-width: 850px) {
    width: 300px;
  }
  @media screen and (max-width: 400px) {
    width: 150px;
    height: 200px;
  }
`;
