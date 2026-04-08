import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, services } from '../../data/siteContent'
import { BrandLogo } from '../ui/BrandLogo'

const navigation = [
  { to: '/', label: 'Etusivu' },
  { to: '/palvelut', label: 'Palvelut' },
  { to: '/referenssit', label: 'Referenssit' },
  { to: '/kuvagalleria', label: 'Kuvagalleria' },
  { to: '/yhteystiedot', label: 'Yhteystiedot' },
  { to: '/laskutus', label: 'Laskutus' },
]

export function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] text-white">
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr]">
          <div className="grid gap-5">
            <div>
              <BrandLogo className="w-fit" imageClassName="text-2xl" />
              <p className="mt-2 text-sm text-white/62">{business.tagline}</p>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/75">
              RM-Hitsaamo Oy suunnittelee, valmistaa ja asentaa teräsrakenteita rakennusteollisuuden tarpeisiin.
              Toimipiste sijaitsee Helsingin Itä-Pakilassa.
            </p>
            <div className="grid gap-2 text-sm text-white/78">
              <a href={business.phoneLink} className="flex items-center gap-2 transition-colors hover:text-white">
                <Phone className="h-4 w-4 text-[var(--brand-orange)]" />
                {business.phoneDisplay}
              </a>
              <a href={business.emailLink} className="flex items-center gap-2 transition-colors hover:text-white">
                <Mail className="h-4 w-4 text-[var(--brand-orange)]" />
                {business.email}
              </a>
              <a href={business.mapUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
                <MapPin className="h-4 w-4 text-[var(--brand-orange)]" />
                {business.fullAddress}
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/45">Sivut</p>
            <div className="grid gap-2.5 text-sm text-white/72">
              {navigation.map((item) => (
                <Link key={item.to} to={item.to} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/45">Palvelut</p>
            <div className="grid gap-2.5 text-sm text-white/72">
              {services.map((service) => (
                <Link key={service.slug} to="/palvelut" className="transition-colors hover:text-white">
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/45">Tarjous</p>
            <p className="text-sm leading-7 text-white/72">
              Lähetä piirustukset tai kohteen perustiedot, niin palaamme tarjouslaskentaan nopeasti.
            </p>
            <Link
              to="/yhteystiedot"
              className="mt-5 inline-flex items-center rounded-full bg-[var(--brand-blue)] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-blue-dark)]"
            >
              Pyydä tarjous
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/15 pt-8 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {business.legalName} - Y-tunnus {business.businessId}
          </p>
          <p>
            © {new Date().getFullYear()} {business.brandName}
          </p>
        </div>
      </div>
    </footer>
  )
}
