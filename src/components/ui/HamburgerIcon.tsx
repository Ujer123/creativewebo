import React from 'react';

interface HamburgerIconProps {
  isOpen?: boolean;
  onClick?: () => void;
  className?: string;
}

export const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  isOpen = false,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative w-8 h-8 flex items-center justify-center ${className}`}
      aria-label="Toggle menu"
    >
      <div className="w-6 h-5 flex flex-col justify-between">
        <span
          className={`block h-0.5 w-full bg-white transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        
        {/* Middle line - shorter by default, expands on hover */}
        <span
          className={`block h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'opacity-0 w-full' : 'w-4 group-hover:w-full'
          }`}
        />
        
        {/* Bottom line */}
        <span
          className={`block h-0.5 w-full bg-white transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </div>
    </button>
  );
};
