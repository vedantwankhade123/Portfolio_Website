import React from 'react';
import TypingEffect from './TypingEffect';

const Hero = () => {
  const roles = ["Full Stack Developer", "Python Programmer", "Digital Craftsman"];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <div className="img-container">
                <img src="/images/profile.jpg" alt="Profile Picture" />
              </div>
            </div>
          </div>
          <div className="hero-text">
            <h1 className="animate-text"><span className="highlight">Vedant Wankhade</span></h1>
            <h2 className="animate-text delay-1">
              <TypingEffect words={roles} typeSpeed={70} deleteSpeed={40} />
            </h2>
            <div className="cta-buttons animate-text delay-3">
              <a href="#projects" className="btn primary-btn">View My Work</a>
              <a href="#contact" className="btn secondary-btn">Contact Me <i className="fas fa-arrow-right"></i></a>
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
        <div className="shooting-stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>
    </section>
  );
};

export default Hero;