import { useBoard } from '../../contexts/BoardContext';
import React from 'react';

const DropdownMenu = ({ show, onToggle, onClose }) => {
  const { selectedBoard, setSelectedBoard } = useBoard();

  const handleDeleteBoard = () => {
    if (window.confirm(`Delete "${selectedBoard}" board?`)) {
      setSelectedBoard(null);
      localStorage.removeItem('selectedBoard');
    }
    onClose();
  };

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="text-gray-600 hover:text-gray-800 p-1"
        aria-label="Board options"
      >
        ⋮
      </button>

      {show && (
        <>
          <div className="absolute right-0 top-10 bg-white shadow-lg rounded-md w-36 z-50 border border-gray-100">
            <button
              onClick={onClose}
              className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
            >
              Edit Board
            </button>
            <button
              onClick={handleDeleteBoard}
              className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-red-500"
            >
              Delete Board
            </button>
          </div>
          <div className="fixed inset-0 z-40" onClick={onClose} />
        </>
      )}
    </div>
  );
};

export default DropdownMenu;
