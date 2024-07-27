import React, { useState } from 'react'
import Header from '../Layouts/Header'
import Sidebar from '../Layouts/Sidebar'

function Home() {
  const [isTextVisible, setTextVisible] = useState(true);

  const handleToggleSidebar = () => {
    setTextVisible(prev => !prev);
  };
  return (
    <div>
        <Header onToggleSidebar={handleToggleSidebar} />
        <Sidebar isTextVisible={isTextVisible} />
        Home
        </div>
  )
}

export default Home