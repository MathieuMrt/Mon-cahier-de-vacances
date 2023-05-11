import React from "react";

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

const JeuFr = () => {
    
      const blendLetters = (mots) => {
        var blendedMots = mots.map((mot) => {
            const letter = mot.split('');
    
            for (let i = letter.length-1; i> 0 ; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = letter[i];
                letter[i] = letter[j];
                letter[j] = temp;
    
            }
        const blendedMot = letter.join('');
    
        return blendedMot;
    
        })
        return blendedMots;
      }


  console.log(blendLetters(mots))


  return  <div></div>;
};

export default JeuFr;
