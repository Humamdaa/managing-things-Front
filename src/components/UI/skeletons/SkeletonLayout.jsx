// src/components/Layout/skeletons/LayoutSkeleton.jsx
import { Skeleton, SkeletonText } from '../../UI/skeletons';
import React from 'react';

const LayoutSkeleton = () => (
  <div className="h-screen flex flex-col bg-white">
    {/* Top section skeleton */}
    <div className="flex h-16 border-b border-gray-200">
      <div className="w-[300px] flex items-center border-r border-gray-200 box-border">
        <Skeleton className="h-8 w-40 ml-6" />
      </div>
      <div className="flex-1 flex items-center justify-between px-6">
        <Skeleton className="h-6 w-48" />
        <div className="flex gap-4">
          <Skeleton className="h-9 w-32 rounded-full" />
          <Skeleton className="h-6 w-6 rounded" />
        </div>
      </div>
    </div>

    {/* Bottom section skeleton */}
    <div className="flex flex-1 overflow-hidden">
      <div className="bg-[#F4F7FD] overflow-y-auto box-border p-4">
        <SkeletonText lines={5} height="h-8" />
      </div>
      <main className="flex-1 overflow-y-auto bg-[#F4F7FD] p-6">
        <div className="grid gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="p-4 border rounded-lg space-y-3">
              <Skeleton className="h-6 w-3/4" />
              <SkeletonText lines={3} />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </main>
    </div>
  </div>
);

export default LayoutSkeleton;
