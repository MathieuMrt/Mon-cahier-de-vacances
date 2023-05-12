import {useState,useEffect} from 'react';
import React from 'react';

const MotAng = ({value,bonnereponse,click,setClick, victoire, setVictoire}) => {
  
    const [classe, setClasse] = useState("");


    const handleClick = () => {

        if (!click) {
          
          if (value!==bonnereponse) {         
            setClasse("mauvaiseReponse");           
          } else {setVictoire(true)}     
        setClick(true)
        }
      };
    
      useEffect(() => {
        if (click) {
            value===bonnereponse && setClasse("bonneReponse");
        }
      }, [click]);


    return (
        <div className={`reponseAngl ${classe}`} onClick={handleClick}>
            {value}
        </div>
    );
};

export default MotAng;