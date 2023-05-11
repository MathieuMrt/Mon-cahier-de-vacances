import React from 'react';
import {useState, useEffect} from 'react';
import ReponseDrapeau from './ReponseDrapeau.jsx';
import ReponseCapitale from './ReponseCapitale.jsx';

const Jeu = ({questionTabCap, questionsTab, setCount}) => {
  const [questionIsDrapeau, setQuestionIsDrapeau] = useState(true)
  const [reponseCorrecte, setReponseCorrecte] = useState({})
  const [isGoodAnswer, setIsGoodAnswer] = useState(true)
  const [clickedAnswer, setClickedAnswer] = useState("")


    const [click, setClick] = useState(false)


    const questionCapitale = questionTabCap[0]
    const questionDrapeau = questionsTab[0]


useEffect (()=>{
    setReponseCorrecte(questionDrapeau.find(objet => objet.bonnereponse === true))
},[])


    const handleClick = function (e ) {
        e.preventDefault()
       if(!questionIsDrapeau){ setCount (c => c + 1)  }
        setQuestionIsDrapeau(false) 
        setClick(false)     
    }


    return (
        <div className='jeu'>  
        {questionIsDrapeau &&
         <>
            <div className="questionDrapeau"></div>
            {!click &&  
            <>
            <p>Clique sur le drapeau de ce pays :</p>
            <p className='Pays'>{reponseCorrecte.pays}</p>
            </> }
            {click && isGoodAnswer && 
             <>
             <p>Bravo ! C'était bien :</p>
             <p className='Pays'>{reponseCorrecte.pays}</p>            
             </> }
             {click && !isGoodAnswer && 
              <>
              <p>Dommage ! Tu as confondu avec :</p>
              <p className='Pays'>{clickedAnswer}</p>            
              </> }
            <div className="questionBox">
               {questionDrapeau.map((el)=>{

                return <ReponseDrapeau
                key={el.drapeau}
                drapeau={el.drapeau}
                bonneReponse={el.bonnereponse} 
                pays={el.pays}
                click={click}        
                setClick={setClick}
                setIsGoodAnswer={setIsGoodAnswer}
                setClickedAnswer={setClickedAnswer}
                />                   
            })}                     
            </div>          
            
            <button className={`boutonSuivantJeu ${click? "visible":"hidden"}`} onClick={handleClick}>Suivant</button>  
            </>}
            {!questionIsDrapeau &&
         <>            
                {questionCapitale.map((el)=>{
                return <ReponseCapitale
                capitale={el.capitale}
                bonneReponse={el.bonneReponse} 
                click={click}        
                setClick={setClick}
                />
            })}
            </>}        
            </div>
      
    );
};

export default Jeu;