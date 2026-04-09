import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, navigation, openingHours } from '../../data/siteContent'

export function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] text-white">
      <div className="shell py-16">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[var(--brand-primary)] text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M5 18H3v-6l2-5h9l4 5h5v6h-2"/>
                  <circle cx="7" cy="18" r="2"/>
                  <circle cx="17" cy="18" r="2"/>
                  <path d="M9 18h6"/>
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-[var(--font-display)] text-lg font-bold tracking-wide text-white">
                  LÄNSIVÄYLÄN AUTO
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60">
                  Pieksämäki · 1983
                </span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-7 text-white/70">
              Raskaan kaluston korjaamo Pieksämäellä vuodesta 1983.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/45">Sivusto</h3>
            <div className="grid gap-2 text-sm text-white/75">
              {navigation.map((item) => (
                <Link key={item.to} to={item.to} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/45">Yhteystiedot</h3>
            <div className="grid gap-3 text-sm text-white/75">
              <a href={business.phoneLink} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Phone className="h-4 w-4 text-[var(--brand-primary)]" />
                {business.phoneDisplay}
              </a>
              <a href={business.emailLink} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Mail className="h-4 w-4 text-[var(--brand-primary)]" />
                {business.email}
              </a>
              <a href={business.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-start gap-2 transition-colors hover:text-white">
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--brand-primary)]" />
                {business.fullAddress}
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/45">Aukioloajat</h3>
            <div className="grid gap-2 text-sm text-white/75">
              {openingHours.map((item) => (
                <div key={item.short} className="flex justify-between gap-4">
                  <span>{item.short}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-xs text-white/55">
          © 2026 Länsiväylän Auto ja Konekorjaamo Ky · Y-tunnus 0514694-9
        </div>
      </div>
    </footer>
  )
}
