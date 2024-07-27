// Sidebar.js
import React from 'react';
import { FaHome, FaFileInvoice, FaChartLine, FaCog } from 'react-icons/fa'; // Using react-icons for Material Design icons

const Sidebar = ({ isTextVisible }) => {
  return (
    <aside className={`fixed top-0 left-0 h-full bg-white text-black  transition-all duration-300 border-r border-black ${isTextVisible ? 'w-64' : 'w-14'}`}>
      <div className="flex flex-col items-center mt-16 space-y-4 gap-5">
        <div className={`flex items-center space-x-2  ${isTextVisible ? 'justify-start' : 'justify-center'}`}>
          <button className="text-2xl">
            <FaHome />
          </button>
          {isTextVisible && <span className="text-sm">Home</span>}
        </div>
        
        <div className={`flex items-center space-x-2 ${isTextVisible ? 'justify-start' : 'justify-center'}`}>
          <button className="text-2xl">
            <FaFileInvoice />
          </button>
          {isTextVisible && <span className="text-sm">Proposals</span>}
        </div>
        
        <div className={`flex items-center space-x-2 ${isTextVisible ? 'justify-start' : 'justify-center'}`}>
          <button className="text-2xl">
            <FaChartLine />
          </button>
          {isTextVisible && <span className="text-sm">Reports</span>}
        </div>
        
        <div className={`flex items-center space-x-2 ${isTextVisible ? 'justify-start' : 'justify-center'}`}>
          <button className="text-2xl">
            <FaCog />
          </button>
          {isTextVisible && <span className="text-sm">Settings</span>}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
