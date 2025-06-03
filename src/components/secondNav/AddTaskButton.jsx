import React from 'react';
const AddTaskButton = ({ disabled }) => (
  <button
    className={`bg-[#635FC6] text-white px-4 py-2 rounded-full hover:bg-[#635FC6]/90 text-sm font-medium ${
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`}
    disabled={disabled}
  >
    + Add New Task
  </button>
);

export default AddTaskButton;
