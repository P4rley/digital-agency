import React from "react";
import styled from "styled-components";

import img from "../Assets/Person-1.jpg";
import img2 from "../Assets/Person-2.jpg";
import img3 from "../Assets/Person-3.jpg";
import img4 from "../Assets/Person-4.jpg";

const Team = () => {
  return (
    <Container>
      <Header>
        <Desc>
          Behind all of that topnotch work there is offcourse a great team
        </Desc>
        <Heading>the team</Heading>
      </Header>

      <ImageWrapper>
        <Left>
          <ImageItem>
            <Image src={img} alt="" />
            <Name>Michelle lemaitre</Name>
            <Job> Copywriter/Marketer</Job>
          </ImageItem>

          <ImageItem>
            <Image src={img2} alt="" />
            <Name>Michelle lemaitre</Name>
            <Job> Copywriter/Marketer</Job>
          </ImageItem>
        </Left>
        <Right>
          <ImageItem>
            <Image2 src={img3} alt="" />
            <Name>Michelle lemaitre</Name>
            <Job> Copywriter/Marketer</Job>
          </ImageItem>
          <ImageItem>
            <Image2 src={img4} alt="" />
            <Name>Michelle lemaitre</Name>
            <Job> Copywriter/Marketer</Job>
          </ImageItem>
        </Right>
      </ImageWrapper>
    </Container>
  );
};

export default Team;

const Container = styled.div`
  position: relative;
  padding-top: 5rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10%;
  color: #202020;
`;
const Desc = styled.p`
  max-width: 200px;
  @media screen and (max-width: 850px) {
    font-size: 0.8em;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.4em;
    width: 100px;
    max-width: unset;
  }
`;
const Heading = styled.h1`
  font-size: 15em;

  @media screen and (max-width: 850px) {
    font-size: 8em;
  }
  @media screen and (max-width: 400px) {
    font-size: 3.5em;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20%;
`;

const ImageItem = styled.div`
  margin: 2rem 0;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  margin: 0.8rem 0;
  border-radius: 5px;
  @media screen and (max-width: 400px) {
    width: 100px;
    height: 150px;
  }
`;
const Image2 = styled.img`
  width: 100%;
  height: 400px;
  margin: 0.8rem 0;
  border-radius: 5px;
  @media screen and (max-width: 400px) {
    width: 100px;
    height: 150px;
  }
`;

const Name = styled.p`
  font-weight: 500;
  font-size: 1em;
  @media screen and (max-width: 400px) {
    font-size: 0.7em;
  }
`;
const Job = styled.p`
  font-size: 0.7em;
  @media screen and (max-width: 400px) {
    font-size: 0.4em;
  }
`;
