import React, { useState } from 'react';
import ProjectDetailPopup from './ProjectDetailPopup';

const ProjectCarouselCard = ({ project, onViewClick }) => {
  return (
    <div className="project-carousel-card">
      <video autoPlay loop muted playsInline key={project.videoSrc}>
        <source src={project.videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
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
          <button onClick={goToPrevious} className="carousel-arrow prev-arrow" aria-label="Previous project">
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="projects-carousel">
            <div 
              className="projects-carousel-inner"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div className="project-slide" key={index}>
                  <ProjectCarouselCard 
                    project={project} 
                    onViewClick={handleViewClick} 
                  />
                </div>
              ))}
            </div>
          </div>
          <button onClick={goToNext} className="carousel-arrow next-arrow" aria-label="Next project">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="project-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to project ${index + 1}`}
            ></button>
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