import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const Maths = ({ color }) => {
  return (
    <div className="maths">
      <Header color="mathsColor" subject="Maths" />
      <main className="main-page"></main>
      <Footer color="mathsColor" />
    </div>
  );
};

export default Maths;
