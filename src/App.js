import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login'; // Ensure the correct path and case sensitivity
import Signup from './Components/Signup'; // Ensure the correct path and case sensitivity
import NotFound from './Components/NotFound'; // Ensure the correct path and case sensitivity
import Page from './Components/Page';
import UserList from './Components/UserList';
import UserDetail from './Components/UserDetail';
import PropDetail from './Components/PropDetail';
import PropList from './Components/PropList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<NotFound />} />
        <Route path="/home" element={<Page />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/Prop/:id" element={<PropDetail />} />
        <Route path="/Prop" element={<PropList />} />
      </Routes>
    </Router>
  );
}

export default App;
