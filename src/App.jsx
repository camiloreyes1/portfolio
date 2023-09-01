import NavbarComponent from "./components/NavbarComponent"
import AllProjects from "./pages/AllProjects"
import HomePage from "./pages/HomePage"
import Contact from "./pages/Contact"
import { Routes, Route } from "react-router-dom"
import "./App.css";
import FooterComponent from "./components/FooterComponent"


const App = () => {
  return (

    
    <div className=" lh-base bg-dark text-white "  >


      <NavbarComponent/>

      <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/all-projects" element={<AllProjects/>} /> 
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>

      <FooterComponent/>

    </div>
  )
}

export default App