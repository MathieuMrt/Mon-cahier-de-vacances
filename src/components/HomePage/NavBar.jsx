import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-button">
        <li className="geographie">
          <NavLink to="geographie">Geo</NavLink>
        </li>
        <li className="français">
          <NavLink to="francais">Français</NavLink>
        </li>
        <li className="maths">
          <NavLink to="maths">Maths</NavLink>
        </li>
        <li className="anglais">
          <NavLink to="anglais">Anglais</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
