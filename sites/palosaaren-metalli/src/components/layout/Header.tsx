import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { business } from '../../data/siteContent'
import { cn } from '../../utils/cn'
import { BrandLogo } from '../ui/BrandLogo'

const navigation = [
  { label: 'Etusivu', to: '/' },
  { label: 'Palvelut', to: '/palvelut' },
  { label: 'Omat tuotteet', to: '/omat-tuotteet' },
  { label: 'Konekanta', to: '/konekanta' },
  { label: 'Yhteystiedot', to: '/yhteystiedot' },
]

const companyNavigation = [
  { label: 'Historia', to: '/historia' },
  { label: 'Sertifikaatit', to: '/sertifikaatit' },
  { label: 'Rekry', to: '/rekry' },
  { label: 'Kuvagalleria', to: '/kuvagalleria' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [desktopCompanyOpen, setDesktopCompanyOpen] = useState(false)
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false)
  const { pathname } = useLocation()

  const isCompanyRoute = companyNavigation.some((item) => item.to === pathname)

  useEffect(() => {
    setOpen(false)
    setDesktopCompanyOpen(false)
    setMobileCompanyOpen(false)
  }, [pathname])

  return (
    <>
      <div className="hidden bg-[var(--bg-dark)] text-xs text-white/80 sm:block">
        <div className="shell flex items-center justify-between gap-4 py-2">
          <span>{business.fullAddress}</span>
          <div className="flex items-center gap-5">
            <span>{business.openingSummary}</span>
            <a href={business.phoneLink} className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[var(--brand-blue)]">
              <Phone className="h-3 w-3" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/95 backdrop-blur-sm">
        <div className="shell flex h-[72px] items-center justify-between gap-4">
          <Link to="/" className="shrink-0" aria-label={business.brandName}>
            <BrandLogo imageClassName="text-lg sm:text-xl" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.slice(0, 4).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-[var(--brand-blue-soft)] text-[var(--brand-blue-dark)]'
                      : 'text-[var(--text-soft)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-strong)]',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setDesktopCompanyOpen(true)}
              onMouseLeave={() => setDesktopCompanyOpen(false)}
            >
              <button
                className={cn(
                  'inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  isCompanyRoute || desktopCompanyOpen
                    ? 'bg-[var(--brand-blue-soft)] text-[var(--brand-blue-dark)]'
                    : 'text-[var(--text-soft)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-strong)]',
                )}
                onClick={() => setDesktopCompanyOpen((value) => !value)}
                aria-expanded={desktopCompanyOpen}
                aria-haspopup="menu"
              >
                Yritys
                <ChevronDown className={cn('h-4 w-4 transition-transform', desktopCompanyOpen ? 'rotate-180' : '')} />
              </button>

              {desktopCompanyOpen ? (
                <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-2xl border border-[var(--line)] bg-white p-2 shadow-xl">
                  {companyNavigation.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        cn(
                          'block rounded-xl px-3 py-2 text-sm font-medium transition-colors',
                          isActive
                            ? 'bg-[var(--brand-blue-soft)] text-[var(--brand-blue-dark)]'
                            : 'text-[var(--text-soft)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-strong)]',
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              ) : null}
            </div>

            <NavLink
              to={navigation[4].to}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-[var(--brand-blue-soft)] text-[var(--brand-blue-dark)]'
                    : 'text-[var(--text-soft)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-strong)]',
                )
              }
            >
              {navigation[4].label}
            </NavLink>
          </nav>

          <Link
            to="/yhteystiedot"
            className="hidden rounded-full bg-[var(--brand-blue)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-blue-dark)] lg:inline-flex"
          >
            Pyydä tarjous
          </Link>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] text-[var(--text-strong)] transition-colors hover:bg-[var(--surface-soft)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Sulje valikko' : 'Avaa valikko'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-black/45 lg:hidden" onClick={() => setOpen(false)}>
          <div
            className="absolute inset-x-0 top-[72px] border-t border-[var(--line)] bg-white shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="shell grid gap-2 py-4">
              {navigation.slice(0, 4).map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                      isActive
                        ? 'bg-[var(--brand-blue-soft)] text-[var(--brand-blue-dark)]'
                        : 'text-[var(--text-soft)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-strong)]',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="rounded-xl border border-[var(--line)]">
                <button
                  className={cn(
                    'flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium transition-colors',
                    isCompanyRoute || mobileCompanyOpen
                      ? 'bg-[var(--brand-blue-soft)] text-[var(--brand-blue-dark)]'
                      : 'text-[var(--text-soft)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-strong)]',
                  )}
                  onClick={() => setMobileCompanyOpen((value) => !value)}
                  aria-expanded={mobileCompanyOpen}
                >
                  Yritys
                  <ChevronDown className={cn('h-4 w-4 transition-transform', mobileCompanyOpen ? 'rotate-180' : '')} />
                </button>

                {mobileCompanyOpen ? (
                  <div className="grid gap-1 border-t border-[var(--line)] p-2">
                    {companyNavigation.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          cn(
                            'block rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                            isActive
                              ? 'bg-[var(--brand-blue-soft)] text-[var(--brand-blue-dark)]'
                              : 'text-[var(--text-soft)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-strong)]',
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                ) : null}
              </div>

              <NavLink
                to={navigation[4].to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                    isActive
                      ? 'bg-[var(--brand-blue-soft)] text-[var(--brand-blue-dark)]'
                      : 'text-[var(--text-soft)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-strong)]',
                  )
                }
              >
                {navigation[4].label}
              </NavLink>

              <Link
                to="/yhteystiedot"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-[var(--brand-blue)] px-4 py-3 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Pyydä tarjous
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
