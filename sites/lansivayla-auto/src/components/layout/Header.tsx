import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { business, navigation } from '../../data/siteContent'
import { cn } from '../../utils/cn'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="bg-[#0b0d11] text-white/85">
        <div className="shell flex items-center justify-between gap-4 py-2 text-xs">
          <span className="hidden sm:block">Ma-Pe 07-16 · Pieksämäki · Perheyritys vuodesta 1983</span>
          <span className="sm:hidden">Ma-Pe 07-16</span>
          <a href={business.emailLink} className="text-white/80 transition-colors hover:text-white">
            {business.email}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--bg-dark)] text-white">
        <div className="shell flex h-20 items-center justify-between gap-4">
          <Link to="/" aria-label="Länsiväylän Auto etusivu" className="shrink-0 group">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[var(--brand-primary)] text-white shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M5 18H3v-6l2-5h9l4 5h5v6h-2"/>
                  <circle cx="7" cy="18" r="2"/>
                  <circle cx="17" cy="18" r="2"/>
                  <path d="M9 18h6"/>
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-[var(--font-display)] text-xl font-bold tracking-wide text-white">
                  LÄNSIVÄYLÄN AUTO
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60">
                  Ja Konekorjaamo · Pieksämäki · 1983
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
                  cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-white/15 text-white'
                      : 'text-white/80 hover:bg-white/10 hover:text-white',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a
            href={business.phoneLink}
            className="hidden whitespace-nowrap shrink-0 inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-primary-dark)] lg:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Soita {business.phoneDisplay}
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Sulje valikko' : 'Avaa valikko'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="border-b border-white/10 bg-[var(--bg-dark)] lg:hidden">
          <div className="shell grid gap-2 py-4">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-white/15 text-white'
                      : 'text-white/80 hover:bg-white/10 hover:text-white',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={business.phoneLink}
              className="whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--brand-primary)] px-4 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              <Phone className="h-4 w-4" />
              Soita {business.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
