import { RiLayout2Line } from 'react-icons/ri';
import React from 'react';

const BoardItem = ({ board, isSelected, onClick }) => {
  const baseClasses = "flex items-center px-6 py-3 text-sm font-medium rounded-r-full cursor-pointer transition-colors";
  const selectedClasses = "bg-[#635FC7] text-white";
  const normalClasses = "text-[#828FA3] hover:bg-gray-100";

  return (
    <li
      onClick={onClick}
      className={`${baseClasses} ${isSelected ? selectedClasses : normalClasses}`}
    >
      <RiLayout2Line className="w-4 h-4 mr-3" />
      {board}
    </li>
  );
};

export default BoardItem;