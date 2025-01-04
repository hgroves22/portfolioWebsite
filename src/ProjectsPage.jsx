import React from 'react';
import './components/ProjectsPage.css';
import projectList from './components/projectList';
import bookImage from './assets/book.jpg'

function Projects() {
  return (
    <div className="projects-container">
      <h1 className='projectsTitle'>Here Are Some Of My Projects!</h1>
      {projectList.map((project, index) => (
        <div key={index} className="project-card">
          <h2 className="projectTitle">{project.title}</h2>
          <a className="projectLink" href={project.link} target="_blank" rel="noopener noreferrer">
            Visit Project
          </a>
          
          {project.side == 'left' ? (
            <div className='leftFlex'>
              <p>{project.description}</p>

              <img className="projectImage" src={bookImage}></img>
            </div>
          ) : (
            <div className='rightFlex'>
              <img className="projectImage" src={bookImage}></img>
              <p>{project.description}</p>
            </div>
          )}

        </div>
      ))}
      <div className='bottom'></div>
    </div>
  );
}

export default Projects;