import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Hero />
    </>
  )
}

export default App
