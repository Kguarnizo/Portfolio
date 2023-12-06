import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorNav, setColorNav] = useState(false)
  
  const toggleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColorNav(true)
    } else {
      setColorNav(false)
    }
  }

  window.addEventListener("scroll", changeColor)

  const navbarClass = `navbar ${colorNav ? "scrolled" : ""}`;

  return (
    <nav className={navbarClass}>
      <Link to="/" className="title">
        KatherineGuarnizo
        <span id="logo-period">.</span>
      </Link>
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
          <NavLink to="/projects" onClick={closeMenu}>projects</NavLink>
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