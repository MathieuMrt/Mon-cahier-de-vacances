import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.scss"
import HomePage from "./components/HomePage/HomePage.jsx"
import Geographie from "./components/Geographie/Geographie.jsx"
import Francais from "./components/Francais/Francais.jsx"
import Maths from "./components/Maths/Maths.jsx"
import Anglais from "./components/Anglais/Anglais.jsx"



function App() {


  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/geographie" element={<Geographie/>} />
        <Route path="/francais" element={<Francais/>} />
        <Route path="/maths" element={<Maths/>} />
        <Route path="/anglais" element={<Anglais/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
