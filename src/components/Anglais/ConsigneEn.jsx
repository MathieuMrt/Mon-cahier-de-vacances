import ice from "../../assets/images/ice-cream.png";

const ConsigneEn = ({setGameStartAn,setBidon}) => {
  console.log(setGameStartAn)
  return (
    <div className="Consigne">
      <img src={ice} alt="sun" className="Consigne_img" />
      <div className="Consigne_text">
        <h2 className="Consigne_h2">Bienvenue dans la section Anglais !</h2>
        <br />
        <br />
        <p className="Consigne_p">
          Test tes connaissances d'anglais en traduisant les 10 prochaines
          phrases
        </p>
      </div>
      <button className="Anglais_button" onClick={()=>{setGameStartAn(true);
                                                        setBidon(1)}}>Commencer</button>
    </div>
  );
};

export default ConsigneEn;
