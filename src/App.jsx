import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.scss"
import Header from "./components/Header/Header.jsx"
import Comp1 from "./components/Comp1/Comp1.jsx"
import Comp2 from "./components/Comp2/Comp2.jsx"
import Footer from "./components/Footer/Footer.jsx"



function App() {


  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Comp1/>} />
        <Route path="/comp2" element={<Comp2/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
