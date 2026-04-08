import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { KuvagalleriaPage } from './pages/KuvagalleriaPage'
import { LaskutusPage } from './pages/LaskutusPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ReferenssitPage } from './pages/ReferenssitPage'
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
          <Route path="/referenssit" element={<ReferenssitPage />} />
          <Route path="/kuvagalleria" element={<KuvagalleriaPage />} />
          <Route path="/yhteystiedot" element={<ContactPage />} />
          <Route path="/laskutus" element={<LaskutusPage />} />
          <Route path="/tietoa" element={<Navigate to="/palvelut" replace />} />
          <Route path="/yritys" element={<Navigate to="/palvelut" replace />} />
          <Route path="/meista" element={<Navigate to="/palvelut" replace />} />
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
