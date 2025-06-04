import { BsSun, BsMoon } from 'react-icons/bs';
import React from 'react';

const ThemeToggle = () => (
  <div className="bg-gray-100 rounded-md flex justify-center items-center py-2">
    <BsSun className="text-gray-500 mr-2" />
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#635FC7] peer-focus:ring-2 transition-all"></div>
      <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></span>
    </label>
    <BsMoon className="text-gray-500 ml-2" />
  </div>
);

export default ThemeToggle;