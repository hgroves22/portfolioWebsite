import React from 'react'
import './components/ResumePage.css'



function Resume() {

  return(
    <div className='page'>
      <div className="resume-container">
        <div className="education-container">
          <h2 className="sub-header">EDUCATION</h2>
          <br></br>
          <p className="resume-info">something something seomthing</p>
          <p className="resume-info">something something seomthing</p>
        </div>
        <div className="experience-container">
          <h2 className="sub-header">PROFESSIONAL</h2>
          <h2 className="sub-header">EXPERIENCE</h2>
          <p className="resume-info">something something seomthing</p>
        </div>
        <div className="technical-container">
          <h2 className="sub-header">TECHNICAL</h2>
          <h2 className="sub-header">SKILLS</h2>
          <p className="resume-info">something something seomthing</p>
        </div>
      </div>
    </div>
  );
}

export default Resume