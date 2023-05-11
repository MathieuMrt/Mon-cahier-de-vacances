import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><NavLink to="/">HomePage</NavLink></li>
                <li><NavLink to="geographie">Geographie</NavLink></li>
                <li><NavLink to="francais">Francais</NavLink></li>
                <li><NavLink to="maths">Maths</NavLink></li>
                <li><NavLink to="anglais">Anglais</NavLink></li>
            </ul>
        </div>
    );
};

export default NavBar;