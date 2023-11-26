import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <div>
          <Link to="/" className="logo">
            KatherineGuarnizo 
          </Link>
          <span id="logo-period">.</span>
        </div>
        <button id="nav-button" onClick={toggleNav}>
          <svg 
            id="nav-svg" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <div className={`nav-links ${isOpen ? 'open-nav' : 'close-nav'}`}>
          <ul>
            <li>
              <Link to="/about">
                <span className="nav-item">about</span>
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                <span className="nav-item">portfolio</span>
              </Link>
            </li>
            <li>
              <Link to="/skills">
                <span className="nav-item">skills</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span className="nav-item">contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;