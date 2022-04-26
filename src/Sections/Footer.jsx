import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Header>
        <Email>aloha@reinbranding.com</Email>
        <Phone>0123 45 67 89</Phone>
      </Header>

      <FooterLinks>
        <Link>
          <FooterItem>Home</FooterItem>
          <FooterItem>Design</FooterItem>
          <FooterItem>Cases</FooterItem>
          <FooterItem>About</FooterItem>
          <FooterItem>Why us?</FooterItem>
        </Link>
        <Link>
          <FooterItem>Agency owner?</FooterItem>
          <FooterItem>we can help you</FooterItem>
        </Link>
        <Link>
          <FooterItem>Medan, Indonesia</FooterItem>
        </Link>
        <Link>
          <FooterItem>Privacy policy</FooterItem>
          <FooterItem>Term of us</FooterItem>
        </Link>
      </FooterLinks>

      <Rights>All rights reserved © Rein 2022</Rights>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  padding: 2rem 10%;
`;

const Header = styled.div``;
const Email = styled.p`
  font-size: 2.5em;
  max-width: 450px;
  cursor: pointer;
  position: relative;

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
    font-size: 1.5em;
    max-width: 280px;
  }
`;
const Phone = styled(Email)`
  max-width: 180px;
  margin: 1rem 0 2rem;
  position: relative;
`;
const FooterLinks = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;
const Link = styled.ul`
  margin-right: 5rem;
  @media screen and (max-width: 400px) {
    margin: 1rem 0;
  }
`;
const FooterItem = styled.li`
  margin: 0.5rem 0;
  cursor: pointer;
`;

const Rights = styled.p`
  font-weight: 700;
  margin-top: 4rem;
  font-size: 0.7em;
`;
