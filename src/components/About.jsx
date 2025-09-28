import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="img-container">
              <img src="/images/profile.jpg" alt="Profile Picture" />
            </div>
          </div>
          <div className="about-text">
            <p>I am a passionate <strong>Full Stack Developer</strong> with a strong foundation in <strong>Python programming</strong> and <strong>Web Development</strong>. Currently a <strong>B.TEch CSE</strong> student at <strong>G.H.Raisoni University, Amravati</strong>, I've completed comprehensive courses in full-stack development and built several real-world projects.</p>
            <p>I enjoy solving complex problems and creating clean, efficient, and user-friendly applications. My goal is to leverage technology to create meaningful solutions that make a positive impact.</p>
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