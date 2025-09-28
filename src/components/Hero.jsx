import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <div className="img-container">
              <img src="/images/profile.jpg" alt="Profile Picture" />
            </div>
          </div>
          <div className="hero-text">
            <h1 className="animate-text">Hello, I'm <span className="highlight">Vedant Wankhade</span></h1>
            <h2 className="animate-text delay-1">Creative Full Stack Developer</h2>
            <p className="animate-text delay-2">I build dynamic and responsive web applications, turning ideas into elegant digital experiences.</p>
            <div className="cta-buttons animate-text delay-3">
              <a href="#projects" className="btn primary-btn">View My Work</a>
              <a href="#contact" className="btn secondary-btn">Contact Me</a>
            </div>
            <div className="hero-socials animate-text delay-4">
              <a href="https://github.com/vedantwankhade123" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub Profile"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/vedant-wankhade123" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://instagram.com/_vedantkwankhade_" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram Profile"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#about"><i className="fas fa-chevron-down"></i></a>
      </div>
      <div className="hero-background">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>
    </section>
  );
};

export default Hero;