import Card from "./components/card";
import plates from "./data/plates";
import styled from "@emotion/styled";
import './App.css';
import { Section } from './components/Section'


const CardsContainer = styled.div`
width: 100%;
display : flex;
justify-content: center;
align-items: center;
gap : 20px;
`

function App() {
  return (
    <>
    <CardsContainer>
      {plates.map(element => 
        <Card  key={element.id}
        name={element.name}
        img={element.image}
        />)}
        
      </CardsContainer>
    <Section/>
    </>
  );
}

export default App


