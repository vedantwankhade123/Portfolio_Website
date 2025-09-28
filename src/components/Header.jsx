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
    setIsMenuOpen(prev => {
      document.body.classList.toggle('no-scroll', !prev);
      return !prev;
    });
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
  };

  const navLinks = [
    { id: 'home', icon: 'fas fa-home', text: 'Home' },
    { id: 'about', icon: 'fas fa-user', text: 'About' },
    { id: 'education', icon: 'fas fa-graduation-cap', text: 'Education' },
    { id: 'skills', icon: 'fas fa-code', text: 'Skills' },
    { id: 'projects', icon: 'fas fa-briefcase', text: 'Projects' },
    { id: 'contact', icon: 'fas fa-envelope', text: 'Contact' },
  ];

  return (
    <>
      <header className="top-bar">
        <div className="container">
          <div className="logo">
            <a href="#home" onClick={closeMenu}>
              <span className="logo-text">Portfolio</span>
              <span className="logo-dot"></span>
            </a>
          </div>
          <div className="nav-right-group">
            <a href="#" download className="btn primary-btn resume-btn">
              <i className="fas fa-download"></i>
              <span className="resume-text">Resume</span>
            </a>
            <ThemeToggle />
            <button className={`burger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
              <div></div>
              <div></div>
              <div></div>
            </button>
          </div>
        </div>
      </header>

      <nav className={`floating-nav glass-card ${isMenuOpen ? 'mobile-menu-active' : ''}`}>
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`} 
                className={activeSection === link.id ? 'active' : ''} 
                onClick={closeMenu}
              >
                <i className={link.icon}></i>
                <span className="link-text">{link.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;