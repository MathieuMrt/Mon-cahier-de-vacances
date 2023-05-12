import React from 'react';
import crabe from "../../assets/images/crabe.png";
import { useNavigate } from "react-router-dom";
import JSConfetti from 'js-confetti'

const EndMaths = () => {
  const jsConfetti = new JSConfetti()

  jsConfetti.addConfetti({
    emojis: ['⚡️']
  })

  const navigate = useNavigate();

  return (
    <div className="Consigne">
      <img src={crabe} alt="crabe" className="Consigne_img" />
      <div className="Consigne_text">
        <h2 className="Consigne_h2">✨ Bravo ✨</h2>
        <br />
        <br />
        <p className="Consigne_p">Tu as fini le parcours Maths !</p>
      </div>
        <button className="Maths_button" onClick={() => navigate(-1)}>Accueil</button>
    </div>
  );
};

export default EndMaths;
