import React from 'react';
import './Separator.css';

const Separator = ({ title }) => {
  return (
    <div className="separator-container">
      <div className="separator-line"></div>
      <h2 className="separator-title">{title}</h2>
    </div>
  );
};

export default Separator;

