import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import PalvelutPage from './pages/PalvelutPage'
import VaihtoautotPage from './pages/VaihtoautotPage'
import VaraosatPage from './pages/VaraosatPage'
import RahoitusPage from './pages/RahoitusPage'
import AjanvarausPage from './pages/AjanvarausPage'
import YhteystiedotPage from './pages/YhteystiedotPage'
import TietosuojaPage from './pages/TietosuojaPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="palvelut" element={<PalvelutPage />} />
        <Route path="vaihtoautot" element={<VaihtoautotPage />} />
        <Route path="varaosat" element={<VaraosatPage />} />
        <Route path="rahoitus" element={<RahoitusPage />} />
        <Route path="ajanvaraus" element={<AjanvarausPage />} />
        <Route path="yhteystiedot" element={<YhteystiedotPage />} />
        <Route path="tietosuoja" element={<TietosuojaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
