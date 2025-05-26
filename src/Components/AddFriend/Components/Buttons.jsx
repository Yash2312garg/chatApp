import React from 'react';
import './DarkThemeButton.css';

const ThemedButton = ({ 
  children, 
  size = 'md', 
  onClick, 
  disabled = false,
  variant = 'primary',
  className = '',
  fullWidth = false,
  type = 'button'
}) => {
  const buttonClasses = [
    'btn',
    `btn-size-${size}`,
    `btn-variant-${variant}`,
    fullWidth ? 'btn-full-width' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>    
  );
};

export default ThemedButton;
