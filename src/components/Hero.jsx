import React, { useState, useEffect } from 'react';
import TypingEffect from './TypingEffect';
import Beams from './Beams';

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Set initial theme state
    const isDark = document.body.classList.contains('dark-mode');
    setIsDarkMode(isDark);

    // Observe body class changes to update theme state
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          const newIsDark = document.body.classList.contains('dark-mode');
          setIsDarkMode(newIsDark);
        }
      });
    });

    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const simpleLines = [
    { tokens: [{ text: 'Full Stack Developer', className: 'role-text' }] },
    { tokens: [{ text: 'Python Programmer', className: 'role-text' }] },
    { tokens: [{ text: 'Digital Craftsman', className: 'role-text' }] },
  ];

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
              <TypingEffect lines={simpleLines} typeSpeed={100} deleteSpeed={60} delay={1500} />
            </h2>
            <div className="cta-buttons animate-text delay-3">
              <a href="#projects" className="btn primary-btn">View My Work</a>
              <a href="#contact" className="btn secondary-btn">Contact Me <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="hero-socials animate-text delay-4">
              <a href="https://github.com/vedantwankhade123" target="_blank" rel="noopener noreferrer" className="social-icon github-icon" title="GitHub Profile"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/vedant-wankhade123" target="_blank" rel="noopener noreferrer" className="social-icon linkedin-icon" title="LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://instagram.com/_vedantkwankhade_" target="_blank" rel="noopener noreferrer" className="social-icon instagram-icon" title="Instagram Profile"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#about"><i className="fas fa-chevron-down"></i></a>
      </div>
      <div className="hero-background">
        <Beams
          beamWidth={8}
          beamHeight={15}
          beamNumber={6}
          lightColor={isDarkMode ? '#94a3b8' : '#475569'}
          speed={0.5}
          noiseIntensity={1.0}
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