// imports
import React, { useState } from "react";

// this component renders the navbar with a menu toggle button, linking the different sections on the page 
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <a href="/">
        AC
      </a>
      <div >
        <img
          src={
            menuOpen
          }
          alt="menu-icon and close-icon by Icons8"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {/* menu button that toggles state */}
        <ul
          onClick={() => setMenuOpen(false)}
        >
          {/* menu items list (conditionally rendered) */}
          <li>
            <a href="#about">
              {" "}
              <i className="bi bi-person p-1"></i>About
            </a>
          </li>
          <li>
            <a href="#resume">
              {" "}
              <i className="bi bi-file-earmark-text p-1"></i>Resume
            </a>
          </li>
          <li>
            <a href="#projects">
              {" "}
              <i className="bi bi-code-slash p-1"></i>Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              {" "}
              <i className="bi bi-envelope p-1"></i>Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;