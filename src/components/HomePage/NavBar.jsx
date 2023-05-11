import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-button">
        <li className="nav-geo">
          <NavLink to="geographie">Geo</NavLink>
        </li>
        <li className="nav-français">
          <NavLink to="francais">Français</NavLink>
        </li>
        <li className="nav-maths">
          <NavLink to="maths">Maths</NavLink>
        </li>
        <li className="nav-anglais">
          <NavLink to="anglais">Anglais</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
