import Card from './Card';
import React from 'react';

export default function Column({ title, tasks }) {
  return (
    <div className="bg-[#E4EBFA] rounded-md p-4 min-w-[280px]">
      <h2 className="text-sm font-semibold text-gray-600 uppercase mb-4 tracking-wider">{title}</h2>
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <Card key={index} title={task} />
        ))}
      </div>
    </div>
  );
}
