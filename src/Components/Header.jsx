import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  position: fixed;
  width: 100%;
  z-index: 1000; 

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
`;


const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
      width: 278%;
      margin-left: -123%;
}
    a{
      background-color: #ea913d;
      font-family: sans-serif;
      font-weight: 300;
      padding: 5px 9px;
      border-radius: 5px;
      color: #fff;
      text-decoration: none;
      margin-bottom: 10px;
      margin: 5px;

      &:hover{
      background-color: #fff;
      color: black;
      border:solid 1px black;
    }

    }

    li {
      margin: 0 10px;
    }
  }

  @media (max-width: 768px) {
    display: ${props => (props.menuOpen ? 'block' : 'none')};
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;

  @media (max-width: 768px) {
    margin-top: 10px;
    & > *:not(:last-child) {
      margin-right: 10px; 
    }
  }

  @media (min-width: 769px) {
    margin-right: 20px; 
  }
`;




const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>Logo</Logo>
      <Navigation menuOpen={menuOpen}>
        <ul>
          <a href="/">Home</a>
          <a href="/contact">About</a>
          <a href="/contact">Popular</a>
          <a href="/contact">Menu</a>
          <a href="/contact">Order</a>
          <a href="/contact">Blog</a>
        </ul>
      </Navigation>
      <Icons>
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faShoppingCart} />
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
      </Icons>
    </HeaderContainer>
  );
};

export default Header;
