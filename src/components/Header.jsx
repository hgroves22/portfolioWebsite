import React from 'react'
import './Header.css';

function Header() {

  return(
    <header className='headerComp'>
      <h1 className = "headerName">Henry Groves</h1>
      <nav className="items">
        <ul className = "nav-links">
          <li><a href="">Home</a></li>
          <li>|</li>
          <li><a href="">Resume</a></li>
          <li>|</li>
          <li><a href="">Projects</a></li>
          <li>|</li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}

export default Header