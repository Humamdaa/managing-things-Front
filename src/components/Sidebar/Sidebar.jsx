import React, { useState } from 'react';
import SidebarContent from './SidebarContent';
import ToggleButton from './ShowSidebarButton';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <aside className="h-[calc(100vh-64px)] w-[300px] bg-white  border-r border-gray-200 flex flex-col">
          <SidebarContent onClose={() => setIsOpen(false)} />
        </aside>
      )}

      {!isOpen && <ToggleButton onClick={() => setIsOpen(true)} />}
    </>
  );
};

export default Sidebar;
