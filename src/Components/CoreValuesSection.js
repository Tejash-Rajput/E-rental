import React from 'react';
import './CoreValuesSection.css'; // Import the CSS file for styling

const coreValues = [
  {
    icon: 'star',
    title: 'Obsessed with Experience',
    color: '#FF6E10', // Orange
    description: '',
  },
  {
    icon: 'shield',
    title: 'Act with Integrity',
    color: '#3F51B5', // Blue
    description: '',
  },
  {
    icon: 'fist',
    title: 'Have Grit',
    color: '#4CAF50', // Green
    description: '',
  },
  {
    icon: 'group',
    title: '"We" not "Me"',
    color: '#9C27B0', // Purple
    description: '',
  },
  {
    icon: 'network',
    title: 'Do Things That Matter',
    color: '#FF5722', // Deep Orange
    description: '',
  },
  {
    icon: 'arrow-right',
    title: 'Keep Moving Forward',
    color: '#03A9F4', // Light Blue
    description: '',
  },
  {
    icon: 'lightbulb',
    title: 'Understand the "Why?"',
    color: '#FFC107', // Amber
    description: '',
  },
  {
    icon: 'handshake',
    title: 'Support our People & Community',
    color: '#E91E63', // Pink
    description: '',
  },
];

const CoreValues = () => {
  const firstRow = coreValues.slice(0, 4);
  const secondRow = coreValues.slice(4);

  return (
    <div className="core-values-container">
      <h1>Our Core Values</h1>
      <div className="core-values-grid">
        <div className="core-values-row">
          {firstRow.map((value, index) => (
            <div key={index} className="core-value-item">
              <div className="core-value-icon" style={{ backgroundColor: value.color }}>
                <div className={`icon ${value.icon}`}></div>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
        <div className="core-values-row">
          {secondRow.map((value, index) => (
            <div key={index} className="core-value-item">
              <div className="core-value-icon" style={{ backgroundColor: value.color }}>
                <div className={`icon ${value.icon}`}></div>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
