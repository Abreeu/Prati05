import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import Filmes from "./pages/Filmes"
import Fav from "./pages/Fav"

function App() {
 
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Filmes />} />
        <Route path="/favoritos" element={<Fav/>} />
      </Routes>
    </Router>
    
    
  )
}

export default App