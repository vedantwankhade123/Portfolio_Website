import React, { useState } from 'react';
import ProjectDetailPopup from './ProjectDetailPopup';

const ProjectCarouselCard = ({ project, isCurrent, onViewClick }) => {
  return (
    <div className="project-carousel-card">
      <video autoPlay loop muted playsInline key={project.videoSrc}>
        <source src={project.videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {isCurrent && (
        <div className="project-overlay">
          <div className="project-overlay-header">
            <h4 className="project-overlay-title">{project.title}</h4>
            <div className="project-overlay-links">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub Repository"><i className="fab fa-github"></i></a>
              <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" title="Live Demo"><i className="fas fa-link"></i></a>
            </div>
          </div>
          <button onClick={() => onViewClick(project)} className="btn primary-btn">
            View Project
          </button>
        </div>
      )}
    </div>
  );
};

const Projects = ({ onViewAllClick, projects = [] }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleViewClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  if (!projects.length) {
    return (
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Loading Projects...</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">My Projects</h2>
          <a href="#!" onClick={onViewAllClick} className="view-all-link">
            View All <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="projects-carousel-wrapper">
          <div className="projects-carousel">
            {projects.map((project, index) => {
              const total = projects.length;
              let className = 'project-slide-container';
              if (index === currentIndex) {
                className += ' current-project';
              } else if (index === (currentIndex - 1 + total) % total) {
                className += ' prev-project';
              } else if (index === (currentIndex + 1) % total) {
                className += ' next-project';
              } else {
                className += ' hidden-project';
              }

              return (
                <div className={className} key={index}>
                  <ProjectCarouselCard 
                    project={project} 
                    isCurrent={index === currentIndex}
                    onViewClick={handleViewClick} 
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="project-info-tabs">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-info-tab ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <span className="project-tab-number">#{String(index + 1).padStart(2, '0')}</span>
              <span className="project-tab-title">{project.title}</span>
            </div>
          ))}
        </div>
      </div>
      <ProjectDetailPopup 
        project={selectedProject} 
        projects={projects}
        onClose={closePopup}
        onSelectProject={setSelectedProject}
      />
    </section>
  );
};

export default Projects;