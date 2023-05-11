import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import ConsigneEn from './ConsigneEn.jsx';
import EndEn from './EndEn.jsx';


const Anglais = () => {
    return (
        <div className="anglais">
            <Header color="anglaisColor" subject="Anglais"/>
            <EndEn />
            <Footer color="anglaisColor"/>
        </div>
    );
};

export default Anglais;