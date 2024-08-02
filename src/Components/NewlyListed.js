import React from 'react';
import PropList from './PropList'
import PropCard from './PropCard'
import PropDetail from './PropDetail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const NewlyListed = () => {
  return (
    <div className="py-10 px-10 bg-white">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
      </h2>
      <div>
        <PropList/>
      </div>
    </div>
  );
};

export default NewlyListed;