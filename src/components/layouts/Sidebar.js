import React from "react";
import "styles/layouts/Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h2 className="sidebar-title">Quiz Time</h2>
      <ul>
        <li className="sidebar-item active">
          <DashboardIcon />
          <span>Dashboard</span>
        </li>
        <li className="sidebar-item">
          <HeadsetMicIcon />
          <span>Support</span>
        </li>
        <li className="sidebar-item">
          <NotificationsIcon />
          <span>Notification</span>
        </li>
        <li className="sidebar-item">
          <LogoutIcon />
          <span>Log Out</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
