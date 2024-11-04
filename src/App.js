import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useAuth } from './contexts/AuthContext';
import Login from './pages/auth/Login';
import Home from './pages/dashboard/Home';
import Sidebar from './components/layouts/Sidebar';
import Topbar from './components/layouts/Topbar';
import './App.css';
import SelectTopic from './pages/dashboard/SelectTopic'
import { Layout } from 'components/Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/topics" element={<SelectTopic />} />

      </Routes>
    </div>
  );
}

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />;
};

const Dashboard = () => (
    <Layout>
      <Home />
    </Layout>
     
      
    
);

export default App;
