import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import CourierDashboard from './CourierDashboard';
import './App.css'

const App = () => {
  return (
    <Router>
      <div className='welcome'>
        <h1>Task Management System</h1>
        <Routes>
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/courier" element={<CourierDashboard />} />
          <Route path="/" element={
            <div className='select'>
              <h2>Welcome! Please select a dashboard:</h2>
              <ul className='hrefs'>
                <li><a href="/user">User  Dashboard</a></li>
                <li><a href="/admin">Admin Dashboard</a></li>
                <li><a href="/courier">Courier Dashboard</a></li>
              </ul>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;