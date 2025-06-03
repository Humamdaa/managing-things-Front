import { useBoard } from '../contexts/BoardContext';
import BoardColumns from './BoardColumns';
import EmptyBoard from './EmptyBoard';
import React from 'react';

// Dummy data (replace with your actual state/props)
const dummyColumns = [
  {
    title: 'TODO',
    tasks: [
      'Build UI',
      'Setup auth',
      'Setup auth',
      'Setup auth',
      'Setup auth',
      'Setup auth',
      'Setup auth',
      'Setup auth',
    ],
  },
  { title: 'DONE', tasks: ['Research pricing'] },
  { title: 'DONE', tasks: ['Research pricing'] },
  { title: 'DONE', tasks: ['Research pricing'] },
];

export default function MainContent() {
  const columns = dummyColumns;
  const { selectedBoard } = useBoard();

  const handleAddColumn = () => {
    console.log('Add column clicked');
  };

  return (
    <main className="flex-1 overflow-y-auto bg-[#F4F7FD] p-6">
      {columns.length > 0 && selectedBoard ? (
        <BoardColumns columns={columns} />
      ) : (
        <EmptyBoard onAddColumn={handleAddColumn} />
      )}
    </main>
  );
}
