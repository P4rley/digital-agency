import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdClose, IoMdMenu } from "react-icons/io";

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

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Container variants={container} initial="hidden" animate="show">
      <Logo to="/" variants={item}>
        Rein
      </Logo>
      <MenuList variants={item}>
        <MenuItem>
          <Item to="/">Home</Item>
          <Item to="/">About</Item>
          <Item to="/">Design</Item>
          <Item to="/">Cases</Item>
          <Item to="/">Why work with us?</Item>
        </MenuItem>
        <Button variants={item}>Let's Work Together</Button>
      </MenuList>

      {toggle && (
        <NavMenu>
          <NavMenuItem>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/">About</NavItem>
            <NavItem to="/">Design</NavItem>
            <NavItem to="/">Cases</NavItem>
            <NavItem to="/">Why work with us?</NavItem>
          </NavMenuItem>
          <NavButton>Let's Work Together</NavButton>
        </NavMenu>
      )}

      {toggle ? (
        <Close>
          <CloseIcon onClick={() => setToggle(false)} />
        </Close>
      ) : (
        <Hamburger>
          <HamburgerIcon onClick={() => setToggle(true)} />
        </Hamburger>
      )}
    </Container>
  );
};

export default Navbar;

const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 0;
  padding: 1rem;
  z-index: 9999;
  @media screen and (max-width: 400px) {
    justify-content: space-between;
    padding: 1rem 3rem;
  }
`;

const Logo = styled(Link)`
  font-family: "Kaushan Script", cursive;
  font-weight: 700;
  cursor: pointer;
  font-size: 1.5em;
  z-index: 999;
`;

const MenuList = styled(motion.ul)`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;
const MenuItem = styled.li`
  margin-right: 3rem;
`;
const Item = styled(Link)`
  margin: 0 1rem;
  position: relative;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font-size: 0.9em;

  &::before {
    content: "";
    position: absolute;
    bottom: -7px;
    width: 0%;
    height: 3px;
    background-color: #202020;
    border-radius: 20px;
    transition: all 0.4s ease-in-out;
  }
  &:hover::before {
    width: 100%;
  }
`;

const Button = styled(motion.button)`
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

const Hamburger = styled.div`
  display: none;
  font-size: 1.5em;
  z-index: 999;
  @media screen and (max-width: 400px) {
    display: block;
  }
`;
const HamburgerIcon = styled(IoMdMenu)``;
const Close = styled(Hamburger)``;
const CloseIcon = styled(IoMdClose)``;

const NavMenu = styled.div`
  display: none;
  @media screen and (max-width: 400px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #dedede;
    padding: 2rem;
  }
`;
const NavMenuItem = styled.ul`
  z-index: 99;
  @media screen and (max-width: 400px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  margin: 1rem 0;
`;

const NavButton = styled(Button)``;
