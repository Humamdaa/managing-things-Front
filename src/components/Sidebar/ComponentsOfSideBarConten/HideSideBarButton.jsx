import { HiEyeOff } from 'react-icons/hi';
import React from 'react';

const HideSidebarButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center gap-2 w-full text-sm font-medium text-gray-500 hover:text-black transition"
  >
    <HiEyeOff className="w-5 h-5" />
    Hide Sidebar
  </button>
);

export default HideSidebarButton;