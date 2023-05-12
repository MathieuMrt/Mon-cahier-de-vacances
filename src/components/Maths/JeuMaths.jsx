import React from 'react';
import { useState } from "react";

const JeuMaths = ({setCount, count, handleGameEndMath}) => {

    const [classeMath, setClasseMath] = useState("")
    const [titleMath, setTitleMath] = useState("Quel est le résultat de ce calcul?")
    const [visibilityOK, setVisibilityOK] = useState("visibleButton")
    const [visibilityNext, setVisibilityNext] = useState("hiddenButton")

    const [value1, setvalue1] = useState(Math.floor(Math.random()* (50 - 15)) + 15);
    const [value2, setvalue2] = useState(Math.floor(Math.random()* (14 - 1)) + 1);
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
        handleGameEndMath();
        setVisibilityOK("visibleButton");
        setVisibilityNext("hiddenButton");
        setAnswer("");
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
      setVisibilityOK("hiddenButton");
      setVisibilityNext("visibleButton");
      
      if (answer == goodAnswer) {
        setClasseMath("bonneReponse");
        setTitleMath("Bravo!");
      }

      else {
        setClasseMath("mauvaiseReponse");
        setTitleMath(`Dommage, la réponse était ${goodAnswer}`);
      }
    }

    return (
        <div className="Consigne">
          <div className="jeu-maths">
          <h3>{titleMath}</h3>
          <div className ="question">
            <p>{value1} {calcul} {value2} </p>
            <p>=</p>
            <input className= {`input-answer ${classeMath}`} type="text" value={answer} onChange={handleChangeCalc}/>
          </div>
          <button className = {`boutonOKJeu ${visibilityOK}`} onClick={handleClickOK}>Valider</button>
          <button className = {`boutonNextJeu ${visibilityNext}`} onClick={handleClickNext}>Suivant</button>
          </div>
        </div>
    );
};

export default JeuMaths;