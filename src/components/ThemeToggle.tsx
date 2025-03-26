import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleClick = () => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <button
      onClick={handleClick}
      className={`theme-toggle btn px-4 py-2 rounded-pill d-flex align-items-center gap-2 text-white`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className={isAnimating ? 'theme-icon' : ''}>
        {theme === 'light' ? (
          <Moon size={24} />
        ) : (
          <Sun size={24} />
        )}
      </span>
      <span style={{ minWidth: '100px' }}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}