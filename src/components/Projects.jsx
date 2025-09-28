import React, { useState } from 'react';

const VideoPopup = ({ src, title, onClose }) => {
  if (!src) return null;

  return (
    <div className="video-popup active" onClick={onClose}>
      <div className="video-popup-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-popup">&times;</button>
        <video src={src} controls autoPlay playsInline loop muted />
        <h3>{title}</h3>
      </div>
    </div>
  );
};

const ProjectCard = ({ videoSrc, title, description, tech, onVideoClick }) => {
  return (
    <div className="project-card glass-card">
      <div className="video-container" onClick={() => onVideoClick(videoSrc, title)}>
        <video autoPlay loop muted playsInline key={videoSrc}>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tech">
          {tech.map(t => <span key={t}>{t}</span>)}
        </div>
        <div className="project-links">
          <a href="#" className="btn secondary-btn"><i className="fas fa-link"></i> Live Demo</a>
          <a href="#" className="btn secondary-btn"><i className="fab fa-github"></i> GitHub</a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [popupVideo, setPopupVideo] = useState({ src: null, title: null });

  const handleVideoClick = (src, title) => {
    setPopupVideo({ src, title });
  };

  const closePopup = () => {
    setPopupVideo({ src: null, title: null });
  };

  const projectsData = [
    {
      videoSrc: "/videos/cleanCity.mp4",
      title: "CleanCity - Waste Management",
      description: "A web application for reporting and managing waste collection in urban areas. Features include real-time tracking, route optimization, and analytics dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Mapbox"]
    },
    {
      videoSrc: "/videos/Coming.mp4",
      title: "Face Recognition Attendance",
      description: "An automated attendance system using facial recognition. Includes real-time detection, attendance reports, and an admin dashboard.",
      tech: ["Python", "OpenCV", "Flask", "SQLite"]
    },
    {
      videoSrc: "/videos/Coming.mp4",
      title: "Task Management App",
      description: "A collaborative task management application with features like task assignment, progress tracking, and team collaboration tools.",
      tech: ["React", "Node.js", "Express", "MongoDB"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} onVideoClick={handleVideoClick} />
          ))}
        </div>
      </div>
      <VideoPopup src={popupVideo.src} title={popupVideo.title} onClose={closePopup} />
    </section>
  );
};

export default Projects;