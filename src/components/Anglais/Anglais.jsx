import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

const Anglais = ({color}) => {
    return (
        <div className="anglais">
            <Header color="anglaisColor" subject="Anglais"/>
            <Footer color="anglaisColor"/>
        </div>
    );
};

export default Anglais;