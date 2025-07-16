// src/components/atoms/Avatar/index.tsx
import React from 'react';

interface AvatarProps {
  initial: string;
  size?: 'small' | 'medium' | 'large';
}

const Avatar: React.FC<AvatarProps> = ({ initial, size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-12 h-12 text-2xl',
    medium: 'w-16 h-16 text-4xl',
    large: 'w-20 h-20 text-5xl',
  };

  return (
    <div
      className={`bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg ${sizeClasses[size]}`}>
      {initial}
    </div>
  );
};

export default Avatar;
