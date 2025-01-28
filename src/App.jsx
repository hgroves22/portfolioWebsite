import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './components/App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Resume from './ResumePage.jsx'
import Projects from './ProjectsPage.jsx'
import Contact from './ContactPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className = "App">
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
