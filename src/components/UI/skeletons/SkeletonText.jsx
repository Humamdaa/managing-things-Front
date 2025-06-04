// src/components/UI/skeletons/SkeletonText.jsx
import Skeleton from './Skeleton';
import React from 'react';

const SkeletonText = ({ lines = 1, height = 'h-4' }) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton key={i} className={`w-full ${height}`} />
    ))}
  </div>
);

export default SkeletonText;
