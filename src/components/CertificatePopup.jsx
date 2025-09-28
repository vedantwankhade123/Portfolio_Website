import React from 'react';

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

export default CertificatePopup;