import React from 'react';
import {useState, useEffect} from 'react';
import ReponseDrapeau from './ReponseDrapeau.jsx';
import ReponseCapitale from './ReponseCapitale.jsx';

const Jeu = ({setCount}) => {

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

    const handleClick = function (e ) {
        e.preventDefault()
        setCount (c => c + 1)
    }

    return (
        <div>
            <div className="drapeau">
                <h3>Quel est le drapeau de ce pays ?</h3>
               {questionDrapeauTest.map((el)=>{
                return <ReponseDrapeau
                drapeau={el.drapeau}
                bonneReponse={el.bonneReponse} 
                click={click}        
                setClick={setClick}
                />
            }) }
            <button>Suivant</button>
            </div>
            <div className="capitale">
                <h3>Et maintenant, trouve sa capitale !</h3>
               {questionCapitaleTest.map((el)=>{
                return <ReponseCapitale
                capitale={el.capitale}
                bonneReponse={el.bonneReponse} 
                click={click}        
                setClick={setClick}
                />
            })}
            <button onClick={handleClick}>Suivant</button>
            </div>
        </div>
    );
};

export default Jeu;