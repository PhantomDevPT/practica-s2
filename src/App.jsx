import Header from './Components/Header'
import HomePage from './Components/HomePage'
import CardMenu from './Components/CardMenu'
import Card2 from './Components/Card2'
import CardsPopular from './Components/CardsPopular'
import Rating from './Components/Rating'

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
<<<<<<< HEAD
    <Header />
      <CardsPopular />
      <Rating />
      <Card2 />
      <HomePage />
      <CardMenu />
      
      
=======
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
>>>>>>> 0a1dbae7764026c4a81d98281755d0132106a1f8
    </>
  );
}

export default App


