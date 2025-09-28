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

const Certifications = () => {
  const [popupCert, setPopupCert] = useState({ src: null, title: null });
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handleImageClick = (src, title) => {
    setPopupCert({ src, title });
  };

  const closePopup = () => {
    setPopupCert({ src: null, title: null });
  };

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? certificationsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === certificationsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentCert = certificationsData[currentIndex];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">My Certifications</h2>
        <div className="certifications-carousel">
          <button onClick={goToPrev} className="carousel-arrow prev-arrow" aria-label="Previous certificate">
            <i className="fas fa-chevron-left"></i>
          </button>
          <CertificationCard 
            key={currentIndex} 
            {...currentCert} 
            onImageClick={handleImageClick} 
          />
          <button onClick={goToNext} className="carousel-arrow next-arrow" aria-label="Next certificate">
            <i className="fas fa-chevron-right"></i>
          </button>
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