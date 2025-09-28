import React, { useState } from 'react';

const CertificatePopup = ({ src, title, onClose }) => {
  if (!src) return null;

  return (
    <div className="certificate-popup active" onClick={onClose}>
      <div className="certificate-popup-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-popup">&times;</button>
        <img src={src} alt={title} />
        <h3>{title}</h3>
      </div>
    </div>
  );
};

const CertificationCard = ({ title, issuer, date, imageUrl, onImageClick }) => {
  return (
    <div className="certification-card glass-card">
      <div className="certification-thumbnail" onClick={() => onImageClick(imageUrl, title)}>
        <img src={imageUrl} alt={title} />
        <div className="thumbnail-overlay">
          <i className="fas fa-eye"></i>
        </div>
      </div>
      <div className="certification-content">
        <h3>{title}</h3>
        <div className="certification-meta">
          <span><i className="fas fa-award"></i> {issuer}</span>
          <span><i className="far fa-calendar-alt"></i> {date}</span>
        </div>
        <button onClick={() => onImageClick(imageUrl, title)} className="btn secondary-btn">
          View Certificate
        </button>
      </div>
    </div>
  );
};

const Certifications = () => {
  const [popupCert, setPopupCert] = useState({ src: null, title: null });

  const handleImageClick = (src, title) => {
    setPopupCert({ src, title });
  };

  const closePopup = () => {
    setPopupCert({ src: null, title: null });
  };

  const certificationsData = [
    {
      title: "Beginner to Master Python Programming",
      issuer: "Udemy",
      date: "April 2025",
      imageUrl: "/images/Udemy.png",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "In Progress",
      imageUrl: "/images/webdev.png",
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">My Certifications</h2>
        <div className="certifications-grid">
          {certificationsData.map((cert, index) => (
            <CertificationCard 
              key={index} 
              {...cert} 
              onImageClick={handleImageClick} 
            />
          ))}
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