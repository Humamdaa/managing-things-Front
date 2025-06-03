// export default Navbar;
import { useBoard } from '../contexts/BoardContext';
import React from 'react';

const SecondNav = () => {
  const { selectedBoard } = useBoard();

  return (
    <div className="h-16 px-6 flex items-center justify-between border-b bg-white">
      {/* Left side: Kanban text */}
      <h1 className="text-lg font-bold	">{selectedBoard || 'Select a board'}</h1>

      {/* Right side: buttons */}
      <div className="flex items-center gap-4">
        <button className="bg-[#635FC6] text-[#FFFFFF] px-4 py-2 rounded-full hover:bg-[#E4EBFA] text-sm font-medium">
          + Add New Task
        </button>
        <button className="text-gray-600 hover:text-gray-800">⋮</button>
      </div>
    </div>
  );
};

export default SecondNav;
