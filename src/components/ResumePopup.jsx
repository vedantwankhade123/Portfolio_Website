import React from 'react';

const ResumePopup = ({ isOpen, onClose, personalInfo }) => {
  if (!isOpen || !personalInfo) return null;

  return (
    <div className="resume-popup active" onClick={onClose}>
      <div className="resume-popup-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-popup">&times;</button>
        <div className="resume-header">
          <h2>Resume Preview</h2>
          <a 
            href={personalInfo.resume_png_url} 
            download="VedantWankhade_Resume.jpg" 
            className="btn primary-btn download-btn-desktop"
          >
            Download <i className="fas fa-download"></i>
          </a>
        </div>
        <div className="resume-preview">
          <img src={personalInfo.resume_png_url} alt="Resume Preview" />
        </div>
        <div className="resume-actions">
          <a href={personalInfo.resume_png_url} download="VedantWankhade_Resume.jpg" className="btn primary-btn">
            Download as Image <i className="fas fa-file-image"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePopup;