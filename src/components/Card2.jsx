import React from "react";
import styled from "@emotion/styled";
import fondo from "../assets/logo.png";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffff00;
  margin:20px;
`;

const Content = styled.div`
  flex-direction: column;
  align-items: center;
  margin-right: -80px;
`;

const Title = styled.h1`
  color: #000000;
  font-size: 24px;
`;

const SubTitle = styled.h2`
  color: #da1717;
  font-size: 36px;
`;

const Parrafo = styled.p`
  color: #0a0909;
  font-size: 16px;
`;

const Btn = styled.button`
  color: #e6e6e6;
  background-color: #e4520e;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius:6px;
`;

const ImgContainer = styled.img`
    width: 80%;
    max-width: 400px;
    -webkit-transform: scale(2.4);
    -moz-transform: scale(2.4);
    -ms-transform: scale(2.4);
    transform: scale(2.2);
    margin: 47px;
    margin-right: 95px;
    @media (max-width: 768px) {
        transform: scale(1.2);


  }
  
`;

function Card() {
  return (
    <Container>
      <Content>
        <Title>Double Cheese</Title>
        <SubTitle>Burguer</SubTitle>
        <Parrafo>With coca cola and friends</Parrafo>
        <Btn>Order Now</Btn>
      </Content>
      <ImgContainer src={fondo} alt="Your Image" />
    </Container>
  );
}

export default Card;
