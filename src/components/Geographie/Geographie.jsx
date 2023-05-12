import { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Consigne from "./Consigne.jsx";
import Jeu from "./Jeu.jsx";

const Geographie = () => {
  const [count, setCount] = useState(0);
  const [apays, setApays] = useState(undefined);
  const [questionsTab, setQuestionsTab] = useState([]);
  const [questionsTabCap, setQuestionsTabCap] = useState([]);
  const [gameStart, setgameStart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const newData = await response.json();

      setApays(newData);
      console.log(newData)
    };
    fetchData();
  }, []);

  const handleReponses = () => {
    if (apays) {
      const filtEu = apays.filter(
        (e) => e.continents[0] === "Europe" && e.population > 2000000
      );

      setApays(filtEu);

      let question = [];
      const test = [];
      while (question.length <= 5) {
        const rand = Math.floor(Math.random() * filtEu.length);

        if (test.indexOf(filtEu[rand].flags.png) === -1) {
          question.push([
            {
              bonnereponse: true,
              drapeau: filtEu[rand].flags.png,
              pays: filtEu[rand].translations.fra.common,
            },
          ]);
        }

        test.push(filtEu[rand].flags.png);
      }
      for (let i = 0; i < question.length; i++) {
        let test2 = [question[i][0].drapeau];

        while (question[i].length < 4) {
          const rand2 = Math.floor(Math.random() * filtEu.length);

          if (test2.indexOf(filtEu[rand2].flags.png) === -1) {
            question[i].push({
              bonnereponse: false,
              drapeau: filtEu[rand2].flags.png,
              pays: filtEu[rand2].translations.fra.common,
            });

            test2.push(filtEu[rand2].flags.png);
          }
        }
        for (var k = question[i].length - 1; k > 0; k--) {
          var j = Math.floor(Math.random() * (k + 1)); //random index
          [question[i][k], question[i][j]] = [question[i][j], question[i][k]]; // swap
        }
      }

      setQuestionsTab(question);

      const questionCap = [];
      const testCap = [];
      while (questionCap.length <= 5) {
        const rand = Math.floor(Math.random() * filtEu.length);

        if (test.indexOf(filtEu[rand].flags.png) === -1) {
          questionCap.push([
            {
              bonnereponse: true,
              capitale: filtEu[rand].capital[0],
              pays: filtEu[rand].translations.fra.common,
            },
          ]);
        }

        testCap.push(filtEu[rand].flags.png);
      }

      for (let i = 0; i < questionCap.length; i++) {
        let test2 = [questionCap[i][0].capitale];

        while (questionCap[i].length < 4) {
          const rand2 = Math.floor(Math.random() * filtEu.length);

          if (test2.indexOf(filtEu[rand2].capital[0]) === -1) {
            questionCap[i].push({
              bonnereponse: false,
              capitale: filtEu[rand2].capital[0],
              pays: filtEu[rand2].translations.fra.common,
            });

            test2.push(filtEu[rand2].capital[0]);
          }
        }
        for (var k = questionCap[i].length - 1; k > 0; k--) {
          var j = Math.floor(Math.random() * (k + 1)); //random index
          [questionCap[i][k], questionCap[i][j]] = [
            questionCap[i][j],
            questionCap[i][k],
          ]; // swap
        }
      }

      setQuestionsTabCap(questionCap);
    }
  };

  const handleGameStart = () => {
    handleReponses();
    setgameStart(true);
  };

  return (
    <div className="geographie">
      <Header color="geoColor" subject="Géographie" count={count} />
      <main className="main-page">
        {gameStart ? (
          <Jeu
            questionsTab={questionsTab}
            questionTabCap={questionsTabCap}
            setCount={setCount}
            count={count}
          />
        ) : (
          <Consigne handleGameStart={handleGameStart} />
        )}
      </main>

      <Footer color="geoColor" />
    </div>
  );
};

export default Geographie;
