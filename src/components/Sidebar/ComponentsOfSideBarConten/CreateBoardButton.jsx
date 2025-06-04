import { RiLayout2Line } from 'react-icons/ri';
import React from 'react';

const CreateBoardButton = ({ onClick }) => (
  <button 
    onClick={onClick}
    className="flex items-center px-6 py-3 text-sm font-medium text-[#635FC7] rounded-r-full hover:bg-gray-100 cursor-pointer mt-2"
  >
    <RiLayout2Line className="w-4 h-4 mr-3" />
    + Create New Board
  </button>
);

export default CreateBoardButton;