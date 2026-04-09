import { Outlet } from 'react-router-dom'
import { ScrollToHash } from '../../utils/ScrollToHash'
import CookieBanner from '../CookieBanner'
import Footer from './Footer'
import Header from './Header'

function Layout() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text-strong)]">
      <ScrollToHash />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default Layout
