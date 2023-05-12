import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import ConsigneMath from "./ConsigneMath.jsx";
import JeuMaths from "./JeuMaths.jsx";
import EndMaths from "./EndMaths.jsx";
import { useState } from "react";

const Maths = () => {

    const [visibility, setVisibility] = useState("hidden");

    const [count, setCount] = useState(0);
    const [gameStartMath,setgameStartMath]=useState(false);
    const handleGameStartMath = () => {
      setgameStartMath(true);
      setVisibility("visible");            
    };

    const [gameEndMath,setgameEndMath]=useState(false);    
    const handleGameEndMath = () => {
      if (count === 10) {
        setgameEndMath(true);
        setCount(0);
        setVisibility("hidden");
      }
    };


  return (
    <div className="maths">
      <Header color="mathsColor" subject="Maths" count={count} visibility={visibility}/>
      <main className="main-page">
      {!gameStartMath && (
        <ConsigneMath handleGameStartMath={handleGameStartMath} />
      )}
      {gameStartMath && !gameEndMath && (
        <JeuMaths setCount={setCount} count={count} handleGameEndMath={handleGameEndMath}/>
      )}
      {gameEndMath && <EndMaths/>}
      </main>
      <Footer color="mathsColor" />
    </div>
  );
};

export default Maths;
