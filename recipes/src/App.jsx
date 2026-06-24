
import './App.css'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'
import Navbar from './component/Navbar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ThemeSelector from './component/ThemeSelector'
import { useTheme } from './hooks/useTheme'

function App() {
  const { mode } = useTheme()
  return (
    <div className={ `App ${mode}` }>
    <Router>
      <Navbar />
      <ThemeSelector/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/recipes/:id' element={<Recipe />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
