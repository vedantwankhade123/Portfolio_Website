import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // Default to dark mode
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    // Set theme based on saved preference or default to dark
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const handleThemeChange = () => {
    setIsDarkMode(prevMode => {
      const newModeIsDark = !prevMode;
      if (newModeIsDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
      return newModeIsDark;
    });
  };

  return (
    <button 
      onClick={handleThemeChange} 
      className="theme-toggle-btn" 
      aria-label="Toggle theme"
    >
      <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
    </button>
  );
};

export default ThemeToggle;