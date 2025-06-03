import React, { useState } from 'react';
import { useBoard } from '../contexts/BoardContext';

const AddBoardModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [columns, setColumns] = useState(['Todo', 'Doing']);
  const { addBoard } = useBoard();

  const handleAddColumn = () => {
    setColumns([...columns, '']);
  };

  const handleColumnChange = (index, value) => {
    const newColumns = [...columns];
    newColumns[index] = value;
    setColumns(newColumns);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBoard({ name, columns });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-bold mb-6">Add New Board</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full border rounded-md p-2 text-sm"
              placeholder="e.g. Web Design"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Columns</label>
            {columns.map((col, index) => (
              <div key={index} className="flex items-center mb-3">
                <input
                  type="text"
                  className="flex-1 border rounded-md p-2 text-sm mr-2"
                  value={col}
                  onChange={(e) => handleColumnChange(index, e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() =>
                    setColumns(columns.filter((_, i) => i !== index))
                  }
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddColumn}
              className="w-full bg-[#E4EBFA] text-[#635FC7] rounded-full py-2 text-sm font-medium mt-2 hover:bg-[#E4EBFA]/80"
            >
              + Add New Column
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#635FC7] text-white rounded-full py-2 text-sm font-medium hover:bg-[#635FC7]/90"
          >
            Create New Board
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBoardModal;
