import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Attendance System',
    status: 'Completed',
    description: 'Face recognition-based attendance tracking.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'face-api.js'],
    links: {
      github: 'https://github.com/nomanahmed21/check-in-out.git',
      demo: 'https://github.com/nomanahmed21/check-in-out.git'
    }
  },
  {
    name: 'Store Manager',
    status: 'In Progress',
    description: 'Restaurant billing and stock management system.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
    links: {
      github: '',
      demo: ''
    }
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className={project.status === 'Completed' ? 'status-completed' : 'status-inprogress'}>
              {project.status === 'Completed' ? '✅' : '🛠️'} {project.name}
            </h3>
            <p>{project.description}</p>
            <strong>Tech Stack:</strong>
            <ul>
              {project.techStack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
              {project.links.demo && <a href={project.links.demo} target="_blank" rel="noopener noreferrer">Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
