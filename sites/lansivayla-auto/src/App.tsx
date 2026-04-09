import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import NosturihuoltoPage from './pages/NosturihuoltoPage'
import NotFoundPage from './pages/NotFoundPage'
import PalvelutPage from './pages/PalvelutPage'
import VaraosatPage from './pages/VaraosatPage'
import YhteystiedotPage from './pages/YhteystiedotPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="palvelut" element={<PalvelutPage />} />
        <Route path="nosturihuolto" element={<NosturihuoltoPage />} />
        <Route path="varaosat" element={<VaraosatPage />} />
        <Route path="yhteystiedot" element={<YhteystiedotPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
