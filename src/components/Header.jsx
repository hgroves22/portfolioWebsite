import React from 'react'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

function Header() {

  return(
    <header className='headerComp'>
      <h1 className = "headerName">Henry Groves</h1>
      <nav className="items">
        <ul className = "nav-links">
          <li><Link to="/home">Home</Link></li>
          <li>|</li>
          <li><Link to="/resume">Resume</Link></li>
          <li>|</li>
          <li><Link to="/projects">Projects</Link></li>
          <li>|</li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}

export default Header