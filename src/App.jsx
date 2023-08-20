import Navbar from "./components/Navbar"
import AllProjects from "./pages/AllProjects"
import HomePage from "./pages/HomePage"
import Contact from "./pages/Contact"
import { Routes, Route } from "react-router-dom"
import Info from "./pages/Info"

const App = () => {
  return (
    
    <div className="App">

      <Navbar/>
      
      <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/all-projects" element={<AllProjects/>} /> 
        <Route path="/contact" element={<Contact/>} />
        <Route path="/info" element={<Info/>} />
        
      </Routes>




    </div>
  )
}

export default App