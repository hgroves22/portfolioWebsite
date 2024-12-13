import React from 'react'
import './Hero.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Hero() {

  return(
    <>
      <section className="hero">
        <div className="hero-content">
          <h3>Hi, I'm Henry!</h3>
          <h1>A recent graduate and an upcoming developer</h1>
          <h3>I love to code and excited to bring the love into the professional world</h3>
          <p className="hero-subtitle">Some info</p>
          <div className="social-medias">
            <a 
              href="https://www.espn.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link">
            <FaLinkedin size={40} style={{ color: "black" }} />
            </a>
            <a 
              href="https://www.espn.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link">
            <FaGithub size={40} style={{ color: "black" }} />
            </a>
          </div>
          <p className="hero-subtitle">Some info</p>
        </div>

      </section>
    </>
  );
}

export default Hero