import { useBoard } from '../../contexts/BoardContext';
import { useBoards } from '../../hooks/api/useBoard';
import BoardsList from './ComponentsOfSideBarConten/BoardList';
import CreateBoardButton from './ComponentsOfSideBarConten/CreateBoardButton';
import HideSidebarButton from './ComponentsOfSideBarConten/HideSideBarButton';
import ThemeToggle from './ComponentsOfSideBarConten/ThemeToggale';
import React from 'react';

const SidebarContent = ({ onClose }) => {
  const { selectedBoard, setSelectedBoard } = useBoard();
  // const boards = ['Platform Launch', 'Marketing Plan', 'Roadmap'];
  const { boards, isLoading, isError, error, refetch } = useBoards();

  // Loading state
  if (isLoading) {
    return <div>Loading boards...</div>;
  }

  // // Error state
  if (isError) {
    return (
      <div>
        Error loading boards: {error.message}
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  }

  console.log('boards: ', boards.data);
  const handleSelectBoard = (board) => {
    setSelectedBoard(board);
  };

  return (
    <div className="flex flex-col h-full">
      <BoardsList
        boards={boards.data || []}
        selectedBoard={selectedBoard}
        onSelectBoard={handleSelectBoard}
      />

      <CreateBoardButton />

      <div className="px-6 py-4 space-y-4 border-t border-gray-100">
        <ThemeToggle />
        <HideSidebarButton onClick={onClose} />
      </div>
    </div>
  );
};

export default SidebarContent;
