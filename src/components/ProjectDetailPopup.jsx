import React from 'react';

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

export default ProjectDetailPopup;