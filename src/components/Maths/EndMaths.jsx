import crabe from "../../assets/images/crabe.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import JSConfetti from 'js-confetti'

const EndMaths = () => {

  const navigate = useNavigate();

  const [visibilityHome, setVisibilityHome] = useState("hiddenButton");

  const [consigneH2, setConsigneH2] = useState("✨ Bravo ✨!");
  const [consigneP, setConsigneP] = useState("Tu as fini le parcours Maths !");  


  useEffect(() => {
    const jsConfetti = new JSConfetti()

    jsConfetti.addConfetti({
      emojis: ['⚡️']
    })

    const timer = setTimeout(() => {
      setConsigneH2("Le sais-tu?");
      setConsigneP("En 1645, la première machine à calculer, introduite au grand public, la pascaline, fait son apparition pour les additions et soustractions. Inventée par Blaise Pascal, elle lance le développement des machines à calculer.");
      setVisibilityHome("visibleButton");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="Consigne">
      <img src={crabe} alt="crabe" className="Consigne_img" />
      <div className="Consigne_text">
        <h2 className="Consigne_h2">{consigneH2}</h2>
        <br />
        <br />
        <p className="Consigne_p">{consigneP}</p>
      </div>
        <button className={`Maths_button ${visibilityHome}`} onClick={() => navigate(-1)}>Accueil</button>
    </div>
  );
};

export default EndMaths;
