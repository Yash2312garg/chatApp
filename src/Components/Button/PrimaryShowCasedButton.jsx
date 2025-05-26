import React from 'react';
import { PrimaryButton } from './button-components';

// Icon Button - Button with icon before or after text
export const PrimaryIconButton = ({ 
  children, 
  icon, 
  iconPosition = 'left',
  ...props 
}) => {
  return (
    <PrimaryButton 
      className={`inline-flex items-center gap-2 ${props.className || ''}`}
      {...props}
    >
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </PrimaryButton>
  );
};

// Circular Icon Button without text
export const PrimaryCircleIconButton = ({ 
  icon,
  size = 'md', 
  ...props 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  return (
    <PrimaryButton 
      className={`p-0 rounded-full flex items-center justify-center ${sizeClasses[size]} ${props.className || ''}`}
      {...props}
    >
      {icon}
    </PrimaryButton>
  );
};

// Large Call-to-Action Button
export const PrimaryCTAButton = ({ children, ...props }) => {
  return (
    <PrimaryButton 
      className={`px-8 py-3 text-lg font-bold shadow-md hover:shadow-lg ${props.className || ''}`}
      {...props}
    >
      {children}
    </PrimaryButton>
  );
};

// Small Compact Button
export const PrimaryCompactButton = ({ children, ...props }) => {
  return (
    <PrimaryButton 
      className={`px-3 py-1 text-sm ${props.className || ''}`}
      {...props}
    >
      {children}
    </PrimaryButton>
  );
};

// Pill-shaped Button
export const PrimaryPillButton = ({ children, ...props }) => {
  return (
    <PrimaryButton 
      className={`rounded-full ${props.className || ''}`}
      {...props}
    >
      {children}
    </PrimaryButton>
  );
};

// Elevated Button with stronger shadow
export const PrimaryElevatedButton = ({ children, ...props }) => {
  return (
    <PrimaryButton 
      className={`shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all ${props.className || ''}`}
      {...props}
    >
      {children}
    </PrimaryButton>
  );
};

// Wide Full-width button
export const PrimaryFullWidthButton = ({ children, ...props }) => {
  return (
    <PrimaryButton 
      className={`w-full ${props.className || ''}`}
      {...props}
    >
      {children}
    </PrimaryButton>
  );
};

// Loading Button with loading state
export const PrimaryLoadingButton = ({ 
  children, 
  isLoading = false,
  loadingText = 'Loading...',
  ...props 
}) => {
  return (
    <PrimaryButton 
      disabled={isLoading}
      className={`relative ${props.className || ''}`}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {loadingText}
        </span>
      ) : children}
    </PrimaryButton>
  );
};

// Gradient Background Button
export const PrimaryGradientButton = ({ children, ...props }) => {
  return (
    <button 
      className={`px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 
        bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)] 
        hover:from-[var(--color-brand-primary-light)] hover:to-[var(--color-brand-secondary-light)] 
        text-[var(--color-btn-primary-text)]
        ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${props.className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Button with badge notification
export const PrimaryBadgeButton = ({ 
  children, 
  badgeCount = 0,
  maxCount = 99,
  ...props 
}) => {
  const displayCount = badgeCount > maxCount ? `${maxCount}+` : badgeCount;
  
  return (
    <div className="relative inline-block">
      <PrimaryButton {...props}>
        {children}
      </PrimaryButton>
      {badgeCount > 0 && (
        <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-notification-badge)] text-white min-w-[1.5rem] h-6">
          {displayCount}
        </span>
      )}
    </div>
  );
};