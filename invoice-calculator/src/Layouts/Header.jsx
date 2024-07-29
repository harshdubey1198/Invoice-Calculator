// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaBars } from 'react-icons/fa'; // Add the hamburger icon

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="bg-gray-100 text-black flex items-center w-screen h-14 fixed top-0 left-0 z-50 border-b border-black">
      <div className="flex items-center justify-between px-4 w-full">
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-4">
        <img 
          src="https://res.cloudinary.com/harshdubey1198/image/upload/v1722064766/logo-light_ipdke7.png" 
          alt="logo" 
          className="w-auto h-9 rounded-lg filter invert" 
        />
          <button onClick={onToggleSidebar} className="text-2xl">
            <FaBars />
          </button>
        </div>
        {/* Center: Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/proposals" className="hover:text-gray-600">Proposals</Link>
          <Link to="/reports" className="hover:text-gray-600">Reports</Link>
          <Link to="/settings" className="hover:text-gray-600">Settings</Link>
        </nav>
        
        {/* Right Side: Toggle Sidebar and Profile */}
     
          <div className="items-center hidden md:flex space-x-4">
            <img
              src="https://res.cloudinary.com/harshdubey1198/image/upload/v1721475588/dummy-userImages/bqof59zlzkampcaxpws9.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <div className='flex flex-col'>
              <h6 className="text-base font-semibold">User Fullname</h6>
              <p className="text-xs text-gray-600">Admin</p>
            </div>
          </div>
        
      </div>
    </header>
  );
};

export default Header;
