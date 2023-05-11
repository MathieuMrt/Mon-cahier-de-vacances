import React from 'react';
import {useState, useEffect} from 'react';

const Jeu = () => {

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
        <div>
               {/* {questionDrapeauTest.map((el)=>{
                return <ReponseDrapeau
                drapeau={el.drapeau}
                bonneReponse={el.bonneReponse} 
                click={click}        
                setClick={setClick}
                />
            })} */}
               {/* {questionCapitaleTest.map((el)=>{
                return <ReponseCapitale
                capitale={el.capitale}
                bonneReponse={el.bonneReponse} 
                click={click}        
                setClick={setClick}
                />
            })} */}
        </div>
    );
};

export default Jeu;