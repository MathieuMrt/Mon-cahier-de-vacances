import coral from "../../assets/images/coral.png";
import { useNavigate } from "react-router-dom";
import JSConfetti from 'js-confetti'



const EndFr = () => {
  const jsConfetti = new JSConfetti()

  jsConfetti.addConfetti({
    emojis: ['🦄']
  })
  const navigate = useNavigate();

  return (
    <div className="Consigne">
      <img src={coral} alt="coral" className="Consigne_img" />
      <div className="Consigne_text">
        <h2 className="Consigne_h2">✨ Bravo ✨</h2>
        <br />
        <br />
        <p className="Consigne_p">Tu as fini le parcours Français !</p>
      </div>
      <div className="Consigne_container_buttons_endPage">
        <button className="Francais_button" onClick={() => navigate(-1)}>
          Accueil
        </button>
      </div>
    </div>
  );
};

export default EndFr;
