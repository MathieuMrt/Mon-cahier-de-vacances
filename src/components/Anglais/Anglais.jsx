import React ,{useState}from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import ConsigneEn from "./ConsigneEn.jsx";
import EndEn from "./EndEn.jsx";
import JeuEng from "./JeuEng.jsx";


const Anglais = () => {
  const [gameStartAn,setGameStartAn]=useState(false)

  return (
    <div className="anglais">
      <Header color="anglaisColor" subject="Anglais" />
      <main className="main-page">

         {gameStartAn === false && <ConsigneEn setGameStartAn={setGameStartAn}/> }
         {gameStartAn && <JeuEng />}

      </main>
     
      <Footer color="anglaisColor" />
    </div>
  );
};

export default Anglais;
