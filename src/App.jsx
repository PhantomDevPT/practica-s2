import { useState } from 'react'

import CardsPopular from './components/CardsPopular'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CardsPopular/>
    </>
  )
}

export default App


