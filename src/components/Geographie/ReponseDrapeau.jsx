import {useState, useEffect} from 'react';


const ReponseDrapeau = ({drapeau,bonneReponse,click,setClick}) => {

const [classe, setClasse] = useState("")


const handleClick = () => {
    if(!click) {
   !bonneReponse && setClasse("mauvaiseReponse")  
setClick(true)
}
}

useEffect(() => {  
   if(click) bonneReponse && setClasse("bonneReponse")
  }, [click]);



    return (
        <div className ="reponse-drapeau">
            <span className={`drapeau ${classe}`} onClick={handleClick}>{drapeau}</span>
        </div>
    );
};

export default ReponseDrapeau;