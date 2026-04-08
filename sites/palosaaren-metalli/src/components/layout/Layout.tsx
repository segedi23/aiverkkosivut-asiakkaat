import { Outlet } from 'react-router-dom'
import { ScrollToHash } from '../../utils/ScrollToHash'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text-strong)]">
      <ScrollToHash />
      <Header />
      <main className="pb-[64px] lg:pb-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
