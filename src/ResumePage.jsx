import React from 'react'
import './components/ResumePage.css'



function Resume() {

  return(
    <div className='resume-page'>
      <div className="resume-container">
        <div className="education-container fade-in1">
          <h2 className="sub-header header-pad">EDUCATION</h2>
          <br></br>
          <p className="resume-info">
            <strong>University of Richmond</strong>
            , Richmond, VA</p>
            <br></br>
          <p className="resume-info">
            <strong>Bachelor of Arts: </strong>
            <br></br>
            <p className='major-minor'>
              Major: Computer Science
              <br></br>
              Minor: Business Administration</p>
            </p>
          <p className="resume-info">
            <strong>GPA: 3.72 </strong>
            <i>manga cum laude</i></p>
          <p className="resume-info">
            <strong>Honors: </strong>
            <p className="education-honors-list">
              Michael Ice Memorial Scholarship
              <ul className="list-desc-list">
                <li>Issued September 2022 by the Robins School of Business Faculty</li>
                <li>Awarded based on merit and character.</li>
              </ul>
            </p>
            <p className="education-honors-list">
              Dean's List
              <ul className="list-desc-list">
                <li>Fall 2021, Spring 2022, Spring 2024</li>
              </ul>
            </p>
            <p className="education-honors-list">
              A-List
              <ul className="list-desc-list">
                <li>Spring 2022, Spring 2024</li>
              </ul>
            </p>
            </p>
        </div>

        <div className="experience-container fade-in2">
          <h2 className="sub-header">PROFESSIONAL</h2>
          <h2 className="sub-header header-pad">EXPERIENCE</h2>

          <p className="resume-info">
            <strong>Independant Software Consultant</strong>
            <p className='list-desc'><strong>Date: </strong>November '24 - Present</p>
            <p className='list-desc'><strong>Location: </strong>Remote</p>
            <p className='list-desc'><strong>Key Responsibilities: </strong></p>
            <ul className="list-desc-list">
              <li>Established strong relationships with three clients to provide support on innovative software projects.</li>
              <li>Debug and optimize a projection project in Python and TypeScript for an upcoming performance in 2025.</li>
              <li>Customize and improve a startup’s website design using the React library, enhancing the user interface.</li>
            </ul>
          </p>
            

          <p className="resume-info">
            <strong>Financial Analyst Intern</strong>
            <p className='list-desc'><strong>Date: </strong>June '23 - August '23</p>
            <p className='list-desc'><strong>Company: </strong>Gabelli Funds, LLC</p>
            <p className='list-desc'><strong>Location: </strong>Rye, NY</p>
            <p className='list-desc'><strong>Key Responsibilities: </strong></p>
            <ul className="list-desc-list">
              <li>Worked in the merger arbitrage division researching and analyzing new acquisitions within companies.</li>
              <li>Participated in earnings calls with research analysts and shadowed traders on the in-house trading floor.</li>
              <li>Developed a financial model and stock pitch for YETI; presented to all research analysts and CEO of firm.</li>
            </ul>
          </p>
        </div>

        <div className="technical-container fade-in3">
          <h2 className="sub-header">TECHNICAL</h2>
          <h2 className="sub-header header-pad">SKILLS</h2>

          <p className="resume-info"><strong>Programming Languages: </strong>
            <ul className="list-desc-list">
              <div className='tech-skills-flex'>
                <li>Python</li>
                <li>C++</li>
                <li>Java</li>
              </div>

              <div className='tech-skills-flex'>
                <li>JavaScript</li>
                <li>MIPS Assembly</li>
              </div>
            </ul>
          </p>

          <p className="resume-info"><strong>Web Development: </strong>
            <ul className="list-desc-list">
              <li>Certification: Responsive Web Design</li>
              <div className='tech-skills-flex'>
                <li>CSS</li>
                <li>HTML</li>
              </div>

              <div className='tech-skills-flex'>
                <li>React</li>
                <li>JSX</li>
              </div>
            </ul>
          </p>

          <p className="resume-info"><strong>Software Development & Methodologies: </strong>
            <ul className="list-desc-list">
              <div className='tech-skills-flex'>
                <li>Agile Development</li>
                <li>Scrum</li>
              </div>
              <div className='tech-skills-flex'>
                <li>Project Management</li>
                <li>GitHub</li>
              </div>
            </ul>
          </p>

          <p className="resume-info"><strong>Database Management: </strong>
            <ul className="list-desc-list">
              <div className='tech-skills-flex'>
                <li>SQL</li>
              </div>
            </ul>
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Resume