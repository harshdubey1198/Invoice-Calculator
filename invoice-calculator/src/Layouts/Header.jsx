import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className="bg-gray-100 text-black p-4 w-screen fixed top-0 left-0 z-50 border-b border-black">
      <div className="container px-10 flex justify-between items-center w-screen">
            <img 
            src="https://res.cloudinary.com/harshdubey1198/image/upload/v1722064766/logo-light_ipdke7.png" 
            alt="logo" 
            className="w-auto h-11 rounded-lg filter invert" />

        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/proposals" className="hover:text-gray-600">Proposals</Link>
          <Link to="/reports" className="hover:text-gray-600">Reports</Link>
          <Link to="/settings" className="hover:text-gray-600">Settings</Link>
        </nav>
        <div className="flex items-center space-x-4">
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
