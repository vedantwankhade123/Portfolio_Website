import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <h3>A Passionate Developer Building Digital Experiences</h3>
              <p>
                I'm a developer driven by a passion for building elegant and effective digital solutions. My journey into technology began with a fascination for Python, which quickly expanded into the dynamic world of full-stack web development. I thrive on the challenge of turning complex problems into clean, user-friendly applications.
              </p>
              <p>
                As a Computer Science student at <strong>G.H.Raisoni University, Amravati</strong>, I'm constantly merging academic knowledge with hands-on project experience to craft experiences that are intuitive, efficient, and impactful.
              </p>
            </div>
            <div className="about-details">
              <ul>
                <li>
                  <i className="fas fa-graduation-cap"></i>
                  <div>
                    <strong>Degree</strong>
                    <span>B.Tech in CSE</span>
                  </div>
                </li>
                <li>
                  <i className="fas fa-code"></i>
                  <div>
                    <strong>Role</strong>
                    <span>Full Stack Developer</span>
                  </div>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Location</strong>
                    <span>Amravati, India</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="about-footer">
            <a href="#" className="btn primary-btn" download>
              Download Resume <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;