import React from 'react';
export default function Card({ title }) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 cursor-pointer hover:shadow-md transition">
      <p className="text-sm font-medium text-gray-900">{title}</p>
    </div>
  );
}
