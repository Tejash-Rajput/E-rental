import React from 'react';

const NotFound = () => {
  return (
    <div className='not-found-template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form-container p-5 rounded bg-white'>
        <h1>404 - Not Found</h1>
        <p>The page you're looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
