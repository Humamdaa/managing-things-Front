import BoardColumns from './BoardColumns';
import EmptyBoard from './EmptyBoard';
import React from 'react';

// Dummy data (replace with your actual state/props)
const dummyColumns = [
  { title: 'TODO', tasks: ['Build UI', 'Setup auth'] },
  { title: 'DONE', tasks: ['Research pricing'] },
];

export default function MainContent() {
  const columns = dummyColumns; // Replace with props or context as needed

  const handleAddColumn = () => {
    console.log('Add column clicked');
    // implement actual logic later
  };

  return (
    <main className="flex-1 overflow-y-auto bg-[#F4F7FD] p-6">
      {columns.length > 0 ? (
        <BoardColumns columns={columns} />
      ) : (
        <EmptyBoard onAddColumn={handleAddColumn} />
      )}
    </main>
  );
}
