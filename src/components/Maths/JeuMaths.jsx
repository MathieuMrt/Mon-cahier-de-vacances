import React from 'react';
import { useState } from "react";

const JeuMaths = ({setCount}) => {

    const [classeMath, setClasseMath] = useState("")

    const [value1, setvalue1] = useState(Math.floor(Math.random()* (90 - 1)) + 1);
    const [value2, setvalue2] = useState(Math.floor(Math.random()* (90 - 1)) + 1);

    const handleClickMath = function (e) {
        e.preventDefault()
        setCount (c => c + 1)
        setvalue1(Math.floor(Math.random()* (50 - 15)) + 1);
        setvalue2(Math.floor(Math.random()* (14 - 1)) + 1);
    }

    const sous = (a, b) => a - b;
    const goodSous = sous(value1, value2);
    const sum = (a, b) => a + b;
    const goodSum = sum(value1, value2);
    const multi = (a, b) => a * b;
    const goodMulti = multi(value1, value2)

    const [answerSous, setAnswerSous] = useState ("");
    function handleChangeSous(e) {
        setAnswerSous(e.target.value);
        if (e.target.value == goodSous) {
            setClasseMath("bonneReponse")
        }
        else {
            setClasseMath("mauvaiseReponse")
        }
      }

    const [answerSum, setAnswerSum] = useState ("");
    function handleChangeSum(e) {
        setAnswerSum(e.target.value);
        if (e.target.value == goodSum) {
            setClasseMath("bonneReponse")
        }
        else {
            setClasseMath("mauvaiseReponse")
        }
      }

    const [answerMulti, setAnswerMulti] = useState ("");
    function handleChangeMulti(e) {
          setAnswerMulti(e.target.value);
          if (e.target.value == goodMulti) {
              setClasseMath("bonneReponse")
          }
          else {
              setClasseMath("mauvaiseReponse")
          }
        }


    return (
        <div className="jeu-maths">
            <div className ="soustraction">
                <h3>Quel est le résultat de cette soustraction?</h3>
                <p>{value1} - {value2} = </p>
                <input className= {classeMath} type="text" value={answerSous} onChange={handleChangeSous}/>
                <button onClick={handleClickMath}>Suivant</button>
            </div>
            <div className ="addition">
                <h3>Quel est le résultat de cette addition?</h3>
                <p>{value1} + {value2} = </p>
                <input className= {classeMath} type="text" value={answerSum} onChange={handleChangeSum}/>
                <button onClick={handleClickMath}>Suivant</button>
            </div>
            <div className ="multiplication">
                <h3>Quel est le résultat de cette multiplication?</h3>
                <p>{value1} x {value2} = </p>
                <input className= {classeMath} type="text" value={answerMulti} onChange={handleChangeMulti}/>
                <button onClick={handleClickMath}>Suivant</button>
            </div>
        </div>
    );
};

export default JeuMaths;