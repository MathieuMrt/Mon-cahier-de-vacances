import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import EndEn from "./EndEn.jsx";

const Anglais = () => {
  return (
    <div className="anglais">
      <Header color="anglaisColor" subject="Anglais" />
      <main className="main-page">
        <EndEn />
      </main>
      <Footer color="anglaisColor" />
    </div>
  );
};

export default Anglais;
