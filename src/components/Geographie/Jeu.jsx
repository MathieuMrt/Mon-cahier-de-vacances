import React from 'react';
import {useState, useEffect} from 'react';
import ReponseDrapeau from './ReponseDrapeau.jsx';
import ReponseCapitale from './ReponseCapitale.jsx';
import End from './End.jsx';

const Jeu = ({questionTabCap, questionsTab, setCount,count}) => {
  const [questionIsDrapeau, setQuestionIsDrapeau] = useState(true)
  const [reponseCorrecteDrap, setReponseCorrecteDrap] = useState({})
  const [reponseCorrecteCap, setReponseCorrecteCap] = useState({})
  const [isGoodAnswer, setIsGoodAnswer] = useState(true)
  const [clickedAnswer, setClickedAnswer] = useState("")
  const [arrIteration, setarrIteration] = useState(0)


    const [click, setClick] = useState(false)


    const questionCapitale = questionTabCap[arrIteration]
    const questionDrapeau = questionsTab[arrIteration]


useEffect (()=>{
    setReponseCorrecteDrap(questionDrapeau.find(objet => objet.bonnereponse === true))
},[click])

useEffect (()=>{
    setReponseCorrecteCap(questionCapitale.find(objet => objet.bonnereponse === true))
},[click])

useEffect (()=>{
    setCount(count+1)
},[])


    const handleClick = function () {        
       if(!questionIsDrapeau){ setarrIteration(arrIteration+1)  }
       setCount (c => c + 1)
        setQuestionIsDrapeau(!questionIsDrapeau) 
        setClick(!click)
        setIsGoodAnswer(true)     
    }
console.log(click);

    return (
        <>
       {count !== 11 &&       
       
        <div className='jeu'>  
        {questionIsDrapeau &&
         <>           
            {!click &&  
            <>
            <p>Clique sur le drapeau de ce pays :</p>
            <p className='Pays'>{reponseCorrecteDrap.pays}</p>
            </> }
            {click && isGoodAnswer && 
             <>
             <p>Bravo ! C'était bien :</p>
             <p className='Pays'>{reponseCorrecteDrap.pays}</p>            
             </> }
             {click && !isGoodAnswer && 
              <>
              <p>Dommage ! Tu as sélectionné :</p>
              <p className='Pays'>{clickedAnswer} au lieu de {reponseCorrecteDrap.pays}</p>            
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
          {!click &&  
         <>
            <p>Quelle est la capitale de ce pays :</p>
            <p className='Pays'>{reponseCorrecteCap.pays}</p>
            </> }
            {click &&  isGoodAnswer &&
         <>
            <p>Bravo, c'est bien</p>
            <p className='Pays'>{reponseCorrecteCap.capitale}</p>
            </> }
            {click && !isGoodAnswer && 
              <>
              <p>Dommage ! Tu as confondu avec :</p>
              <p className='Pays'>{clickedAnswer}</p>            
              </> }
         <div className="reponse-capitale">
                {questionCapitale.map((el)=>{
                return <ReponseCapitale
                key={el.capitale}
                capitale={el.capitale}
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
            </div> 
             }
             {count > 10 &&   <End/>         }
             </>        
        
    );
};

export default Jeu;