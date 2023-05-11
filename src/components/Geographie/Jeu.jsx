import React from 'react';
import {useState, useEffect} from 'react';
import ReponseCapitale from './ReponseCapitale';
import ReponseDrapeau from './ReponseDrapeau';

const Jeu = ({questionTabCap, questionsTab}) => {

    const [questionIsDrapeau, setQuestionIsDrapeau] = useState(true)

    const [click, setClick] = useState(false)

    const questionDrapeauTest = [{drapeau:"🇦🇫",bonneReponse:false},
    {drapeau:"🇪🇸",bonneReponse:true},
    {drapeau:"🇸🇹",bonneReponse:false},
    {drapeau:"🇲🇿",bonneReponse:false},
    ]
    
    const questionDrapeau = questionsTab[0]
console.log(questionsTab[0]);



    return (
        <div className='jeu'>  
            <div className="questionDrapeau"></div>
            {questionIsDrapeau &&  
            <>
            <p>Quel est le drapeau de ce pays ?</p>
            <div className="questionBox">
               {questionDrapeau.map((el)=>{
                return <ReponseDrapeau
                key={el.drapeau}
                drapeau={el.drapeau}
                bonneReponse={el.bonnereponse} 
                click={click}        
                setClick={setClick}
                />                
            })}
            </div>
            </>   
            }
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