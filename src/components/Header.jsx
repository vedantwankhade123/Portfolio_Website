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
      Object.entries(sectionsRef.current).forEach(([id, element]) => {
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(id);
        }
      });
    };

    // Populate refs
    const sectionElements = document.querySelectorAll('section[id]');
    sectionElements.forEach(sec => {
      sectionsRef.current[sec.id] = sec;
    });

    window.addEventListener('scroll', handleScroll);
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
    { id: 'home', icon: 'fa-home', text: 'Home' },
    { id: 'about', icon: 'fa-user', text: 'About' },
    { id: 'education', icon: 'fa-university', text: 'Education' },
    { id: 'skills', icon: 'fa-code', text: 'Skills' },
    { id: 'projects', icon: 'fa-project-diagram', text: 'Projects' },
    { id: 'contact', icon: 'fa-envelope', text: 'Contact' },
  ];

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
            {navLinks.map(link => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`} 
                  className={activeSection === link.id ? 'active' : ''} 
                  onClick={closeMenu}
                >
                  <i className={`fas ${link.icon}`}></i> {link.text}
                </a>
              </li>
            ))}
            <li className="nav-cta"><a href="#" download className="resume-btn"><i className="fas fa-download"></i> Resume</a></li>
          </ul>
          <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
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