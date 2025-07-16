// src/components/atoms/Icon/index.tsx
import React from 'react';

interface IconProps {
  className: string;
}

const Icon: React.FC<IconProps> = ({ className }) => {
  return <i className={className}></i>;
};

export default Icon;
