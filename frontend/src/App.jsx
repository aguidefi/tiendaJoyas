import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Joyas } from './pages/Joyas'
import { Joya } from './pages/Joya'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joyas" element={<Joyas />} />
        <Route path='/joyas/joya:id' element={<Joya />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
