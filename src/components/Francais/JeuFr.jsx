import React from "react";
import coral from "../../assets/images/coral.png";
import { useState, useMemo } from "react";
import EndFr from "./EndFr";


const JeuFr = ({setCount, count}) => {

    const mots = [
        "baleine",
        "parasol",
        "vacances",
        "croisière",
        "barbecue",
        "catamaran",
        "randonnée",
        "escalade",
        "valise",
        "paysage",
      ];
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");

  const handleClickJeuFr = () => {
    setCount (c => c + 1)
    setIndex((e) => (e + 1));
  };

  const handleChangeJeuFR = (e) => {
    setValue(e.target.value)
  }



  const blendLetters = (mots) => {
    var blendedMots = mots.map((mot) => {
      const letter = mot.split("");

      for (let i = letter.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = letter[i];
        letter[i] = letter[j];
        letter[j] = temp;
      }
      const blendedMot = letter.join("");

      return blendedMot;
    });
    return blendedMots;
  };

  const blendedArray = useMemo(() => {
    const mots = [
      "baleine",
      "parasol",
      "vacances",
      "croisière",
      "barbecue",
      "catamaran",
      "randonnée",
      "escalade",
      "valise",
      "paysage",
    ];
    return blendLetters(mots);
  }, []);


  return (
    <div className="Consigne">
        {count !== 11 ?
        <>
      <div className="JeuFr">
        <img src={coral} alt="coral" className="Consigne_img" />
        <p className="JeuFr_mot">{blendedArray[index]}</p>
        <p className="JeuFr_mot">=</p>
        <input type="text" className={`${value === mots[index] ? "JeuFr_input_vert" : value === "" ? "JeuFr_input_normal" : "JeuFr_input_rouge"  }`} onChange={handleChangeJeuFR} value={value}></input>
      </div>
      <button className="Francais_button" onClick={handleClickJeuFr}>
        Suivant
      </button></> : <EndFr />}
    </div>
  );
};

export default JeuFr;
