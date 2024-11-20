import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";  // Import useNavigate and useLocation
import "styles/layouts/Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [activeItem, setActiveItem] = useState("/dashboard");

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const handleNavigation = (path) => {
    setActiveItem(path);
    navigate(path);    
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h2 className="sidebar-title">Quiz Time</h2>
      <ul>
        <li
          className={`sidebar-item ${activeItem === "/dashboard" ? "active" : ""}`}
          onClick={() => handleNavigation("/dashboard")}
        >
          <DashboardIcon className="icon-item" />
          <span>Dashboard</span>
        </li>
        <li
          className={`sidebar-item ${activeItem === "/support" ? "active" : ""}`}
          onClick={() => handleNavigation("/support")}
        >
          <HeadsetMicIcon className="icon-item" />
          <span>Support</span>
        </li>
        <li
          className={`sidebar-item ${activeItem === "/notifications" ? "active" : ""}`}
          onClick={() => handleNavigation("/notifications")}
        >
          <NotificationsIcon className="icon-item" />
          <span>Notification</span>
        </li>
        <li
          className={`sidebar-item ${activeItem === "/logout" ? "active" : ""}`}
          onClick={() => handleNavigation("/logout")}
        >
          <LogoutIcon className="icon-item" />
          <span>Log Out</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
