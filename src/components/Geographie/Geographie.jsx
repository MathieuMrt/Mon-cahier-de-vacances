import React from 'react'; 
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Consigne from './Consigne.jsx';
 import ReponseCapitale from './ReponseCapitale.jsx';
import ReponseDrapeau from './ReponseDrapeau.jsx';
import End from './End.jsx';
import Jeu from './Jeu.jsx';
import { useState } from "react";

const Geographie = () => {

    const [count, setCount] = useState(0);

    return (
        <div className="geographie">

            <Header color="geoColor" subject="Géographie" count={count}/>        
            <Jeu setCount={setCount}/>             
            <Footer color="geoColor"/>

        </div>
    );
};

export default Geographie;