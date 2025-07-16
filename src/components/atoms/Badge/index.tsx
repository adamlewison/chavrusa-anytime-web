// src/components/atoms/Badge/index.tsx
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return (
    <span
      className={`absolute w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
