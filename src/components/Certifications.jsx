import React, { useState } from 'react';

const CertificationCard = ({ title, issuer, date, imageUrl, altText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleView = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`certification-card ${isOpen ? 'active' : ''}`}>
      <div className="certification-header" onClick={toggleView} style={{ cursor: 'pointer' }}>
        <div className="certification-info">
          <h3>{title}</h3>
          <div className="certification-meta">
            <span className="issuer"><i className="fas fa-award"></i> {issuer}</span>
            <span className="date"><i className="far fa-calendar-alt"></i> {date}</span>
          </div>
        </div>
        <button className="btn small-btn toggle-certificate">
          <span className="view-text">View</span>
          <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </button>
      </div>
      <div className={`certificate-view ${isOpen ? 'active' : ''}`}>
        {isOpen && <img src={imageUrl} alt={altText} className="certificate-image" />}
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">My Certifications</h2>
        <div className="certifications-grid">
          <CertificationCard
            title="Beginner to Master Python Programming"
            issuer="Udemy"
            date="April 2025"
            imageUrl="/images/Udemy.png"
            altText="Python Programming Certificate"
          />
          <CertificationCard
            title="Full Stack Web Development"
            issuer="Udemy"
            date="In Progress"
            imageUrl="/images/webdev.png"
            altText="Full Stack Web Development Certificate"
          />
        </div>
      </div>
    </section>
  );
};

export default Certifications;