import coral from "../../assets/images/coral.png";
import { useState } from "react";
import JeuFr from "./JeuFr";

const ConsigneFr = ({ setCount, count }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickisClicked = () => {
    setCount((c) => c + 1);
    setIsClicked(true);
  };

  return (
    <div className="Consigne">
      {!isClicked ? (
        <>
          <img src={coral} alt="coral" className="Consigne_img" />
          <div className="Consigne_text">
            <h2 className="Consigne_h2">
              Bienvenue dans le parcours Français !
            </h2>
            <br />
            <br />
            <p className="Consigne_p">Résous 10 anagrammes !</p> <br />
          </div>
          <button className="Francais_button" onClick={handleClickisClicked}>
            Commencer
          </button>
          <p className="Consigne_anagram">
            * Une anagramme est un jeu de mots amusant <br /> où tu mélanges les
            lettres d'un mot pour en former un autre !
          </p>
        </>
      ) : (
        <JeuFr setCount={setCount} count={count} />
      )}
    </div>
  );
};

export default ConsigneFr;
