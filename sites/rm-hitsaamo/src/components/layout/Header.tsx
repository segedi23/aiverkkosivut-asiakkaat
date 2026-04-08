import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { cn } from '../../utils/cn'
import { BrandLogo } from '../ui/BrandLogo'

const navigation = [
  { to: '/', label: 'Etusivu' },
  { to: '/palvelut', label: 'Palvelut' },
  { to: '/referenssit', label: 'Referenssit' },
  { to: '/kuvagalleria', label: 'Kuvagalleria' },
  { to: '/yhteystiedot', label: 'Yhteystiedot' },
  { to: '/laskutus', label: 'Laskutus' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--bg-dark)] text-white shadow-[0_8px_28px_rgba(0,0,0,0.3)]">
        <div className="shell flex h-18 items-center justify-between gap-6">
          <Link to="/" className="flex items-center shrink-0" aria-label="RM-Hitsaamo">
            <BrandLogo imageClassName="text-xl sm:text-2xl" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    isActive ? 'bg-white/14 text-white' : 'text-white/75 hover:bg-white/10 hover:text-white',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/yhteystiedot"
              className="inline-flex items-center rounded-full bg-[var(--brand-blue)] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-blue-dark)]"
            >
              Pyydä tarjous
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
        <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-x-0 top-[73px] border-t border-white/10 bg-[var(--bg-dark)] shadow-xl" onClick={(e) => e.stopPropagation()}>
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
                      isActive ? 'bg-white/14 text-white' : 'text-white/75 hover:bg-white/10 hover:text-white',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/yhteystiedot"
                className="mt-3 flex items-center justify-center rounded-xl bg-[var(--brand-blue)] py-3 text-sm font-bold text-white"
                onClick={() => setOpen(false)}
              >
                Pyydä tarjous
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
