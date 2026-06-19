
import './App.css'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'
import Navbar from './component/Navbar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/recipes/:id' element={<Recipe />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
