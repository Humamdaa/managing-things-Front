import React from 'react';
import { HiEye } from 'react-icons/hi'; // Correct icon for "show"

const ShowSidebarButton = ({ onClick }) => {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={onClick}
        className="bg-[#635FC7] p-2 rounded-full shadow-lg hover:opacity-90 transition"
      >
        <HiEye className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default ShowSidebarButton;
