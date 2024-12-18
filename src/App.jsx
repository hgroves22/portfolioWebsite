import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Router and Route components
import './components/App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Resume from './ResumePage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className = "App">
        <Header />

        <Routes>
          <Route path="/home" element={<Hero />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
