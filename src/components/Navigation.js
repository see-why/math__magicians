import React from 'react';
import './Navigation.css';

const Navigation = () => {
  const logo = {
    flex: '2',
    marginLeft: '10px',
    fontSize: '2.8em',
    fontFamily: "'Rampart One', cursive",
    padding: '20px',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={logo}>
        Math Magicians
      </span>
      <ul className="link-container">
        <li className="links">Home</li>
        <li className="links">Calculator</li>
        <li className="links">Quote</li>
      </ul>
    </div>
  );
};

export default Navigation;
