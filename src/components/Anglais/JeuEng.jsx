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
import MotAng from "./MotAng";
export default function JeuEng({index,setIndex,bidon,setBidon}) {
  
  const [fini, setFini] = useState(false);
  const [suivant, setSuivant] = useState(false);
  const [wrongs, setWrongs] = useState([]);
 const [victoire, setVictoire] = useState(false)
 const [clicked, setClicked] = useState(false)
 const [error, setError] = useState(false)
  
  const [reponses,setReponses]=useState([])
const [click, setClick] = useState(false)

  const handleQuestion = () => {
    if(clicked) {
    index < 9 ? setIndex(index + 1) : setFini(!fini);
    index===9 && setBidon(bidon+1)
    console.log(index);
    console.log(fini);
    setSuivant(!suivant);
    setClick(false)
    setVictoire(false)
    setClicked(false)
    setError(false)
  } else {setError (true)}
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



  useEffect(() => {
    const temp = [];  

    while (temp.length < 2) {
      const rand = Math.floor(Math.random() * mots.length);

      if (temp.indexOf(mots[rand]) === -1) {
        temp.push(mots[rand]);
      }
    }
    setWrongs(temp);
    const temp2 = temp
    temp2.push(images[index].response)
    
    for(var k =temp.length-1 ; k>0 ;k--){
      var j = Math.floor( Math.random() * (k + 1) ); //random index
      [temp[k],temp[j]]=[temp[j],temp[k]]; // swap
  }
  setReponses(temp2)
    console.log(wrongs);
  }, [suivant]);

  return (
    <div className="jeuAngl Consigne">
     {!fini && !click && !error && <p>Clique sur le mot qui correspond à l'image !</p>} 
     {!click && error && <p className="rouge">Tu dois choisir un mot !</p>} 
      {click && victoire && <p>Bravo !</p> }
      {click && !victoire && <p>Dommage...</p> }
      {fini === false && (
        <ImageEng
          name={images[index].name}
          url={images[index].url}
          response={images[index].response}         
        />
      )}
 <div className="motsBox">
      {fini === false &&
        reponses.map((e) => {
          return (

            <MotAng value={e} 
            bonnereponse={images[index].response}
             key={e} 
             click={click}
            setClick={setClick}
            setVictoire={setVictoire}
            victoire={victoire}
            clicked={clicked}
            setClicked={setClicked}
            />
          );
        })}
    </div>

      {fini === false && <button onClick={handleQuestion} className={click? "visible":"hidden"}>Suivant</button>}

      {fini && <EndEn />}
    </div>
  );
}
