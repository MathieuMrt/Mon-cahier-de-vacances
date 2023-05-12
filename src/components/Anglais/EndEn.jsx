import ice from "../../assets/images/ice-cream.png";
import JSConfetti from 'js-confetti'
import { useNavigate } from "react-router-dom";

const EndEn = () => {
  const jsConfetti = new JSConfetti()

  jsConfetti.addConfetti()

  const navigate = useNavigate();

  return (
    
    <div className="Consigne">
      <img src={ice} alt="coral" className="Consigne_img" />
      <div className="Consigne_text">
        <h2 className="Consigne_h2">✨ Bravo ✨</h2>
        <br />
        <br />
        <p className="Consigne_p">Tu as fini le parcours Anglais !</p>
      </div>
      <div className="Consigne_container_buttons_endPage">
        <button className="Anglais_button_retourHome" onClick={() => navigate("/")}>Accueil</button>
        
      </div>
    </div>
  );
};

export default EndEn;
