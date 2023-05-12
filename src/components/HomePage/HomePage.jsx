import React from "react";
import NavBar from "./NavBar";
import CrabRav from "./CrabRav";
import vague from "../../assets/images/vague.webp";
import crabe from "../../assets/images/crabe.png";
import { useState } from "react";

const HomePage = () => {

  const [crab, setCrab] = useState(false);

  const HandleCrab = () => {
    setCrab(!crab)
  }

  const HandleNoCrab = () => {
    crab && setCrab(!crab)
  }
  

  return (
    <div className="home" onClick={HandleNoCrab}>
     {crab && <CrabRav/> } 
      <div className="titre">
        <h1>Bienvenue sur ton cahier de vacances !</h1>
      </div>
      <p className="start-texte">Pour commencer, sélectionne une matière !</p>
      <NavBar />
      <img className="image-vague" src={vague} alt="vague" />
      <img className="image-crabe" src={crabe} alt="crabe" onClick={HandleCrab}/>
    </div>
  );
};

export default HomePage;
