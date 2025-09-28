import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => {
      const newMenuState = !prev;
      document.body.classList.toggle('no-scroll', newMenuState);
      return newMenuState;
    });
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav>
          <div className="logo">
            <a href="#home" onClick={closeMenu}>
              <span className="logo-text">Portfolio</span>
              <span className="logo-dot"></span>
            </a>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="active" onClick={closeMenu}><i className="fas fa-home"></i> Home</a></li>
            <li><a href="#about" onClick={closeMenu}><i className="fas fa-user"></i> About</a></li>
            <li><a href="#education" onClick={closeMenu}><i className="fas fa-university"></i> Education</a></li>
            <li><a href="#skills" onClick={closeMenu}><i className="fas fa-code"></i> Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}><i className="fas fa-project-diagram"></i> Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}><i className="fas fa-envelope"></i> Contact</a></li>
            <li className="nav-cta"><a href="#" download className="resume-btn"><i className="fas fa-download"></i> Resume</a></li>
          </ul>
          <ThemeToggle />
          <button className={`burger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
            <div></div>
            <div></div>
            <div></div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;