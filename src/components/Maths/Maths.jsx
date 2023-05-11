import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import ConsigneMath from "./ConsigneMath.jsx";
import JeuMaths from "./JeuMaths.jsx";
import EndMaths from "./EndMath.jsx";
import { useState } from "react";

const Maths = () => {

    const [count, setCount] = useState(0);
    const [gameStartMath,setgameStartMath]=useState(false);
    const handleGameStartMath = () => {
      setgameStartMath(true)             
    };

  return (
    <div className="maths">
      <Header color="mathsColor" subject="Maths" count={count}/>
      <main className="main-page">
        {gameStartMath? <JeuMaths setCount={setCount}/> : <ConsigneMath handleGameStartMath={handleGameStartMath}/>}
      </main>
      <Footer color="mathsColor" />
    </div>
  );
};

export default Maths;
