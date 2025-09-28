import React from 'react';

const ProjectDetailPopup = ({ project, projects, onClose, onSelectProject }) => {
  if (!project) return null;

  const techIconMap = {
    'React': 'fab fa-react',
    'Node.js': 'fab fa-node-js',
    'MongoDB': 'fas fa-database',
    'Mapbox': 'fas fa-map-marked-alt',
    'Python': 'fab fa-python',
    'OpenCV': 'fas fa-camera-retro',
    'Flask': 'fas fa-server',
    'SQLite': 'fas fa-database',
    'Express': 'fas fa-server',
  };

  const otherProjects = projects.filter(p => p.title !== project.title);

  return (
    <div className="project-popup active" onClick={onClose}>
      <div className="project-popup-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-popup">&times;</button>
        <div className="project-popup-layout">
          <div className="popup-main-content">
            <div className="popup-video-container">
              <video src={project.videoSrc} controls autoPlay playsInline loop muted key={project.videoSrc} />
            </div>
            <h3 className="popup-title">{project.title}</h3>
            <p className="popup-description">{project.description}</p>
          </div>
          <div className="popup-sidebar">
            <div className="sidebar-section">
              <h4>Actions</h4>
              <div className="popup-sidebar-actions">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn secondary-btn"><i className="fab fa-github"></i> GitHub</a>
                <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="btn secondary-btn"><i className="fas fa-link"></i> Live Demo</a>
                <a href={project.videoSrc} download={`${project.title.replace(/\s+/g, '_')}.mp4`} className="btn secondary-btn"><i className="fas fa-download"></i> Download Video</a>
              </div>
            </div>
            <div className="sidebar-section">
              <h4>Tech Stack</h4>
              <div className="popup-tech-stack">
                {project.tech.map(t => (
                  <div className="tech-item" key={t}>
                    <i className={techIconMap[t] || 'fas fa-code'}></i>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="sidebar-section">
              <h4>Other Projects</h4>
              <div className="other-projects-list">
                {otherProjects.map(p => (
                  <div className="other-project-item" key={p.title} onClick={() => onSelectProject(p)}>
                    <div className="other-project-video">
                      <video src={p.videoSrc} muted playsInline />
                    </div>
                    <div className="other-project-info">
                      <h5>{p.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPopup;