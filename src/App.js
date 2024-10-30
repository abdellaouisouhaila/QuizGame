import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useAuth } from './contexts/AuthContext';
import Login from './pages/auth/Login';
import Home from './pages/dashboard/Home';
import Sidebar from './components/layouts/Sidebar';
import Topbar from './components/layouts/Topbar';
import './App.css';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />;
};

const Dashboard = () => (
  <div className="app-container">
    <Sidebar />
    <div className="main-layout">
      <Topbar />
      <Home />
      
    </div>
  </div>
);

export default App;
