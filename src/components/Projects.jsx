import React, { useState } from 'react';

const ProjectDetailPopup = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="project-popup active" onClick={onClose}>
      <div className="project-popup-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-popup">&times;</button>
        <div className="popup-video-container">
          <video src={project.videoSrc} controls autoPlay playsInline loop muted />
        </div>
        <div className="popup-info-container">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tech">
            {project.tech.map(t => <span key={t}>{t}</span>)}
          </div>
          <div className="project-links">
            <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="btn secondary-btn"><i className="fas fa-link"></i> Live Demo</a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn secondary-btn"><i className="fab fa-github"></i> GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectsData = [
    {
      videoSrc: "/videos/cleanCity.mp4",
      title: "CleanCity - Waste Management",
      description: "A web application for reporting and managing waste collection in urban areas. Features include real-time tracking, route optimization, and analytics dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Mapbox"],
      githubUrl: "#",
      liveDemoUrl: "#"
    },
    {
      videoSrc: "/videos/Coming.mp4",
      title: "Face Recognition Attendance",
      description: "An automated attendance system using facial recognition. Includes real-time detection, attendance reports, and an admin dashboard.",
      tech: ["Python", "OpenCV", "Flask", "SQLite"],
      githubUrl: "#",
      liveDemoUrl: "#"
    },
    {
      videoSrc: "/videos/Coming.mp4",
      title: "Task Management App",
      description: "A collaborative task management application with features like task assignment, progress tracking, and team collaboration tools.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      githubUrl: "#",
      liveDemoUrl: "#"
    }
  ];

  const handleViewClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">My Projects</h2>
          <a href="#projects" className="view-all-link">
            View All <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="projects-carousel-wrapper">
          <div className="projects-carousel">
            {projectsData.map((project, index) => {
              const total = projectsData.length;
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
          {projectsData.map((project, index) => (
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
      <ProjectDetailPopup project={selectedProject} onClose={closePopup} />
    </section>
  );
};

export default Projects;