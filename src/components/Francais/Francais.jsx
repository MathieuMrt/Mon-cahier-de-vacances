import React, { useState } from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import ConsigneFr from './ConsigneFr.jsx';
import EndFr from './EndFr.jsx';
import JeuFr from './JeuFr.jsx';

const Francais = () => {

    const [count, setCount] = useState(0);
    return (
        <div className="francais">
            <Header color="francaisColor" subject="Français" count={count}/>
            <main className="main-page"><JeuFr setCount={setCount} count={count}/></main>
            <Footer color="francaisColor"/>
        </div>
    );
};

export default Francais;
