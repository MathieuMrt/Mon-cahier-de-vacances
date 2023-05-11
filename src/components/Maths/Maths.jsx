
import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import ConsigneMaths from './ConsigneMath.jsx';
import EndMaths from './EndMath.jsx';

const Maths = () => {
    return (
        <div className="maths">
            <Header color="mathsColor" subject="Maths"/>
            <main className="main-page"><EndMaths/></main>
            <Footer color="mathsColor"/>
        </div>
    );

};

export default Maths;
