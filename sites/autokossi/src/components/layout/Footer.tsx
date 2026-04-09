import { Mail, MapPin, Phone, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, navigation, openingHours } from '../../data/siteContent'

function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] text-white">
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brändi */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3" aria-label="Autokossi etusivu">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--brand-accent)] text-white">
                <Wrench className="h-6 w-6" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-[var(--font-display)] text-xl font-bold tracking-wider text-white">
                  AUTOKOSSI
                </span>
                <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--brand-accent)]">
                  Kiuruvesi · 1976
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
              Kori- ja Konekorjaamo Kossi Ky. Autoalan palveluita jo 49 vuotta.
            </p>
          </div>

          {/* Navigaatio */}
          <div>
            <h3 className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-wider text-white/90">
              Sivusto
            </h3>
            <div className="mt-4 grid gap-2 text-sm text-white/75">
              {navigation.map((item) => (
                <Link key={item.to} to={item.to} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Yhteystiedot */}
          <div>
            <h3 className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-wider text-white/90">
              Yhteystiedot
            </h3>
            <div className="mt-4 grid gap-3 text-sm text-white/75">
              <a href={business.phoneLink} className="inline-flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 text-[var(--brand-accent)]" />
                {business.phoneDisplay}
              </a>
              <a href={business.emailLink} className="inline-flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4 text-[var(--brand-accent)]" />
                {business.email}
              </a>
              <a
                href={business.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-start gap-2 hover:text-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-accent)]" />
                <span>
                  {business.addressStreet}
                  <br />
                  {business.postalCode} {business.city}
                </span>
              </a>
            </div>
          </div>

          {/* Aukioloajat */}
          <div>
            <h3 className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-wider text-white/90">
              Aukioloajat
            </h3>
            <div className="mt-4 grid gap-2 text-sm text-white/75">
              {openingHours.map((item) => (
                <div key={item.short} className="flex items-center justify-between gap-4">
                  <span>{item.short}</span>
                  <span className="font-medium text-white/90">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/55 md:flex-row md:items-center">
          <p>© 2026 Kori- ja Konekorjaamo Kossi Ky · Y-tunnus 0672296-0</p>
          <div className="flex items-center gap-4">
            <Link to="/tietosuoja" className="hover:text-white">
              Tietosuojaseloste
            </Link>
            <span>Autoalan palveluita jo vuodesta 1976</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
