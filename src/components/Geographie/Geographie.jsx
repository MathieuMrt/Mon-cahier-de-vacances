import React from 'react'; 
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Consigne from './Consigne.jsx';
 import ReponseCapitale from './ReponseCapitale.jsx';
import ReponseDrapeau from './ReponseDrapeau.jsx';
import End from './End.jsx';
import Jeu from './Jeu.jsx';


const Geographie = () => {


    return (
        <div className="geographie">

            <Header color="geoColor" subject="Géographie"/>    
            <Consigne />     
            <Jeu />             
            <Footer color="geoColor"/>

        </div>
    );
};

export default Geographie;