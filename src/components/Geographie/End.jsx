import sun from "../../assets/images/sun.png";
import { useNavigate } from "react-router-dom";
import JSConfetti from 'js-confetti'

const End = () => {
  const jsConfetti = new JSConfetti()

  jsConfetti.addConfetti()
  const navigate = useNavigate();
  return (
    <div className="Consigne">
      <img src={sun} alt="sun" className="Consigne_img" />
      <div className="Consigne_text">
        <h2 className="Consigne_h2">✨ Bravo ✨</h2>
        <br />
        <br />
        <p className="Consigne_p">Tu as fini le parcours Géographie !</p>
      </div>
      <button className="Consigne_button" onClick={() => navigate("/")}>
        Accueil
      </button>
    </div>
  );
};

export default End;
