import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <div className="App">
      <div className="instagram-container">
        <Sidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
