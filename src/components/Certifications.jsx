import React, { useState, useEffect } from 'react';
import CertificatePopup from './CertificatePopup';

const CertificationCard = ({ title, issuer, date, imageUrl, onImageClick }) => {
  return (
    <div className="certification-card">
      <img src={imageUrl} alt={title} className="certification-image" />
      <div className="certification-overlay">
        <div className="certification-content">
          <h3>{title}</h3>
          <div className="certification-meta">
            <span><i className="fas fa-award"></i> {issuer}</span>
            <span><i className="far fa-calendar-alt"></i> {date}</span>
          </div>
          <button onClick={() => onImageClick(imageUrl, title)} className="btn primary-btn">
            View Certificate <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const Certifications = ({ onViewAllClick, certifications = [] }) => {
  const [popupCert, setPopupCert] = useState({ src: null, title: null });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleImageClick = (src, title) => {
    setPopupCert({ src, title });
  };

  const closePopup = () => {
    setPopupCert({ src: null, title: null });
  };

  useEffect(() => {
    if (certifications.length === 0) return;
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex(prevIndex => (prevIndex + 1) % certifications.length);
      }
    }, 3000); // Change certificate every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused, certifications.length]);

  if (!certifications.length) {
    return (
      <section id="certifications" className="certifications">
        <div className="container">
          <h2 className="section-title">Loading Certifications...</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">My Certifications</h2>
          <a href="#!" onClick={onViewAllClick} className="view-all-link">
            View All <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div 
          className="certifications-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="certifications-carousel">
            {certifications.map((cert, index) => {
              const totalCerts = certifications.length;
              let className = 'certification-card-container';
              if (index === currentIndex) {
                className += ' current-cert';
              } else if (index === (currentIndex - 1 + totalCerts) % totalCerts) {
                className += ' prev-cert';
              } else if (index === (currentIndex + 1) % totalCerts) {
                className += ' next-cert';
              } else {
                className += ' hidden-cert';
              }

              return (
                <div className={className} key={index}>
                  <CertificationCard {...cert} onImageClick={handleImageClick} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CertificatePopup 
        src={popupCert.src} 
        title={popupCert.title} 
        onClose={closePopup} 
      />
    </section>
  );
};

export default Certifications;