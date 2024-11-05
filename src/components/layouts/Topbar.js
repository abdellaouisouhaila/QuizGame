import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import avatarImage from '../../assets/avatar-2.jpg';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import 'styles/layouts/Topbar.css'; 

const Topbar = ({ toggleSidebar }) => {
  return (
    <div className="topbar">
      <button className="menu-btn" onClick={toggleSidebar} aria-label="Toggle Sidebar">
        <MenuIcon />
      </button>
      <div className="search-bar">
        <SearchIcon className="search-icon" />
        <input type="text" placeholder="Search.." />
      </div>
      <button className="start-quiz-btn">Start Quiz</button>
      <div className="profile-section">
        <Avatar className="profile-avatar" src={avatarImage} />
        <span className="profile-name">Oluwatobi..</span>
      </div>
    </div>
  );
};

export default Topbar;
