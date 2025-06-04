import React from 'react';
const Skeleton = ({ className = '', ...props }) => (
  <div 
    className={`bg-gray-200 animate-pulse rounded ${className}`} 
    {...props}
  />
);

export default Skeleton;