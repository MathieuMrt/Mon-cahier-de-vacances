import React from 'react';
import { useNavigate } from "react-router-dom";


const Header = ({color, subject}) => {

    const navigate = useNavigate();

    return (
        <div className= {`header ${color}`}>
            <div className="fleche">
                <img src="./../src/assets/images/fleche-retour.png" alt="fleche" onClick={() => navigate(-1)}/>
            </div>
            <div className ="subject">
                <h2>{subject}</h2>
            </div>
            <div className = "nombre-questions">
                <h2>2/10</h2>
            </div>
        </div>
    );
};

export default Header;