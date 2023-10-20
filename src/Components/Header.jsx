import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import LogoImage from '../assets/logo.png';
import styled from "@emotion/styled";

const Container = styled.div`
  margin-top: 100px;
`;

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  z-index: 2;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  color: #000;
  margin-top: -111px;
  @media (max-width: 768px) {
    margin-top: -109px;
    height: 109px;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin: 10px;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    visibility: ${(props) => (props.isMobileMenuOpen ? "visible" : "hidden")};
    position: relative; 
    right: 0;
    row-gap: 1.4rem;
    padding: 20px;
    transition: 0.3s;
    margin-top:105%;
    height: 57%;
  }

  a {
    background-color: #ea913d;
    font-family: sans-serif;
    font-weight: 300;
    padding: 5px 9px;
    border-radius: 5px;
    color: #fff;
    text-decoration: none;
    margin-bottom: 10px;

    &:hover{
      background-color: #fff;
      color: black;
      border:solid 1px black;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 0;
    }

  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 20px;
  @media (max-width: 768px) {
    margin: 10px 0;
    margin-right: 21px;

  }
`;

const Icon = styled.div`
  background-color: #656363;
  border-radius: 5%;
  color: white;
  padding: 10px;
  display: inline-flex;
  cursor: pointer;
  &:hover {
    scale: 1.1; 
    rotate: 360; 
  }
`;

const Content = styled.div`
  margin-top: 70px;
`;

const MobileMenuButton = styled.div`
  background-color: #656363;
  border-radius: 5%;
  padding: 10px;
  display: inline-flex;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: initial;
  }
`;

const CloseButton = styled.div`
  background-color: #656363;
  border-radius: 50%;
  padding: 10px;
  display: inline-flex;
  cursor: pointer;
  display: ${(props) => (props.isMobileMenuOpen ? "initial" : "none")};
`;

function Card() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Container>
      <Content>
      </Content>
      <HeaderContainer>
        <Logo src={LogoImage} alt="Logo" />
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
        <Navigation >
         {/* isMobileMenuOpen={isMobileMenuOpen} */}
          <a href="/">Home</a>
          <a href="/contact">About</a>
          <a href="/contact">Popular</a>
          <a href="/contact">Menu</a>
          <a href="/contact">Order</a>
          <a href="/contact">Blog</a>
        </Navigation>
        <IconContainer>
          <Icon><FaSearch /></Icon>
          <Icon><FaShoppingCart /></Icon>
          <Icon><FaUser /></Icon>
        </IconContainer>
      </HeaderContainer>
    </Container>
  );
}

export default Card;
