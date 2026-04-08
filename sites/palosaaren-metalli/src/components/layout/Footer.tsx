import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, openingHours, ownProducts, services } from '../../data/siteContent'
import { BrandLogo } from '../ui/BrandLogo'

const navigation = [
  { label: 'Etusivu', to: '/' },
  { label: 'Palvelut', to: '/palvelut' },
  { label: 'Omat tuotteet', to: '/omat-tuotteet' },
  { label: 'Kuvagalleria', to: '/kuvagalleria' },
  { label: 'Yhteystiedot', to: '/yhteystiedot' },
]

export function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] text-white">
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_1fr_1fr]">
          <div className="grid gap-5">
            <div>
              <BrandLogo className="w-fit" imageClassName="text-white" />
              <div className="mt-2 text-sm text-white/60">Koivulahti</div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/75">{business.tagline}</p>
            <div className="grid gap-2 text-sm text-white/75">
              <a href={business.phoneLink} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Phone className="h-4 w-4 text-[var(--brand-blue)]" />
                {business.phoneDisplay}
              </a>
              <a href={business.emailLink} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Mail className="h-4 w-4 text-[var(--brand-blue)]" />
                {business.email}
              </a>
              <a href={business.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <MapPin className="h-4 w-4 text-[var(--brand-blue)]" />
                {business.fullAddress}
              </a>
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/45">Sivut</div>
            <div className="grid gap-2.5 text-sm text-white/70">
              {navigation.map((item) => (
                <Link key={item.to} to={item.to} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/45">Palvelut</div>
            <div className="grid gap-2.5 text-sm text-white/70">
              {services.map((service) => (
                <Link key={service.slug} to="/palvelut" className="transition-colors hover:text-white">
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/45">Omat tuotteet</div>
            <div className="grid gap-2.5 text-sm text-white/70">
              {ownProducts.map((product) => (
                <Link key={product.name} to="/omat-tuotteet" className="transition-colors hover:text-white">
                  {product.name}
                </Link>
              ))}
            </div>
            <div className="mt-6 border-t border-white/15 pt-4 text-sm text-white/70">
              {openingHours.map((item) => (
                <div key={item.short} className="flex justify-between gap-4">
                  <span>{item.short}</span>
                  <span className={item.hours === 'Suljettu' ? 'text-white/45' : 'text-white/85'}>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/15 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>{business.legalName}</p>
          <p>© {new Date().getFullYear()} {business.brandName}</p>
        </div>
      </div>
    </footer>
  )
}
