import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>Vedant Wankhade</h3>
            <p>A passionate Full Stack Developer creating modern and responsive web applications.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-links">
              <a href="https://github.com/vedantwankhade123" target="_blank" rel="noopener noreferrer" className="social-icon github-icon" title="GitHub Profile"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/vedant-wankhade123" target="_blank" rel="noopener noreferrer" className="social-icon linkedin-icon" title="LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://instagram.com/_vedantkwankhade_" target="_blank" rel="noopener noreferrer" className="social-icon instagram-icon" title="Instagram Profile"><i className="fab fa-instagram"></i></a>
              <a href="mailto:vedantwankhade47@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon gmail-icon" title="Send an Email"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vedant Wankhade. All Rights Reserved.</p>
          <div className="back-to-top">
            <a href="#home" title="Back to Top"><i className="fas fa-arrow-up"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;