import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { business, navigation } from '../../data/siteContent'

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-[var(--bg-dark)] text-[var(--brand-accent)]">
        <div className="shell py-2 text-center text-xs font-medium tracking-wide">
          Ma–Pe 8–16 · Kiuruvesi · Perheyritys vuodesta 1976
        </div>
      </div>

      <header className="border-b border-[var(--line)] bg-[var(--surface-light)]/95 backdrop-blur">
        <div className="shell flex h-18 items-center justify-between gap-4 py-2">
          <Link to="/" className="shrink-0 group" aria-label="Autokossi etusivu">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--brand-primary)] text-white shadow-sm transition-transform group-hover:scale-105">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/>
                  <circle cx="6.5" cy="16.5" r="2.5"/>
                  <circle cx="16.5" cy="16.5" r="2.5"/>
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-xl font-bold tracking-wider text-[var(--text-strong)]">
                  AUTOKOSSI
                </span>
                <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--brand-accent)]">
                  Kiuruvesi · 1976
                </span>
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  [
                    'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                    isActive
                      ? 'bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]'
                      : 'text-[var(--text-body)] hover:bg-[var(--brand-primary-soft)] hover:text-[var(--brand-primary)]',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a
            href={business.phoneLink}
            className="hidden items-center gap-2 rounded-full bg-[var(--brand-primary)] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-primary-dark)] lg:inline-flex"
          >
            <Phone className="h-4 w-4" />
            0400 654 758
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] bg-white text-[var(--text-strong)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Sulje valikko' : 'Avaa valikko'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-[rgba(10,25,41,0.66)] lg:hidden" onClick={() => setOpen(false)}>
          <div
            className="absolute inset-x-4 top-24 rounded-2xl border border-[var(--line)] bg-[var(--surface-light)] p-4 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <nav className="grid gap-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    [
                      'rounded-xl px-4 py-3 text-sm font-semibold transition-colors',
                      isActive
                        ? 'bg-[var(--brand-primary)] text-white'
                        : 'text-[var(--text-body)] hover:bg-[var(--brand-primary-soft)] hover:text-[var(--brand-primary)]',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <a
              href={business.phoneLink}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--brand-accent)] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-accent-dark)]"
            >
              <Phone className="h-4 w-4" />
              0400 654 758
            </a>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Header
