import React from 'react';
import TopNav from './TopNav';
import SecondNav from './SecondNav';
import Sidebar from './Sidebar/Sidebar';
import { BoardProvider } from '../contexts/BoardContext';
import MainContent from './Main';
const Layout = () => {
  return (
    <BoardProvider>
      <div className="h-screen flex flex-col bg-white">
        {/* Top section */}
        <div className="flex h-16 border-b border-gray-200">
          {/* Left: TopNav container */}
          <div className="w-[300px] flex items-center border-r border-gray-200 box-border">
            <TopNav />
          </div>

          {/* Right: SecondNav */}
          <div className="flex-1">
            <SecondNav />
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className=" bg-[#F4F7FD] overflow-y-auto box-border">
            <Sidebar />
          </div>

          {/* Main content */}
          <main className="flex-1 overflow-y-auto bg-[#F4F7FD] p-6">
            <MainContent />
          </main>
        </div>
      </div>
    </BoardProvider>
  );
};

export default Layout;
