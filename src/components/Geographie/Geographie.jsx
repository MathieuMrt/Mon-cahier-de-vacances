import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Consigne from './Consigne.jsx';
import ReponseCapitale from './ReponseCapitale.jsx';
import ReponseDrapeau from './ReponseDrapeau.jsx';
import End from './End.jsx';
import {useState, useEffect} from 'react';

const Geographie = () => {
    const [click, setClick] = useState(false)

const questionDrapeauTest = [{drapeau:"🇦🇫",bonneReponse:false},
{drapeau:"🇪🇸",bonneReponse:true},
{drapeau:"🇸🇹",bonneReponse:false},
{drapeau:"🇲🇿",bonneReponse:false},
]

const questionCapitaleTest = [{capitale:"Paris",bonneReponse:false},
{capitale:"Madrid",bonneReponse:true},
{capitale:"Londres",bonneReponse:false},
{capitale:"Berline",bonneReponse:false},
]

    return (
        <div className="geographie">
            <Header/>
            {/* {questionDrapeauTest.map((el)=>{
                return <ReponseDrapeau
                drapeau={el.drapeau}
                bonneReponse={el.bonneReponse} 
                click={click}        
                setClick={setClick}
                />
            })} */}
               {questionCapitaleTest.map((el)=>{
                return <ReponseCapitale
                capitale={el.capitale}
                bonneReponse={el.bonneReponse} 
                click={click}        
                setClick={setClick}
                />
            })}
            
            <Footer/>
        </div>
    );
};

export default Geographie;