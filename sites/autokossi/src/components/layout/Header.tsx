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
      <div className="bg-[#1F1E1F] text-white/85">
        <div className="shell flex items-center justify-between gap-4 py-2 text-xs font-medium">
          <span>Ma–Pe 8–16 · Kiuruvesi · Perheyritys vuodesta 1976</span>
          <a
            href={business.emailLink}
            className="hidden text-white/70 hover:text-white sm:inline-block"
          >
            {business.email}
          </a>
        </div>
      </div>

      {/* Main header — tumma kuten alkuperäisessä sivussa (#39383A). Valkoinen
          Autokossi-logo näkyy luonnollisesti tummalla pohjalla. */}
      <header className="bg-[#39383A] text-white">
        <div className="shell flex h-20 items-center justify-between gap-4">
          <Link to="/" className="shrink-0" aria-label="Autokossi etusivu">
            <img
              src="/images/logo.png"
              alt="Autokossi — Kori- ja Konekorjaamo Kossi Ky"
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  [
                    'rounded-md px-4 py-2 text-sm font-semibold transition-colors',
                    isActive
                      ? 'bg-[var(--brand-primary-dark)] text-white'
                      : 'text-white/85 hover:bg-white/10 hover:text-white',
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 bg-white/10 text-white lg:hidden"
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
