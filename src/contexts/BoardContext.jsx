// contexts/BoardContext.js
import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';

const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  const [selectedBoard, setSelectedBoard] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedBoard = localStorage.getItem('selectedBoard');
    if (savedBoard) setSelectedBoard(savedBoard);
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    if (selectedBoard !== null) {
      localStorage.setItem('selectedBoard', selectedBoard);
    }
  }, [selectedBoard]);

  return (
    <BoardContext.Provider value={{ selectedBoard, setSelectedBoard }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error('useBoard must be used within a BoardProvider');
  }
  return context;
};
