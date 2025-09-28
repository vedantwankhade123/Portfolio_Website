import React from 'react';

const About = ({ personalInfo, onResumeClick }) => {
  if (!personalInfo) {
    return <section id="about" className="about"><div className="container"><h2 className="section-title">Loading...</h2></div></section>;
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <h3>A Passionate Developer Building Digital Experiences</h3>
              <p dangerouslySetInnerHTML={{ __html: personalInfo.about_p1 }}></p>
              <p dangerouslySetInnerHTML={{ __html: personalInfo.about_p2 }}></p>
            </div>
            <div className="about-details">
              <ul>
                <li>
                  <i className="fas fa-graduation-cap"></i>
                  <div>
                    <strong>Degree</strong>
                    <span>{personalInfo.degree}</span>
                  </div>
                </li>
                <li>
                  <i className="fas fa-code"></i>
                  <div>
                    <strong>Role</strong>
                    <span>{personalInfo.role}</span>
                  </div>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Location</strong>
                    <span>{personalInfo.location}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="about-footer">
            <a href="#!" onClick={onResumeClick} className="btn primary-btn">
              Download Resume <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;