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
import Layout from './layout/Layout'
import Noticias from './pages/Noticias/Noticias'
import Resultados from './pages/Resultados/Resultados'
import BasesTorneos from './pages/BasesTorneos/BasesTorneos'
import Clases from './pages/Clases/Clases'
import Entrenadores from './pages/Entrenadores/Entrenadores'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home />} />
          <Route path='/directiva' element={<Directiva />} />
          <Route path='/historia' element={<Historia />} />
          <Route path='/campeones' element={<Campeones />} />
          <Route path='/estatutos' element={<Estatutos />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/torneos' element={<Torneos />} />
          <Route path='/aprende' element={<Aprende />} />
          <Route path='/noticias' element={<Noticias />} />
          <Route path='/resultados' element={<Resultados />} />
          <Route path='/bases torneos' element={<BasesTorneos />} />
          <Route path='/clases' element={<Clases />} />
          <Route path='/entrenadores' element={<Entrenadores />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
