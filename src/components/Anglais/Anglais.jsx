import React ,{useState}from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import ConsigneEn from "./ConsigneEn.jsx";
import EndEn from "./EndEn.jsx";
import JeuEng from "./JeuEng.jsx";


const Anglais = () => {
  const [gameStartAn,setGameStartAn]=useState(false)
  const [index, setIndex] = useState(0);
  const [bidon,setBidon]=useState(0)
  return (
    <div className="anglais">
      <Header color="anglaisColor" subject="Anglais" count={index+bidon}/>
      <main className="main-page">

         {gameStartAn === false && <ConsigneEn setGameStartAn={setGameStartAn} setBidon={setBidon}/> }
         {gameStartAn && <JeuEng index={index} setIndex={setIndex} bidon={bidon} setBidon={setBidon}/>}

      </main>
     
      <Footer color="anglaisColor" />
    </div>
  );
};

export default Anglais;
