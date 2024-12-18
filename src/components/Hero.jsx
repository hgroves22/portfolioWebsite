import React from 'react'
import './Hero.css';
import headshot from '../assets/headshot.jpg';

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Hero() {

  return(
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="title fade-in1">Hi, I'm Henry!</h1>
          <h1 className='fade-in2'>A recent graduate and an upcoming developer</h1>
          <p className='fade-in2'>I love to work on projects and excited to bring the love into the professional world</p>

          <p className="socials-desc">Connect with  me on LinkedIn or come take a look at my GitHub repo!</p>

          <div className="social-medias">
            <a 
              href="https://www.linkedin.com/in/henry-groves-540ba1229/" 
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link">
            <FaLinkedin size={70} style={{ color: "#BDC3C7" }} />
            </a>
            <a 
              href="https://github.com/hgroves22?tab=repositories" 
              target="_blank"
              rel="noopener noreferrer"
              className="github-link">
            <FaGithub size={70} style={{ color: "#BDC3C7" }} />
            </a>
          </div>
        </div>

        <div className="hero-picture">
          <img className="headshot" src= {headshot} alt="This should be a photo of me!" />
        </div>

      </section>
    </>
  );
}

export default Hero