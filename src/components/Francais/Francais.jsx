import React, { useState } from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import ConsigneFr from './ConsigneFr.jsx';

const Francais = () => {

    const [count, setCount] = useState(0);
    return (
        <div className="francais">
            <Header color="francaisColor" subject="Français" count={count}/>
            <main className="main-page"><ConsigneFr setCount={setCount} count={count}/></main>
            <Footer color="francaisColor"/>
        </div>
    );
};

export default Francais;
