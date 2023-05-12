import ice from "../../assets/images/ice-cream.png";
import JSConfetti from 'js-confetti'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const EndEn = () => {

  const navigate = useNavigate();

  const [visibilityHome, setVisibilityHome] = useState("hiddenButton");

  const [consigneH2, setConsigneH2] = useState("✨ Bravo ✨!");
  const [consigneP, setConsigneP] = useState("Tu as fini le parcours Anglais !");  


  useEffect(() => {
  const jsConfetti = new JSConfetti()

  jsConfetti.addConfetti()

    const timer = setTimeout(() => {
      setConsigneH2("Le sais-tu?");
      setConsigneP("La phrase “The quick brown fox jumps over the lazy dog” est un pangramme : elle contient les 26 lettres de l’alphabet anglais.");
      setVisibilityHome("visibleButton");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    
    <div className="Consigne">
      <img src={ice} alt="coral" className="Consigne_img" />
      <div className="Consigne_text">
        <h2 className="Consigne_h2">{consigneH2}</h2>
        <br />
        <br />
        <p className="Consigne_p">{consigneP}</p>
      </div>
      <div className="Consigne_container_buttons_endPage">
        <button className={`Anglais_button_retourHome ${visibilityHome}`} onClick={() => navigate(-1)}>Accueil</button>
      </div>
    </div>
  );
};

export default EndEn;
