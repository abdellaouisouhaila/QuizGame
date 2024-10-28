import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import avatarImage from '../../assets/avatar-2.jpg';
import 'styles/layouts/Topbar.css'; 

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="search-bar">
        <SearchIcon className="search-icon" />
        <input type="text" placeholder="Search.." />
      </div>

      <button className="start-quiz-btn">Start Quiz</button>

      <div className="profile">
       <img src={avatarImage} alt="Profile" className="profile-icon" /> <span>Oluwatobi Olowu</span>
      </div>
    </div>
  );
};

export default Topbar;
