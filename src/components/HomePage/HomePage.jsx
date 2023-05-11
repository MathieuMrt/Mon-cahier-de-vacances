import React from "react";
import NavBar from "./NavBar";
import vague from "../../assets/images/vague.webp";
import crabe from "../../assets/images/crabe.png";

const HomePage = () => {
  return (
    <div className="home">
      <div className="titre">
        <h1>Bienvenue sur ton cahier de vacances !</h1>
      </div>
      <p className="start-texte">Pour commencer, sélectionne une matière !</p>
      <NavBar />
      <img className="image-vague" src={vague} alt="vague" />
      <img className="image-crabe" src={crabe} alt="crabe" />
    </div>
  );
};

export default HomePage;
