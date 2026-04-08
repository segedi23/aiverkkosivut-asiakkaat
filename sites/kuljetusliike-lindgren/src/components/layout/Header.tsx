import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { business } from '../../data/siteContent'
import { cn } from '../../utils/cn'

const navigation = [
  { label: 'Etusivu', to: '/' },
  { label: 'Palvelut', to: '/palvelut' },
  { label: 'Kalusto', to: '/kalusto' },
  { label: 'Muutto-opas', to: '/muutto-opas' },
  { label: 'Yritys', to: '/tietoa' },
  { label: 'Historia', to: '/historia' },
  { label: 'Yhteystiedot', to: '/yhteystiedot' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="hidden bg-[var(--brand-blue-dark)] text-xs text-white/85 sm:block">
        <div className="shell flex items-center justify-between gap-4 py-2">
          <span>{business.fullAddress}</span>
          <a
            href={business.phoneLink}
            className="flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-white/80"
          >
            <Phone className="h-3 w-3" />
            {business.phoneDisplay}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-[var(--brand-blue)] shadow-[0_2px_12px_rgba(0,0,0,0.18)]">
        <div className="shell flex h-16 items-center justify-between gap-6">
          <Link to="/" className="shrink-0" aria-label={business.brandName}>
            <img src="/images/logo.png" alt={business.brandName} className="h-10 w-auto" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <a
              href={business.phoneLink}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white/90 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
            <Link
              to="/yhteystiedot"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[var(--brand-blue-dark)] transition-colors hover:bg-slate-100"
            >
              Pyydä tarjous
            </Link>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Sulje valikko' : 'Avaa valikko'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setOpen(false)}>
          <div
            className="absolute inset-x-0 top-[104px] border-t border-white/10 bg-[var(--brand-blue)] shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="shell grid gap-1 py-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                      isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-3 grid gap-2 border-t border-white/10 pt-3">
                <a
                  href={business.phoneLink}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white/10 py-3 text-sm font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  {business.phoneDisplay}
                </a>
                <Link
                  to="/yhteystiedot"
                  className="flex items-center justify-center rounded-xl bg-white py-3 text-sm font-bold text-[var(--brand-blue-dark)]"
                  onClick={() => setOpen(false)}
                >
                  Pyydä tarjous
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
