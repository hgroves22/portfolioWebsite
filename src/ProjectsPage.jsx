import React from 'react';
import './components/ProjectsPage.css';
import projectList from './components/projectList';
import bookImage from './assets/book.jpg'

function Projects() {
  const groupedProjects = [];

  for (let i = 0; i < projectList.length; i+= 2) {
    groupedProjects.push(projectList.slice(i, i+2));
  }


  return (
    <div className="projects-container">
      <h1 className='projectsTitle'>Here Are Some Of My Projects!</h1>
      <h2 className='projectsSubtitle'>Hover over the projects to learn more!</h2>

      {groupedProjects.map((group, index) => (
        <div key={index} className="groupedFlex">
        {group.map((project, subIndex) => (
          <div key={subIndex} className='projectCard'>
          <h2 className="projectTitle">{project.title}</h2>
          <a className="projectLink" href={project.link} target="_blank" rel="noopener noreferrer">
            Visit Project
          </a>
          {project.side == 'left' ? (
            <div className='leftFlex'>
              <div className="projectInfo">
                <ul>
                  <p>Timeline</p>
                  <li>{project.timeline}</li>
                  <p>Languages & Libraries</p>
                  <li>{project.langLib}</li>
                  <p>Misc Info</p>
                  <li>Scope: {project.scope}</li>
                  <li>Collaborators: {project.collab}</li>
                </ul>
              </div>

              <img className="projectImage" src={project.image}></img>
            </div>
          ) : (
            <div className='rightFlex'>
              <img className="projectImage" src={project.image}></img>
              <p>{project.summary}</p>
            </div>
          )}

        <p className="projectSummary">{project.summary}</p>
         </div>
        ))}
        </div>
      ))}
      <div className='bottom'></div>
    </div>
  );
}

export default Projects;