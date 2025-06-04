import BoardItem from './BoardItem';
import React from 'react';

const BoardsList = ({ boards, selectedBoard, onSelectBoard }) => (
  <div className="flex-1 overflow-y-auto py-6">
    <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 px-6">
      ALL BOARDS ({boards.length})
    </h2>

    <ul className="space-y-1">
      {boards.map((board, index) => (
        <BoardItem
          key={board.id}
          board={board.name}
          isSelected={selectedBoard === board.name}
          onClick={() => onSelectBoard(board.name)}
        />
      ))}
    </ul>
  </div>
);

export default BoardsList;
