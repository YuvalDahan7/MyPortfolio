import React, { useState } from "react";
import "../Navbar/Navbar.css";
import menuIcon from "../../Assets/nav/menuIcon.png";
import closeIcon from "../../Assets/nav/closeIcon.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const Menu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <a className="title" href="/">
        Portfolio
      </a>
      <div className="menu">
        <img
          className="menuBtn"
          src={menuOpen ?  closeIcon  :  menuIcon }
          alt="menu-button"
          onClick={Menu}
        />
        <ul
          className={`${"menuItems"} ${menuOpen && "menuOpenStyle"} `}
          onClick={Menu}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
