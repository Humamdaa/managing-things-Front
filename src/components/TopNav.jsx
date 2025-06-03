import React from 'react';
import GroupLogo from '../assets/Logo.svg'; // adjust path as needed

const TopNav = () => {
  return (
    <div className="h-16 px-5 flex items-center border-b bg-white">
      <img src={GroupLogo} alt="Logo" className="h-6" />
    </div>
  );
};

export default TopNav;
