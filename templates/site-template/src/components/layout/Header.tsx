import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { business, navigation } from '../../data/siteContent'
import { cn } from '../../utils/cn'
import { BrandLogo } from '../ui/BrandLogo'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Top info bar — hidden on mobile, visible sm+ */}
      <div className="hidden sm:block bg-[var(--bg-blue-dark)] text-white/80 text-xs">
        <div className="shell flex items-center justify-between gap-4 py-2">
          <span className="hidden sm:block">{business.addressStreet}, {business.city}</span>
          <div className="flex items-center gap-5">
            <span>Ma–Pe 07:30–17:00</span>
            <a
              href={business.phoneLink}
              className="flex items-center gap-1.5 font-semibold text-white hover:text-[var(--brand-yellow)] transition-colors"
            >
              <Phone className="h-3 w-3" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-[var(--brand-blue)] shadow-[0_2px_12px_rgba(0,0,0,0.18)]">
        <div className="shell flex h-16 items-center justify-between gap-6">
          <Link to="/" className="flex items-center shrink-0" aria-label="MW Auto Espoo">
            <BrandLogo className="px-2.5 py-1.5 sm:px-3 sm:py-2" imageClassName="h-6 sm:h-7" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                    isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:text-white hover:bg-white/10',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a href={business.phoneLink} className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white/90 hover:text-white transition-colors">
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
            <Link to="/ajanvaraus" className="rounded-full bg-[var(--brand-yellow)] px-5 py-2.5 text-sm font-bold text-[var(--bg-dark)] hover:bg-[var(--brand-yellow-dark)] transition-colors">
              Varaa aika
            </Link>
          </div>

          <button
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Sulje valikko' : 'Avaa valikko'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-x-0 top-[104px] bg-[var(--brand-blue)] border-t border-white/10 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="shell py-4 grid gap-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn('block px-4 py-3 rounded-xl text-base font-medium transition-colors', isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:text-white hover:bg-white/10')
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-3 grid gap-2 border-t border-white/10 pt-3">
                <a href={business.phoneLink} className="flex items-center justify-center gap-2 rounded-xl bg-white/10 py-3 text-sm font-semibold text-white" onClick={() => setOpen(false)}>
                  <Phone className="h-4 w-4" />
                  {business.phoneDisplay}
                </a>
                <Link to="/ajanvaraus" className="flex items-center justify-center rounded-xl bg-[var(--brand-yellow)] py-3 text-sm font-bold text-[var(--bg-dark)]" onClick={() => setOpen(false)}>
                  Varaa aika
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
