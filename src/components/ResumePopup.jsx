import React from 'react';

const ResumePopup = ({ isOpen, onClose, personalInfo }) => {
  if (!isOpen || !personalInfo) return null;

  return (
    <div className="resume-popup active" onClick={onClose}>
      <div className="resume-popup-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-popup">&times;</button>
        <h2>Resume Preview</h2>
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