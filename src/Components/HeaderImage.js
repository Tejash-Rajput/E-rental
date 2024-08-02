// HeaderImage.js
import React from 'react';
import './HeaderImage.css';

const HeaderImage = ({ imageUrl, text }) => {
  return (
    <div className="header-image" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h1 className="header-text">{text}</h1>
    </div>
  );
};

export default HeaderImage;
