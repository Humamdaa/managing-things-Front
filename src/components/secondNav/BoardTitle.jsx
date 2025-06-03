import React from 'react';
const BoardTitle = ({ selectedBoard }) => (
  <h1 className="text-lg font-bold">{selectedBoard || 'Select a board'}</h1>
);

export default BoardTitle;
