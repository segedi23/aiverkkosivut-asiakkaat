import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { business } from '../../data/siteContent'
import { cn } from '../../utils/cn'

const navigation = [
  { to: '/', label: 'Etusivu' },
  { to: '/automaalaus', label: 'Automaalaus' },
  { to: '/mp-maalaukset', label: 'MP-maalaukset' },
  { to: '/yhteystiedot', label: 'Yhteystiedot' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--bg-dark)] text-white shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
        <div className="shell flex h-[72px] items-center justify-between gap-6">
          <Link to="/" className="shrink-0" aria-label={business.brandName}>
            <span className="font-[var(--font-display)] text-xl uppercase tracking-[0.08em] text-white sm:text-2xl">
              SBS INNOVATION
            </span>
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
                    isActive
                      ? 'bg-[var(--brand-blue)] text-white'
                      : 'text-white/80 hover:bg-white/10 hover:text-white',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <Link
              to="/yhteystiedot"
              className="inline-flex items-center rounded-full bg-[var(--brand-blue)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-blue-dark)]"
            >
              Ota yhteyttä
            </Link>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Sulje valikko' : 'Avaa valikko'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-black/55 lg:hidden" onClick={() => setOpen(false)}>
          <div
            className="absolute inset-x-0 top-[72px] border-t border-white/10 bg-[var(--bg-dark)]"
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
                      isActive
                        ? 'bg-[var(--brand-blue)] text-white'
                        : 'text-white/80 hover:bg-white/10 hover:text-white',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/yhteystiedot"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-[var(--brand-blue)] py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-blue-dark)]"
              >
                Ota yhteyttä
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
