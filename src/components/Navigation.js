import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/math__magicians" className="Visited">Math Magicians</Link>
      </span>
      <ul className="link-container">
        <li className="links">
          <Link to="/math__magicians" className="Visited">Home</Link>
        </li>
        <li className="links">
          <Link to="/math__magicians/calculator" className="Visited">Calculator</Link>
        </li>
        <li className="links">
          <Link to="/math__magicians/quote" className="Visited">Quote</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
