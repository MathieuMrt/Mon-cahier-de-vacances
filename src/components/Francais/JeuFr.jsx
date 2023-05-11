import React from "react";
import coral from "../../assets/images/coral.png";
import { useState } from "react";

const JeuFr = () => {
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

  const handleClickJeuFr = () => {
    console.log("lol");
    setIndex((e) => (e + 1) % blendedArray.length);
  };

  console.log(mots[0]);

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
  const blendedArray = blendLetters(mots);
  console.log(blendedArray);

  return (
    <div className="Consigne">
      <div className="JeuFr">
        <img src={coral} alt="coral" className="Consigne_img" />
        <p className="JeuFr_mot">{blendedArray[index]}</p>
        <input type="text" className="JeuFr_input"></input>
      </div>
      <button className="Francais_button" onClick={handleClickJeuFr}>
        Suivant
      </button>
    </div>
  );
};

export default JeuFr;
