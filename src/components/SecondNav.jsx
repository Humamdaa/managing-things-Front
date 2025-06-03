import React from 'react';
import { useState } from 'react';
import BoardTitle from './secondNav/BoardTitle';
import AddTaskButton from './secondNav/AddTaskButton';
import DropdownMenu from './secondNav/DropdownMenu';
import { useBoard } from '../contexts/BoardContext';

const SecondNav = () => {
  const { selectedBoard } = useBoard();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="h-16 px-6 flex items-center justify-between border-b bg-white relative">
      <BoardTitle selectedBoard={selectedBoard} />

      <div className="flex items-center gap-4">
        <AddTaskButton disabled={!selectedBoard} />

        {selectedBoard && (
          <DropdownMenu
            show={showDropdown}
            onToggle={() => setShowDropdown(!showDropdown)}
            onClose={() => setShowDropdown(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default SecondNav;
