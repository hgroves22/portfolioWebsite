import React from 'react';
import './components/ProjectsPage.css';
import projectList from './components/projectList';
import bookImage from './assets/book.jpg'

function Projects() {
  return (
    <div className="projects-container">
      {projectList.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <div className='side'>
            <p>{project.description}</p>

            <img src={bookImage}></img>
          </div>

          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Visit Project
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;