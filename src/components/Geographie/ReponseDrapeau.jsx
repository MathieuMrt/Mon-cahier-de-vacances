import {useState, useEffect} from 'react';


const ReponseDrapeau = ({drapeau,bonneReponse,click,setClick,setIsGoodAnswer, pays,setClickedAnswer}) => {

const [classe, setClasse] = useState("")


const handleClick = () => {
    if(!click) {
   if(!bonneReponse)
    { setClasse("mauvaiseReponse")
    setIsGoodAnswer(false) }
setClick(true)
}
setClickedAnswer(pays);
}

useEffect(() => {  
   if(click){    
    bonneReponse && setClasse("bonneReponse")
} 
  
  }, [click]);



    return (
        <div className ="reponse-drapeau">
            <button className={`drapeau ${classe}`} onClick={handleClick}>{drapeau}</button>
        </div>
    );
};

export default ReponseDrapeau;