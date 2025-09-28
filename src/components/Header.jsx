import React, { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = 'home';
      Object.entries(sectionsRef.current).forEach(([id, element]) => {
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          currentSection = id;
        }
      });
      setActiveSection(currentSection);
    };

    const sectionElements = document.querySelectorAll('section[id]');
    sectionElements.forEach(sec => {
      sectionsRef.current[sec.id] = sec;
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', icon: 'fa-home', text: 'Home' },
    { id: 'about', icon: 'fa-user', text: 'About' },
    { id: 'education', icon: 'fa-university', text: 'Education' },
    { id: 'skills', icon: 'fa-code', text: 'Skills' },
    { id: 'projects', icon: 'fa-project-diagram', text: 'Projects' },
    { id: 'contact', icon: 'fa-envelope', text: 'Contact' },
  ];

  return (
    <>
      {/* Top-left corner */}
      <div className="nav-corner nav-left glass-card">
        <div className="logo">
          <a href="#home">
            <span className="logo-text">Portfolio</span>
            <span className="logo-dot"></span>
          </a>
        </div>
      </div>

      {/* Top-right corner */}
      <div className="nav-corner nav-right glass-card">
        <a href="#" download className="btn primary-btn resume-btn">
          <i className="fas fa-download"></i>
          <span className="resume-text">Resume</span>
        </a>
        <ThemeToggle />
      </div>

      {/* Bottom floating nav */}
      <ul className={`floating-navlinks glass-card ${isMenuOpen ? 'active' : ''}`}>
        {navLinks.map(link => (
          <li key={link.id}>
            <a 
              href={`#${link.id}`} 
              className={activeSection === link.id ? 'active' : ''} 
              onClick={closeMenu}
              title={link.text}
            >
              <i className={`fas ${link.icon}`}></i>
              <span className="link-text">{link.text}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile menu toggle */}
      <button className={`burger-menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
        <i className="fas fa-bars"></i>
        <i className="fas fa-times"></i>
      </button>
    </>
  );
};

export default Header;