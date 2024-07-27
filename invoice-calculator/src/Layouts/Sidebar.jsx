import React, { useState } from 'react';
import { FaHome, FaFileInvoice, FaChartLine, FaCog, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import arrows

// Import sidebar data
import { sidebarData } from './SidebarData';

const Sidebar = ({ isTextVisible }) => {
  // Define icon mapping
  const iconMapping = {
    FaHome: <FaHome />,
    FaFileInvoice: <FaFileInvoice />,
    FaChartLine: <FaChartLine />,
    FaCog: <FaCog />,
  };

  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (label) => {
    setActiveMenu(activeMenu === label ? null : label);
  };

  return (
    <aside className={`fixed top-0 left-0 h-full bg-white text-black transition-all duration-900 border-r border-black ${isTextVisible ? 'w-64' : 'w-14'}`}>
      <div className="flex flex-col mt-16 space-y-4 gap-5">
        {sidebarData.map((item, index) => (
          <div key={index}>
            <div className={`flex items-center space-x-2 ${isTextVisible ? 'justify-start' : 'justify-center'}`} onClick={() => handleMenuClick(item.label)}>
              <button className="text-2xl" >
                {iconMapping[item.icon]}
              </button>
              {isTextVisible && (
                <span className="text-sm flex items-center">
                  {item.label}
                  {item.subItems && (activeMenu === item.label ? <FaChevronUp /> : <FaChevronDown />)}
                </span>
              )}
            </div>
            {isTextVisible && item.subItems && activeMenu === item.label && (
              <ul className="ml-6 space-y-2">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a href={subItem.link} className="text-sm hover:text-gray-600">
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
