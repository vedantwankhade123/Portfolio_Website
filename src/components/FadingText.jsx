import React, { useState, useEffect } from 'react';

const FadingText = ({ lines, duration = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, duration);

    return () => clearTimeout(timeout);
  }, [currentIndex, lines.length, duration]);

  return (
    <div className="fading-text-container">
      {lines.map((line, index) => (
        <span
          key={index}
          className={`fading-text-item ${index === currentIndex ? 'visible' : ''}`}
        >
          {line}
        </span>
      ))}
    </div>
  );
};

export default FadingText;