import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, openingHours, services } from '../../data/siteContent'

const navigation = [
  { label: 'Etusivu', to: '/' },
  { label: 'Palvelut', to: '/palvelut' },
  { label: 'Kalusto', to: '/kalusto' },
  { label: 'Muutto-opas', to: '/muutto-opas' },
  { label: 'Yritys', to: '/tietoa' },
  { label: 'Historia', to: '/historia' },
  { label: 'Yhteystiedot', to: '/yhteystiedot' },
]

export function Footer() {
  return (
    <footer className="bg-[var(--brand-blue)] text-white">
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
          <div className="grid gap-5">
            <div>
              <img src="/images/logo.png" alt={business.brandName} className="h-12 w-auto" />
              <div className="mt-3 text-sm text-white/70">{business.tagline}</div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/75">{business.intro}</p>
            <div className="grid gap-2 text-sm text-white/80">
              <a href={business.phoneLink} className="flex items-center gap-2 transition-colors hover:text-white">
                <Phone className="h-4 w-4" />
                {business.phoneDisplay}
              </a>
              <a href={business.emailLink} className="flex items-center gap-2 transition-colors hover:text-white">
                <Mail className="h-4 w-4" />
                {business.email}
              </a>
              <a
                href={business.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <MapPin className="h-4 w-4" />
                {business.fullAddress}
              </a>
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">Sivut</div>
            <div className="grid gap-2.5 text-sm text-white/80">
              {navigation.map((item) => (
                <Link key={item.to} to={item.to} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">Palvelut</div>
            <div className="grid gap-2.5 text-sm text-white/80">
              {services.map((service) => (
                <Link key={service.slug} to="/palvelut" className="transition-colors hover:text-white">
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">Aukioloajat</div>
            <div className="grid gap-2 text-sm text-white/80">
              {openingHours.map((item) => (
                <div key={item.short} className="flex justify-between gap-4">
                  <span>{item.short}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/15 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{business.legalName}</p>
          <p>
            © {new Date().getFullYear()} {business.brandName}
          </p>
        </div>
      </div>
    </footer>
  )
}
