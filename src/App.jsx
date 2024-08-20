import './App.css' 
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import Recipe from './pages/Recipe/Recipe'

function App() {

  return (
    <div className='App'> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
    </div>
  )
}

export default App
