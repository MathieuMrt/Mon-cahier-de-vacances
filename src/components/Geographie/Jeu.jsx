import React from 'react';
import {useState, useEffect} from 'react';
import ReponseDrapeau from './ReponseDrapeau.jsx';
import ReponseCapitale from './ReponseCapitale.jsx';

const Jeu = ({questionTabCap, questionsTab, setCount}) => {
  const [questionIsDrapeau, setQuestionIsDrapeau] = useState(true)


    const [click, setClick] = useState(false)

    const questionDrapeauTest = [{drapeau:"🇦🇫",bonneReponse:false},
    {drapeau:"🇪🇸",bonneReponse:true},
    {drapeau:"🇸🇹",bonneReponse:false},
    {drapeau:"🇲🇿",bonneReponse:false},
    ]
    
    const questionDrapeau = questionsTab[0]
console.log(questionsTab[0]);



    const handleClick = function (e ) {
        e.preventDefault()
        setCount (c => c + 1)
    }

    return (
        <div className='jeu'>  
            <div className="questionDrapeau"></div>
            {questionIsDrapeau &&  
            <>
            <p>Clique sur le drapeau de ce pays :</p>
            <p className='Pays'>FRANCE</p>
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
            <button className='boutonSuivantJeu'>Suivant</button>  
            </>   
            }
               {/* {questionCapitaleTest.map((el)=>{

                return <ReponseCapitale
                capitale={el.capitale}
                bonneReponse={el.bonneReponse} 
                click={click}        
                setClick={setClick}
                />
            })*/}           
            </div>
      
    );
};

export default Jeu;