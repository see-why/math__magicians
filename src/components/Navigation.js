import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <div className="nav-container">
    <span className="logo" data-testid="logo">
      <Link to="/math__magicians" className="Visited">Math Magicians</Link>
    </span>
    <ul className="link-container">
      <li className="links">
        <Link to="/math__magicians" className="Visited" data-testid="home">Home</Link>
      </li>
      <li className="links">
        <Link to="/math__magicians/calculator" className="Visited" data-testid="calculator">Calculator</Link>
      </li>
      <li className="links">
        <Link to="/math__magicians/quote" className="Visited" data-testid="quote">Quote</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
