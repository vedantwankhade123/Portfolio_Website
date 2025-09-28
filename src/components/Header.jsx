import React, { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = 'home';
      Object.entries(sectionsRef.current).forEach(([id, element]) => {
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          currentSection = id;
        }
      });
      setActiveSection(currentSection);
    };

    // Populate refs
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
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'education', text: 'Education' },
    { id: 'skills', text: 'Skills' },
    { id: 'projects', text: 'Projects' },
    { id: 'contact', text: 'Contact' },
  ];

  return (
    <header className={`glass-card ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav>
          <div className="logo">
            <a href="#home" onClick={closeMenu}>
              <span className="logo-text">Portfolio</span>
              <span className="logo-dot"></span>
            </a>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map(link => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`} 
                  className={activeSection === link.id ? 'active' : ''} 
                  onClick={closeMenu}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;