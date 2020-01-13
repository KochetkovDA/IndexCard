
import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

const RightNavBar = () => (
  <div className="rightNavBar">
    <ul className="navBarList">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li><Link to="/test-route">Example Page</Link></li>
      <li>3</li>
    </ul>
  </div>
);

export default RightNavBar;
