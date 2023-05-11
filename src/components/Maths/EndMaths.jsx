import React from 'react';
import crabe from "../../assets/images/crabe.png";
import { useNavigate } from "react-router-dom";

const EndMaths = () => {

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
      <div className="Consigne_container_buttons_endPage">
        <button className="Maths_button_retourHome" onClick={() => navigate(-1)}>Accueil</button>
        <button className="Maths_button">Suivant</button>
      </div>
    </div>
  );
};

export default EndMaths;
