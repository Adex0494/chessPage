import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Nosotros from './pages/Nosotros/Nosotros'
import Contacto from './pages/Contacto/Contacto'
import Torneos from './pages/Torneos/Torneos'
import Aprende from './pages/Aprende/Aprende'
import Directiva from './pages/Directiva/Directiva'
import Historia from './pages/Historia/Historia'
import Campeones from './pages/Campeones/Campeones'
import Estatutos from './pages/Estatutos/Estatutos'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/directiva' element={<Directiva />} />
        <Route path='/historia' element={<Historia />} />
        <Route path='/campeones' element={<Campeones />} />
        <Route path='/estatutos' element={<Estatutos />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/torneos' element={<Torneos />} />
        <Route path='/aprende' element={<Aprende />} />
      </Routes>
    </>
  )
}

export default App
