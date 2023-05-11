import React from 'react';
import { useState } from "react";

const JeuMaths = ({setCount}) => {

    const [value1, setvalue1] = useState(Math.floor(Math.random()* (90 - 1)) + 1);
    const [value2, setvalue2] = useState(Math.floor(Math.random()* (90 - 1)) + 1);

    const handleClick = function (e) {
        e.preventDefault()
        setCount (c => c + 1)
        setvalue1(Math.floor(Math.random()* (90 - 1)) + 1);
        setvalue2(Math.floor(Math.random()* (90 - 1)) + 1);
    }

    const sum = (a, b) => a + b;
    const sous = (a, b) => a - b;
    const multi = (a, b) => a * b;

    return (
        <div className="jeu-maths">
            <div className ="soustraction">
                <h3>Quel est le résultat de cette soustraction?</h3>
                <p>{value1} - {value2} = {sous(value1, value2)}</p>
                <button onClick={handleClick}>Suivant</button>
            </div>
            <div className ="addition">
                <h3>Quel est le résultat de cette addition?</h3>
                <p>{value1} + {value2} = {sum(value1, value2)}</p>
                <button onClick={handleClick}>Suivant</button>
            </div>
            <div className ="multiplication">
                <h3>Quel est le résultat de cette multiplication?</h3>
                <p>{value1} x {value2} = {multi(value1, value2)}</p>
                <button onClick={handleClick}>Suivant</button>
            </div>
        </div>
    );
};

export default JeuMaths;