import React from 'react';
import './components/ProjectsPage.css';
import projectList from './components/projectList';

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
                  <p className="infoHeader">Timeline</p>
                  <li className="projectBullet">{project.timeline}</li>
                  <p className="infoHeader">Languages & Libraries</p>
                  <li className="projectBullet">{project.langLib}</li>
                  <p className="infoHeader">Misc Info</p>
                  <li className="projectBullet">Scope: {project.scope}</li>
                  <li className="projectBullet">Collaborators: {project.collab}</li>
                </ul>
              </div>

              <img className="projectImage" src={project.image}></img>
            </div>
          ) : (
            <div className='rightFlex'>
              <img className="projectImage" src={project.image}></img>
              <div className="projectInfo">
                <ul>
                  <p className="infoHeader">Timeline</p>
                  <li className="projectBullet">{project.timeline}</li>
                  <p className="infoHeader">Languages & Libraries</p>
                  <li className="projectBullet">{project.langLib}</li>
                  <p className="infoHeader">Misc Info</p>
                  <li className="projectBullet">Scope: {project.scope}</li>
                  <li className="projectBullet">Collaborators: {project.collab}</li>
                </ul>
              </div>
            </div>
          )}

        <p className="summary-title">Summary</p>
        <p className="projectSummary">
          <div style={{ textIndent: "2em" }}>
          {project.summary}</div></p>
         </div>
        ))}
        </div>
      ))}
      <div className='bottom'></div>
    </div>
  );
}

export default Projects;