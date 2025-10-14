import React, { useState, useEffect, useRef } from 'react';

const Header = ({ onResumeClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionsRef = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      // Active section logic
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = 'home';
      Object.entries(sectionsRef.current).forEach(([id, element]) => {
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          currentSection = id;
        }
      });
      setActiveSection(currentSection);

      // Scrolled header logic
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const sectionElements = document.querySelectorAll('section[id]');
    sectionElements.forEach(sec => {
      sectionsRef.current[sec.id] = sec;
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount to set initial state
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
    { id: 'home', text: 'Home', icon: 'fas fa-home' },
    { id: 'about', text: 'About', icon: 'fas fa-user' },
    { id: 'education', text: 'Education', icon: 'fas fa-graduation-cap' },
    { id: 'skills', text: 'Skills', icon: 'fas fa-code' },
    { id: 'projects', text: 'Projects', icon: 'fas fa-briefcase' },
    { id: 'contact', text: 'Contact', icon: 'fas fa-envelope' },
  ];

  return (
    <header className={`top-bar ${isMenuOpen ? 'menu-open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="#home" onClick={closeMenu}>
            <div className="logo-text">
              <span className="logo-v v-one">V</span>
              <span className="logo-v v-two">V</span>
              <span className="logo-v v-three">V</span>
            </div>
          </a>
        </div>

        <nav className="main-nav">
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`} 
                  className={activeSection === link.id ? 'active' : ''} 
                  onClick={closeMenu}
                  title={link.text}
                >
                  <i className={`nav-link-icon ${link.icon}`}></i>
                  <span className="nav-link-text">{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#!" onClick={onResumeClick} className="btn primary-btn">
            <span>Resume</span>
          </a>
        </div>

        <button className={`burger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </header>
  );
};

export default Header;