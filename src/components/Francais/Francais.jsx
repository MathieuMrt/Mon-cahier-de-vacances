import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const Francais = ({ color }) => {
  return (
    <div className="francais">
      <Header color="francaisColor" subject="Français" />
      <main className="main-page"></main>
      <Footer color="francaisColor" />
    </div>
  );
};

export default Francais;
