import coral from "../../assets/images/coral.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import JSConfetti from 'js-confetti'

const EndFr = () => {

  const navigate = useNavigate();

  const [visibilityHome, setVisibilityHome] = useState("hiddenButton");

  const [consigneH2, setConsigneH2] = useState("✨ Bravo ✨!");
  const [consigneP, setConsigneP] = useState("Tu as fini le parcours Français !");  

  useEffect(() => {
    const jsConfetti = new JSConfetti()
  
    jsConfetti.addConfetti({
      emojis: ['🦄']
    })
  
      const timer = setTimeout(() => {
        setConsigneH2("Le sais-tu?");
        setConsigneP("Le mot « oiseaux » est le plus long mot dans lequel aucune des lettres n’est prononcée individuellement.");
        setVisibilityHome("visibleButton");
      }, 4000);
  
      return () => clearTimeout(timer);
    }, []);

  return (
    <div className="Consigne">
      <img src={coral} alt="coral" className="Consigne_img" />
      <div className="Consigne_text">
        <h2 className="Consigne_h2">{consigneH2}</h2>
        <br />
        <br />
        <p className="Consigne_p">{consigneP}</p>
      </div>
      <div className="Consigne_container_buttons_endPage">
        <button className={`Francais_button ${visibilityHome}`} onClick={() => navigate(-1)}>
          Accueil
        </button>
      </div>
    </div>
  );
};

export default EndFr;
