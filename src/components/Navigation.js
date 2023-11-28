import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
    <nav className="navbar">
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
                <NavLink to="/about" onClick={closeMenu}>about</NavLink>
            </li>
            <li>
                <NavLink to="/portfolio" onClick={closeMenu}>projects</NavLink>
            </li>
            <li>
                <NavLink to="/skills" onClick={closeMenu}>skills</NavLink>
            </li>
            <li>
                <NavLink to="/contact" onClick={closeMenu}>contact</NavLink>
            </li>
          </ul>
    </nav>
  );
};

export default Navigation;