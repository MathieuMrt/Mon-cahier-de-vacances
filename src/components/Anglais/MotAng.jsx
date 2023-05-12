import {useState,useEffect} from 'react';
import React from 'react';

const MotAng = ({value,bonnereponse,click,setClick, victoire, setVictoire, clicked, setClicked}) => {
    const valueMaj=(value+'').charAt(0).toUpperCase()+value.substr(1);
    const [classe, setClasse] = useState("");


    const handleClick = () => {
setClicked(true)
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
            {valueMaj}
        </div>
    );
};

export default MotAng;