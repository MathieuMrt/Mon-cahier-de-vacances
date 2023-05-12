import coral from "../../assets/images/coral.png";
import { useState, useMemo } from "react";
import EndFr from "./EndFr";

const JeuFr = ({ setCount, count }) => {
  const [isValidate, setIsValidate] = useState(false);
  const [answerClassName, setAnswerClassName] = useState("JeuFr_input_normal");
  const [error, setError] = useState(false);
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

  const handleChangeJeuFR = (e) => {
    setValue(e.target.value);
  };

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
    return blendLetters(mots);
  }, []);

  const handleClickJeuFr = () => {
    if (value) {
      if (isValidate) {
        setCount((c) => c + 1);
        setIndex((e) => e + 1);
        setAnswerClassName("JeuFr_input_normal");
        setValue("");
      }

      if (!isValidate) {
        if (value === mots[index]) {
          setAnswerClassName("JeuFr_input_vert");
        } else {
          setAnswerClassName("JeuFr_input_rouge");
        }
      }
      setError(false);
      setIsValidate(!isValidate);
    } else {
      setError(true);
    }
  };

  return (
    <div className="boiteJeuFr">
      {error && <p className="error">Tu dois entrer une valeur !</p>}
      {!isValidate && !error && <p>Trouve l'anagramme...</p>}
      {isValidate && value === mots[index] && <p>Bravo !</p>}
      {isValidate && value !== mots[index] && (
        <p>Dommage, la réponse était {mots[index]}</p>
      )}

      {count !== 11 && (
        <>
          <div className="JeuFr">
            <img src={coral} alt="coral" className="Consigne_img" />
            <p className="JeuFr_mot">{blendedArray[index]}</p>
            <p className="JeuFr_mot">=</p>
            <input
              type="text"
              className={answerClassName}
              onChange={handleChangeJeuFR}
              value={value}
            ></input>
          </div>
          {isValidate && (
            <button className="Francais_button" onClick={handleClickJeuFr}>
              {" "}
              Suivant
            </button>
          )}
          {!isValidate && (
            <button className="Francais_button" onClick={handleClickJeuFr}>
              {" "}
              Valider
            </button>
          )}
        </>
      )}
      {count === 11 && <EndFr />}
    </div>
  );
};

export default JeuFr;
