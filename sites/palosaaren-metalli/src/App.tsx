import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HistoriaPage } from './pages/HistoriaPage'
import { KonekantaPage } from './pages/KonekantaPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { KuvagalleriaPage } from './pages/KuvagalleriaPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { OmatTuotteetPage } from './pages/OmatTuotteetPage'
import { RekryPage } from './pages/RekryPage'
import { SertifikaatitPage } from './pages/SertifikaatitPage'
import { ServicesPage } from './pages/ServicesPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/palvelut" element={<ServicesPage />} />
          <Route path="/omat-tuotteet" element={<OmatTuotteetPage />} />
          <Route path="/konekanta" element={<KonekantaPage />} />
          <Route path="/historia" element={<HistoriaPage />} />
          <Route path="/rekry" element={<RekryPage />} />
          <Route path="/sertifikaatit" element={<SertifikaatitPage />} />
          <Route path="/kuvagalleria" element={<KuvagalleriaPage />} />
          <Route path="/yhteystiedot" element={<ContactPage />} />
          <Route path="/tuotteet" element={<Navigate to="/omat-tuotteet" replace />} />
          <Route path="/tietoa" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
