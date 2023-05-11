import React from 'react';
import { useState } from "react";

const JeuMaths = ({setCount}) => {

    const [value1, setvalue1] = useState(Math.floor(Math.random()* (90 - 1)) + 1);
    const [value2, setvalue2] = useState(Math.floor(Math.random()* (90 - 1)) + 1);
    const [calcul, setCalcul] = useState("-")

    const handleClickMath = function (e) {
        e.preventDefault()
        setCount (c => c + 1)
        setvalue1(Math.floor(Math.random()* (50 - 15)) + 15);
        setvalue2(Math.floor(Math.random()* (14 - 1)) + 1);
        setCalcul(["-", "+", "*"].random());
    }

    const calculator = (a, b, c) => {
        switch (b) {
          case "+":
            return a + c;
          case "-":
            return a - c;
          case "*":
            return a * c;
          default:
            return 0;
        }
      };
   
    const goodAnswer = calculator(value1, calcul, value2);

    const [classeMath, setClasseMath] = useState("")

    const [answer, setAnswer] = useState ("");
    function handleChangeCalc(e) {
        setAnswer(e.target.value);
        if (e.target.value == goodAnswer) {
            setClasseMath("bonneReponse")
        }
        else {
            setClasseMath("mauvaiseReponse")
        }
      }


    return (
        <div className="jeu-maths">
            <div className ="question">
                <h3>Quel est le résultat de ce calcul?</h3>
                <p>{value1} {calcul} {value2} = </p>
                <input className= {classeMath} type="text" value={answer} onChange={handleChangeCalc}/>
                <button onClick={handleClickMath}>Suivant</button>
            </div>
        </div>
    );
};

export default JeuMaths;