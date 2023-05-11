import React from 'react';
import {useState, useEffect} from 'react';

const ReponseCapitale = ({capitale,bonneReponse,click,setClick}) => {
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
        <div className = "reponse-capitale">
           <span className={`Capitale ${classe}`} onClick={handleClick}>{capitale}</span>
        </div>
    );
};

export default ReponseCapitale;