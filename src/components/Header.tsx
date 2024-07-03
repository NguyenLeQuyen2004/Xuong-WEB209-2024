import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/" className="navLink">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navLink">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="navLink">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className="navLink">
              Register
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
