import React from "react";
import styled from "@emotion/styled";
import Alitas from "../assets/ALITAS.png";
import Papitas from "../assets/PAPITAS.png";
import Fideos from "../assets/FIDEOS.png";

const Contenedor = styled.main`
  margin-top: -11px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 10%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  position: relative;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  width: 25%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 350px;
  overflow: hidden;

  a {
    font-family: sans-serif;
    background-color: #ff7b00;
    color: #fff;
    border: none;
    padding: 10px 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
    transform: scale(1.05);
    z-index: 1; 
  }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
  /* &:hover {
    transform: scale(1.05);
    z-index: 1;
  } */
`;

const CardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: white;
  
`;

const CardDescription = styled.p`
  font-size: 25px;
  font-weight: bold;
  font-family: "Arial", sans-serif;
  color: #ffffff;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  margin-top: -110px;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 91%;
  }
`;

const CustomCard = styled(Card)`
  background-color: ${(props) => props.backgroundColor};
`;

// Componente personalizado para el segundo card
const SecondCard = styled(CustomCard)`
  h2 {
    color: #4a4a4a;
    text-align: center; 
  }
  p {
    color: maroon; 
    text-align: center; 
  }
  a {
    display: block; 
    margin: 0 auto; 
    text-align: center; 
    width: 75px;
    cursor: pointer;
    
  }
`;

const cardData = [
  {
    id: 1,
    title: "Special Offer",
    description: "Upto 50% Off",
    link: "https://dribbble.com/shots/22824654-Fast-Food-UI-Design",
    image: Fideos,
    backgroundColor: "black",
  },
  {
    id: 2,
    title: "Special Offer",
    description: "Upto 50% Extra",
    link: "#",
    image: Papitas,
    backgroundColor: "#e8d9dc",
  },
  {
    id: 3,
    title: "Special Offer",
    description: "Upto 50% Cashback",
    link: "#",
    image: Alitas,
    backgroundColor: "#2E1D11",
  },
];

function Home() {
  return (
    <Contenedor>
      <CardContainer>
        {cardData.map((card) => (
          card.id === 2 ? (
            <SecondCard key={card.id} backgroundColor={card.backgroundColor}>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                Ver más
              </a>
              <CardImage src={card.image} alt={card.title} />
            </SecondCard>
          ) : (
            <CustomCard key={card.id} backgroundColor={card.backgroundColor}>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                Ver más
              </a>
              <CardImage src={card.image} alt={card.title} />
            </CustomCard>
          )
        ))}
      </CardContainer>
    </Contenedor>
  );
}

export default Home;
