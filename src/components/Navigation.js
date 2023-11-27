import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
          <Link to="/" className="title">
            KatherineGuarnizo.
          </Link>
          {/* <span id="logo-period">.</span> */}
          <div className="menu" onClick={toggleOpen}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
                <Link to="/about" onClick={closeMenu}>
                <span>about</span>
              </Link>
            </li>
            <li>
                <Link to="/portfolio" onClick={closeMenu}>
                <span>portfolio</span>
              </Link>
            </li>
            <li>
                <Link to="/skills" onClick={closeMenu}>
                <span>skills</span>
              </Link>
            </li>
            <li>
                <Link to="/contact" onClick={closeMenu}>
                <span>contact</span>
              </Link>
            </li>
          </ul>
    </nav>
  );
};

export default Navigation;