import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <a href="#home">
              <span className="logo-text">Portfolio</span>
              <span className="logo-dot"></span>
            </a>
          </div>
          <ul className="nav-links">
            <li><a href="#home" className="active"><i className="fas fa-home"></i> Home</a></li>
            <li><a href="#about"><i className="fas fa-user"></i> About</a></li>
            <li><a href="#education"><i className="fas fa-university"></i> Education</a></li>
            <li><a href="#skills"><i className="fas fa-code"></i> Skills</a></li>
            <li><a href="#projects"><i className="fas fa-project-diagram"></i> Projects</a></li>
            <li><a href="#contact"><i className="fas fa-envelope"></i> Contact</a></li>
            <li className="nav-cta"><a href="#" download className="resume-btn"><i className="fas fa-download"></i> Resume</a></li>
          </ul>
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;