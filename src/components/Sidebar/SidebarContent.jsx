import { RiLayout2Line } from 'react-icons/ri';
import { BsSun, BsMoon } from 'react-icons/bs';
import { HiEyeOff } from 'react-icons/hi';
import { useBoard } from '../../contexts/BoardContext';
import React from 'react';

const SidebarContent = ({ onClose }) => {
  const { selectedBoard, setSelectedBoard } = useBoard();
  const boards = ['Platform Launch', 'Marketing Plan', 'Roadmap'];

  // handle board selection
  const handleSelectBoard = (board) => {
    setSelectedBoard(board); // This will update everywhere
  };

  return (
    <div className="flex flex-col h-full">
      {/* Top Scrollable Section */}
      <div className="flex-1 overflow-y-auto py-6">
        <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 px-6">
          ALL BOARDS ({boards.length})
        </h2>

        <ul className="space-y-1">
          {boards.map((board) => (
            <li
              key={board}
              onClick={() => handleSelectBoard(board)}
              className={`flex items-center px-6 py-3 text-sm font-medium rounded-r-full cursor-pointer transition-colors
                ${
                  selectedBoard === board
                    ? 'bg-[#635FC7] text-white'
                    : 'text-[#828FA3] hover:bg-gray-100'
                }`}
            >
              <RiLayout2Line className="w-4 h-4 mr-3" />
              {board}
            </li>
          ))}
        </ul>

        <button className="flex items-center px-6 py-3 text-sm font-medium text-[#635FC7] rounded-r-full hover:bg-gray-100 cursor-pointer mt-2">
          <RiLayout2Line className="w-4 h-4 mr-3" />+ Create New Board
        </button>
      </div>

      {/* Bottom Fixed Section */}
      <div className="px-6 py-4 space-y-4 border-t border-gray-100">
        <div className="bg-gray-100 rounded-md flex justify-center items-center py-2">
          <BsSun className="text-gray-500 mr-2" />
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#635FC7] peer-focus:ring-2 transition-all"></div>
            <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></span>
          </label>
          <BsMoon className="text-gray-500 ml-2" />
        </div>

        <button
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full text-sm font-medium text-gray-500 hover:text-black transition"
        >
          <HiEyeOff className="w-5 h-5" />
          Hide Sidebar
        </button>
      </div>
    </div>
  );
};

export default SidebarContent;
