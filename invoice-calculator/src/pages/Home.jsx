import React, { useState } from 'react';
import Header from '../Layouts/Header';
import Sidebar from '../Layouts/Sidebar';

function Home() {
  const [isTextVisible, setTextVisible] = useState(true);

  const handleToggleSidebar = () => {
    setTextVisible(prev => !prev);
  };

  return (
    <div className="flex">
      <Sidebar isTextVisible={isTextVisible} />
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isTextVisible ? 'ml-64' : 'ml-14'}`}>
        <Header onToggleSidebar={handleToggleSidebar} />
        <div className="page-content flex-1 p-4">
        WelCome Home 🫡!
        </div>
      </div>
    </div>
  );
}

export default Home;
