import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HistoriaPage } from './pages/HistoriaPage'
import { HomePage } from './pages/HomePage'
import { KalustoPage } from './pages/KalustoPage'
import { MuuttoOpasPage } from './pages/MuuttoOpasPage'
import { NotFoundPage } from './pages/NotFoundPage'
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
          <Route path="/tietoa" element={<AboutPage />} />
          <Route path="/muutto-opas" element={<MuuttoOpasPage />} />
          <Route path="/yhteystiedot" element={<ContactPage />} />
          <Route path="/kalusto" element={<KalustoPage />} />
          <Route path="/historia" element={<HistoriaPage />} />
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
