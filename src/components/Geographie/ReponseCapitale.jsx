import React from "react";
import { useState, useEffect } from "react";

const ReponseCapitale = ({
  capitale,
  bonneReponse,
  click,
  setClick,
  setIsGoodAnswer,
  setClickedAnswer,
  pays,
}) => {
  const [classe, setClasse] = useState("");

  const handleClick = () => {
    if (!click) {
      if (!bonneReponse) {
        setClasse("mauvaiseReponse");
        setIsGoodAnswer(false);
      }
      setClick(true);
      setClickedAnswer(`${capitale}, qui est en ${pays}`);
    }
  };

  useEffect(() => {
    if (click) {
      bonneReponse && setClasse("bonneReponse");
    }
  }, [click]);

  return (
    <button className={`Capitale ${classe}`} onClick={handleClick}>
      {capitale}
    </button>
  );
};

export default ReponseCapitale;
