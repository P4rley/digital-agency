import React from "react";
import styled from "styled-components";

import img from "../Assets/image-4.jpg";
import img2 from "../Assets/image-7.jpg";

const Picture = () => {
  return (
    <ImageWrapper>
      <Image2 src={img} alt="" data-scroll data-scroll-speed="2" />
      <Image3 src={img2} alt="" data-scroll data-scroll-speed="-1" />
    </ImageWrapper>
  );
};

export default Picture;

const ImageWrapper = styled.div`
  position: relative;
`;
const Image2 = styled.img`
  object-fit: cover;
  width: 55%;
  height: 800px;
  @media screen and (max-width: 400px) {
    height: 400px;
  }
`;
const Image3 = styled.img`
  object-fit: cover;
  position: absolute;
  right: 0;
  bottom: 10%;
  width: 700px;
  height: 400px;
  @media screen and (max-width: 400px) {
    width: 250px;
    height: 200px;
  }
`;
