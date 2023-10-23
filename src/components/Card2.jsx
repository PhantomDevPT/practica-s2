import React from "react";
import styled from "@emotion/styled";
import comida from "../assets/comida2.png";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffff00;
  margin:20px;
  border-radius:16px;
  @media (max-width: 768px) {
    max-width: 450px;;
    max-height: 300px;
    transform: translateX(36px);


  }
`;

const Content = styled.div`
display: inline-table;
    align-items: center;
    margin-right: 150px;
  @media (max-width: 768px) {
    display: inline-flex;
}

`;
const Letras = styled.div`
justify-content: space-between; /* Espacio entre los elementos */
align-items: center;
@media (max-width: 768px) {
  margin-left: 308px;

  }

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

  transform: scale(1.1);
  margin: 47px;
  margin-right: 95px;

  @media (max-width: 768px) {
    transform: scale(0.6);
    transform: translateY(-3%);
    transform: translateX(-99%);

    width: 200px;
    height: 200px;
  }

  
`;

function Card() {
  return (
    <Container>
      <Content>
      <Letras>
          <Title>Double Cheese</Title>
          <SubTitle>Burguer</SubTitle>
          <Parrafo>With coca cola and friends</Parrafo>
          <Btn>Order Now</Btn>
        </Letras>
      </Content>
      <ImgContainer src={comida} alt="Your Image" />
    </Container>
  );
}

export default Card;
