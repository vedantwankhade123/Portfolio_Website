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
    <div className="theme-toggle">
      <input 
        type="checkbox" 
        id="checkbox" 
        checked={!isDarkMode} 
        onChange={handleThemeChange} 
      />
      <label htmlFor="checkbox" className="toggle-label">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <span className="toggle-ball"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;