import ice from "../../assets/images/ice-cream.png";
import JSConfetti from 'js-confetti'

const EndEn = () => {
  const jsConfetti = new JSConfetti()

  jsConfetti.addConfetti()
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
        <button className="Anglais_button_retourHome">Accueil</button>
        <button className="Anglais_button">Suivant</button>
      </div>
    </div>
  );
};

export default EndEn;
