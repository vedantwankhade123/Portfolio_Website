import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a developer driven by a passion for building elegant and effective digital solutions. My journey into technology began with a fascination for Python, which quickly expanded into the dynamic world of full-stack web development. I thrive on the challenge of turning complex problems into clean, user-friendly applications that make a real difference.
            </p>
            <p>
              As a Computer Science student at <strong>G.H.Raisoni University, Amravati</strong>, I'm constantly merging academic knowledge with hands-on project experience. My goal is to not only write code but to craft experiences that are intuitive, efficient, and impactful.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <i className="fas fa-graduation-cap"></i>
                <span><strong>B.Tech in Computer Science and Engineering</strong></span>
              </div>
              <div className="detail-item">
                <i className="fas fa-code"></i>
                <span><strong>Full Stack Developer</strong></span>
              </div>
              <div className="detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <span><strong>Amravati, Maharashtra, India</strong></span>
              </div>
            </div>
            <a href="#" className="btn primary-btn" download>Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;