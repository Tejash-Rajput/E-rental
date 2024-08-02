// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './UserList.js';
import UserDetail from './UserDetail.js';

function Cards() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/user/:id" element={<UserDetail />} />
    //     <Route path="/" element={<UserList />} />
    //   </Routes>
    // </Router>
    <div className="mt-14">
    <UserList/>
    </div>
  )
}

export default Cards;
