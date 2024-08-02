// src/TeamMemberCard.js
import React, { useState } from 'react';
import './TeamMemberCard.css';


const TeamMemberCard = ({ name, role, description, image, sname }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="team-member-card" onClick={handleClick}>
      <img className="team-member-image mt-3 ml-[50px]" src={image} alt={`${name}`} />
      <h3 className="mt-2 bg- w-[200px]">{name}</h3>
      <h4 className="">{sname}</h4>
      <div className="mt-5">{description}</div>
      <h4 className="mt-3">{role}</h4>
    </div>
  );
};

export default TeamMemberCard;
