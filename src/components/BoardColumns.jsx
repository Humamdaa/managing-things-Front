import Column from './Column';
import AddColumn from './AddColumn';
import React from 'react';

export default function BoardColumns({ columns }) {
  return (
    <div className="flex gap-4 overflow-x-auto min-h-full">
      {columns.map((col, idx) => (
        <Column key={idx} title={col.title} tasks={col.tasks} />
      ))}
      <AddColumn />
    </div>
  );
}
