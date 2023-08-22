import NavbarComponent from "./components/NavbarComponent"
import AllProjects from "./pages/AllProjects"
import HomePage from "./pages/HomePage"
import Contact from "./pages/Contact"
import { Routes, Route } from "react-router-dom"
import "./App.css";


const App = () => {
  return (
    
    <div className="App">

      <NavbarComponent/>
      
      <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/all-projects" element={<AllProjects/>} /> 
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>




    </div>
  )
}

export default App