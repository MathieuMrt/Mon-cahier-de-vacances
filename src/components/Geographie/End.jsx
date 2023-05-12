import sun from "../../assets/images/sun.png";
import { useNavigate } from "react-router-dom";
import JSConfetti from 'js-confetti';
import { useState, useEffect } from "react";

const End = () => {

  const navigate = useNavigate();

  const [visibilityHome, setVisibilityHome] = useState("hiddenButton");

  const [consigneH2, setConsigneH2] = useState("✨ Bravo ✨!");
  const [consigneP, setConsigneP] = useState("Tu as fini le parcours Géographie !");

  useEffect(() => {
  const jsConfetti = new JSConfetti()

  jsConfetti.addConfetti()
  
      const timer = setTimeout(() => {
        setConsigneH2("Le sais-tu?");
        setConsigneP("Le nom de lieu le plus court au monde est Å. C’est en Norvège qu’on le trouve, sur l’île de Moskenes. «Å» signifie «rivière», mais quant à la prononciation, on vous laisse le soin de la chercher.");
        setVisibilityHome("visibleButton");
      }, 4000);
  
      return () => clearTimeout(timer);
    }, []);


  return (
    <div className="Consigne">
      <img src={sun} alt="sun" className="Consigne_img" />
      <div className="Consigne_text">
        <h2 className="Consigne_h2">{consigneH2}</h2>
        <br />
        <br />
        <p className="Consigne_p">{consigneP}</p>
      </div>
      <button className={`Consigne_button ${visibilityHome}`} onClick={() => navigate("/")}>
        Accueil
      </button>
    </div>
  );
};

export default End;
