import React from "react";
import styled from "styled-components";

const Talk = () => {
  return (
    <Container>
      <Header>
        <Heading>Let's talk</Heading>
        <Heading2>design</Heading2>
      </Header>

      <Wrapper>
        <Desc>
          <Text>
            What's a great plan without the right execution of it? We cover this
            as well in our design services
          </Text>
          <Button>To the design page</Button>
        </Desc>
      </Wrapper>
    </Container>
  );
};

export default Talk;

const Container = styled.div`
  padding: 5rem 0;
`;
const Header = styled.div`
  position: relative;
`;
const Heading = styled.h1`
  font-size: 10em;
  @media screen and (max-width: 400px) {
    font-size: 4em;
  }
`;
const Heading2 = styled(Heading)`
  margin-left: 20%;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;
const Desc = styled.div`
  width: 250px;
`;
const Text = styled.p``;
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
`;
