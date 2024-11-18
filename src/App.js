import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useAuth } from './contexts/AuthContext';
import Login from './pages/auth/Login';
import Home from './pages/dashboard/Home';
import './App.css';
import SelectTopic from './pages/dashboard/Selecttopic';
import Instruction from './pages/dashboard/Instruction';
import { Layout } from 'components/Layout';
import AnswerQuestion from 'pages/dashboard/AnswerQuestion';
import ApproveReq from './components/requests/ApproveReq';
import { Circle, Reviews } from '@mui/icons-material';
import Submit from 'components/requests/Submit';
import Score from 'components/requests/Score';
import ReviewQuestions from 'pages/dashboard/ReviewQuestions';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/topics" element={<SelectTopic />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/answer" element={<AnswerQuestion />} />
        <Route path='approve' element={<ApproveReq />} />
        <Route path='circle' element={<Circle />} />
        <Route path='submit' element={<Submit />} />
        <Route path='score' element={<Score />} />
        <Route path='review' element={<ReviewQuestions />} />






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
