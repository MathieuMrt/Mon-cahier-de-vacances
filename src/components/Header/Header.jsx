import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <ul>
                <li><NavLink to="/">Comp1</NavLink></li>
                <li><NavLink to="comp2">Comp2</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;