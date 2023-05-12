import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import ConsigneEn from "./ConsigneEn.jsx";
import EndEn from "./EndEn.jsx";
import JeuEng from "./JeuEng.jsx";


const Anglais = () => {
  return (
    <div className="anglais">
      <Header color="anglaisColor" subject="Anglais" />
      <main className="main-page">

        <EndEn />

        {/* <ConsigneEn /> */}
        <JeuEng />

      </main>
      <Footer color="anglaisColor" />
    </div>
  );
};

export default Anglais;
