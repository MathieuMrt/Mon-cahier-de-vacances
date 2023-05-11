import React from 'react';
import {useState, useEffect} from 'react';

const ReponseCapitale = () => {
    const [classe, setClasse] = useState("")
    const capitale = "Madrid"
    

    const handleClick = () => {
        setClasse("mauvaiseReponse")
    }

    return (
        <div className = "reponse-capitale">
           <span className={`Capitale ${classe}`} onClick={handleClick}>{capitale}</span>
        </div>
    );
};

export default ReponseCapitale;