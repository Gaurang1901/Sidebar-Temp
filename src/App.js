import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import './App.css';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="header">
        <h1 className="logo">Quantasis</h1>

        {/* Sidebar Toggle Button (only visible on small screens) */}
        <button className="menuButton" onClick={toggleSidebar}>
          ☰
        </button>
      </header>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default App;
