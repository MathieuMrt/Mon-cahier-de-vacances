import React, { useState, useEffect } from "react";
import avion from "../../assets/images/avion.png";
import barrage from "../../assets/images/barrage.png";
import bateau from "../../assets/images/bateau.png";
import beurre from "../../assets/images/beurre.png";
import camion from "../../assets/images/camion.png";
import fromage from "../../assets/images/fromage.png";
import girafe from "../../assets/images/girafe.png";
import guepard from "../../assets/images/guépard.png";
import singe from "../../assets/images/singe.png";
import yaourt from "../../assets/images/yaourt.png";
import EndEn from "./EndEn";
import ImageEng from "./ImageEng";

export default function JeuEng() {
  const [index, setIndex] = useState(0);
  const [fini, setFini] = useState(false);
  const [suivant, setSuivant] = useState(false);
  const [wrongs, setWrongs] = useState([]);
  const [choix, setChoix] = useState("");
  const [victoire, setVictoire] = useState(false);

  const handleQuestion = () => {
    index < 9 ? setIndex(index + 1) : setFini(!fini);
    console.log(index);
    console.log(fini);
    setSuivant(!suivant);
  };

  let images = [
    { id: 1, name: "avion", response: "plane", url: avion },
    { id: 2, name: "barrage", response: "dam", url: barrage },
    { id: 3, name: "bateau", response: "boat", url: bateau },
    { id: 4, name: "beurre", response: "butter", url: beurre },
    { id: 5, name: "camion", response: "truck", url: camion },
    { id: 6, name: "fromage", response: "cheese", url: fromage },
    { id: 7, name: "girafe", response: "giraffe", url: girafe },
    { id: 8, name: "guepard", response: "cheetah", url: guepard },
    { id: 9, name: "singe", response: "monkey", url: singe },
    { id: 10, name: "yaourt", response: "yogurt", url: yaourt },
  ];

  let mots = [
    "Apple",
    "Book",
    "Cat",
    "Dog",
    "Elephant",
    "Flower",
    "Guitar",
    "House",
    "Internet",
    "Juice",
    "Keyboard",
    "lion",
    "mountain",
    "notebook",
    "orange",
    "penguin",
    "queen",
    "rabbit",
    "sun",
    "Tree",
  ];

  const handleReponse = (e) => {
    setChoix(e.target.id);
    if (wrongs.indexOf(choix) === -1) {
      setVictoire(true);
    } else {
      setVictoire(false);
    }
  };

  useEffect(() => {
    const temp = [];
    setVictoire(false);
    while (temp.length < 2) {
      const rand = Math.floor(Math.random() * mots.length);

      if (temp.indexOf(mots[rand]) === -1) {
        temp.push(mots[rand]);
      }
    }
    setWrongs(temp);
    console.log(wrongs);
  }, [suivant]);

  return (
    <div className="jeuAngl Consigne">
      {fini === false && (
        <ImageEng
          name={images[index].name}
          url={images[index].url}
          response={images[index].response}
        />
      )}
 <div className="motsBox">
      {fini === false &&
        wrongs.map((e) => {
          return (
            <div id={e} onClick={handleReponse} className="reponseAngl">
              {e}
            </div>
          );
        })}
        </div>   
      {fini === false && <button onClick={handleQuestion}>Suivant</button>}

      {fini && <EndEn />}
    </div>
  );
}
