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
<<<<<<< HEAD
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
=======

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> 25223176f7b3d6bd6a2739fb1528e37e9062d4e2
    </>
  );
}

export default App


