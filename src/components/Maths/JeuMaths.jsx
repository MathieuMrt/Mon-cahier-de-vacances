import React from 'react';
import { useState } from "react";

const JeuMaths = ({setCount}) => {

    const [classeMath, setClasseMath] = useState("")
    const [titleMath, setTitleMath] = useState("Quel est le résultat de ce calcul?")

    const [value1, setvalue1] = useState(Math.floor(Math.random()* (90 - 1)) + 1);
    const [value2, setvalue2] = useState(Math.floor(Math.random()* (90 - 1)) + 1);
    const [calcul, setCalcul] = useState("-");

    const operators = ["-", "+", "*"];
    const randomIndex = Math.floor(Math.random() * operators.length);
    const randomOperator = operators[randomIndex];

    const handleClickNext = () => {
        setCount (c => c + 1)
        setvalue1(Math.floor(Math.random()* (50 - 15)) + 15);
        setvalue2(Math.floor(Math.random()* (14 - 1)) + 1);
        setCalcul(randomOperator);
        setClasseMath("");
        setTitleMath("Quel est le résultat de ce calcul?");
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

    const [answer, setAnswer] = useState ("");

    function handleChangeCalc(e) {
        setAnswer(e.target.value);
      }

    const handleClickOK = () => {
      if (answer == goodAnswer) {
        setClasseMath("bonneReponse");
        setTitleMath("Bravo!");
      }
      else {
        setClasseMath("mauvaiseReponse");
        setTitleMath("Oups!");
      }
    }

    return (
        <div className="jeu-maths">
            <div className ="question">
                <h3>{titleMath}</h3>
                <p>{value1} {calcul} {value2} = </p>
                <input className= {classeMath} type="text" value={answer} onChange={handleChangeCalc}/>
                <div className= "buttons">
                <button className = "boutonOKJeu" onClick={handleClickOK}>OK</button>
                <button className = "boutonNextJeu" onClick={handleClickNext}>Suivant</button>
                </div>
            </div>
        </div>
    );
};

export default JeuMaths;