import React from 'react';
import FadingText from './FadingText';
import Beams from './Beams';

const Hero = ({ personalInfo }) => {
  const roles = personalInfo?.taglines || ['Loading...'];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <div className="img-container">
                <img src={personalInfo?.profile_image_url || "/images/profile.jpg"} alt="Profile Picture" />
              </div>
            </div>
          </div>
          <div className="hero-text">
            <h1 className="animate-text"><span className="highlight">{personalInfo?.name || "Your Name"}</span></h1>
            <h2 className="animate-text delay-1">
              <FadingText lines={roles} duration={3000} />
            </h2>
            <div className="cta-buttons animate-text delay-3">
              <a href="#projects" className="btn primary-btn">View My Work</a>
              <a href="#contact" className="btn secondary-btn">Contact Me <i className="fas fa-arrow-right"></i></a>
            </div>
            {personalInfo && (
              <div className="hero-socials animate-text delay-4">
                <a href={personalInfo.github_url} target="_blank" rel="noopener noreferrer" className="social-icon github-icon" title="GitHub Profile"><i className="fab fa-github"></i></a>
                <a href={personalInfo.linkedin_url} target="_blank" rel="noopener noreferrer" className="social-icon linkedin-icon" title="LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                <a href={personalInfo.instagram_url} target="_blank" rel="noopener noreferrer" className="social-icon instagram-icon" title="Instagram Profile"><i className="fab fa-instagram"></i></a>
                <a href={`mailto:${personalInfo.email}`} target="_blank" rel="noopener noreferrer" className="social-icon gmail-icon" title="Send an Email"><i className="fas fa-envelope"></i></a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#about"><i className="fas fa-chevron-down"></i></a>
      </div>
      <div className="hero-background">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor={'#94a3b8'}
          speed={0.5}
          noiseIntensity={1.5}
          scale={0.2}
          rotation={-30}
        />
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>
    </section>
  );
};

export default Hero;