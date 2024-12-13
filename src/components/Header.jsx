import React from 'react'
import './Header.css';

function Header() {

  return(
    <header>
      <h1 class = "headerName">Henry Groves</h1>
      <nav className="items">
        <ul className = "nav-links">
          <li><a>Home</a></li>
          <li>|</li>
          <li><a href="">About</a></li>
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