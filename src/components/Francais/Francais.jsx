import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import ConsigneFr from './ConsigneFr.jsx';
import EndFr from './EndFr.jsx';

const Francais = () => {
    return (
        <div className="francais">
            <Header color="francaisColor" subject="Français"/>
            <ConsigneFr />
            <Footer color="francaisColor"/>
        </div>
    );
};

export default Francais;