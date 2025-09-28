import React from 'react';

const ResumePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="resume-popup active" onClick={onClose}>
      <div className="resume-popup-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-popup">&times;</button>
        <h2>Resume Preview</h2>
        <div className="resume-preview">
          <img src="/resume.png" alt="Resume Preview" />
        </div>
        <div className="resume-actions">
          <a href="/resume.pdf" download="VedantWankhade_Resume.pdf" className="btn primary-btn">
            Download as PDF <i className="fas fa-file-pdf"></i>
          </a>
          <a href="/resume.png" download="VedantWankhade_Resume.png" className="btn secondary-btn">
            Download as Image <i className="fas fa-file-image"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePopup;