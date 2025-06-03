import React from 'react';
export default function EmptyBoard({ onAddColumn }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
      <p className="text-[#828FA3] text-lg">
        This board is empty. Create a new column to get started.
      </p>
      <button
        onClick={onAddColumn}
        className="bg-[#635FC7] text-white py-2 px-4 rounded-full hover:bg-[#716fda] transition"
      >
        + Add New Column
      </button>
    </div>
  );
}
