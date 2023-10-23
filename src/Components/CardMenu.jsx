import React from 'react';
import styled from '@emotion/styled';
import Alitas from '../assets/ALITAS.png';

const Container = styled.section`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: green;
  font-family: 'Dancing Script', cursive;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: "Arial", sans-serif;
  font-weight: 900;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); 
  }
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  width: 86%;
  margin: 8px;
  background-color: #ccc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);

 
`;

const CardImage = styled.img`
  width: 116px;
  height: auto;
  margin-right: 20px;
  margin-top: -36px;
  &:hover {
    transform: scale(1.05);
    z-index: 1; 
  }
`;

const Message = styled.h3`
  font-size: 1.2rem;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: green;
  font-family: 'Oswald', sans-serif;
`;

const Data = [
  {
    id: 1,
    image: Alitas,
    message: 'Delicius Food',
    price: '$. 29',
  },
  {
    id: 2,
    image: Alitas,
    message: 'Delicius Food',
    price: '$. 23',
  },
  {
    id: 3,
    image: Alitas,
    message: 'Delicius Food',
    price: '$. 23',
  },
  {
    id: 4,
    image: Alitas,
    message: 'Delicius Food',
    price: '$. 23',
  },
  {
    id: 5,
    image: Alitas,
    message: 'Delicius Food',
    price: '$. 23',
  },
];

function Menu() {
  return (
    <Container>
      <Title>Our Menu</Title>
      <SubTitle>Our Top Dishes</SubTitle>
      <CardContainer>
        {Data.map((item) => (
          <Card key={item.id}>
            <CardImage src={item.image} alt={item.message} />
            <div>
              <Message>{item.message}</Message>
              <Price>{item.price}</Price>
            </div>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}

export default Menu;
