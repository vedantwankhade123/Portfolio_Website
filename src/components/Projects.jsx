import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="video-container">
              <video autoPlay loop muted playsInline>
                <source src="/videos/cleanCity.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="project-content">
              <h3>CleanCity - Waste Management</h3>
              <p>A web application for reporting and managing waste collection in urban areas. Features include real-time tracking, route optimization, and analytics dashboard.</p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Mapbox</span>
              </div>
              <div className="project-links">
                <a href="#" className="btn small-btn"><i className="fas fa-link"></i> Live Demo</a>
                <a href="#" className="btn small-btn"><i className="fab fa-github"></i> GitHub</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="video-container">
              <video autoPlay loop muted playsInline>
                <source src="/videos/Coming.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="project-content">
              <h3>Face Recognition Based Attendance System</h3>
              <p>An automated attendance system using facial recognition technology. Includes features like real-time face detection, attendance reports, and admin dashboard.</p>
              <div className="project-tech">
                <span>Python</span>
                <span>OpenCV</span>
                <span>Flask</span>
                <span>SQLite</span>
              </div>
              <div className="project-links">
                <a href="#" className="btn small-btn"><i className="fas fa-link"></i> Live Demo</a>
                <a href="#" className="btn small-btn"><i className="fab fa-github"></i> GitHub</a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="video-container">
              <video autoPlay loop muted playsInline>
                <source src="/videos/Coming.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="project-content">
              <h3>Task Management App</h3>
              <p>A collaborative task management application with features like task assignment, progress tracking, and team collaboration tools.</p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
              </div>
              <div className="project-links">
                <a href="#" className="btn small-btn"><i className="fas fa-link"></i> Live Demo</a>
                <a href="#" className="btn small-btn"><i className="fab fa-github"></i> GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;