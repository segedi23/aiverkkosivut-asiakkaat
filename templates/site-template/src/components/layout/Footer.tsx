import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, navigation, openingHours } from '../../data/siteContent'
import { BrandLogo } from '../ui/BrandLogo'

export function Footer() {
  return (
    <footer className="bg-[var(--brand-blue)] text-white">
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
          {/* Brand column */}
          <div className="grid gap-5">
            <div>
              <BrandLogo className="w-fit" imageClassName="h-8 sm:h-9" />
              <div className="mt-1 text-sm text-white/60">Friisinmäki, Espoo · Perustettu 2012</div>
              <a href="https://www.fixus.fi" target="_blank" rel="noreferrer" className="mt-3 inline-block">
                <img src="https://fixus.fi/wp-content/uploads/2024/05/Fixus_logo_rgb_120.png" alt="Fixus" className="h-8 rounded-full bg-white px-2 py-0.5" />
              </a>
            </div>
            <p className="text-sm leading-7 text-white/72 max-w-xs">
              Huollot, korjaukset ja suuntaukset kaikille automerkeille Espoon Friisinmäessä vuodesta 2012.
            </p>
            <div className="grid gap-2 text-sm text-white/75">
              <a href={business.phoneLink} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-[var(--brand-yellow)]" />
                {business.phoneDisplay}
              </a>
              <a href={business.emailLink} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-[var(--brand-yellow)]" />
                {business.email}
              </a>
              <a href={business.mapUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <MapPin className="h-4 w-4 text-[var(--brand-yellow)]" />
                {business.fullAddress}
              </a>
              <a href={business.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <ExternalLink className="h-4 w-4 text-[var(--brand-yellow)]" />
                Facebook
              </a>
            </div>
          </div>

          {/* Sivut */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-white/45 mb-4">Sivut</div>
            <div className="grid gap-2.5 text-sm text-white/70">
              {navigation.map((item) => (
                <Link key={item.to} to={item.to} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Palvelut */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-white/45 mb-4">Palvelut</div>
            <div className="grid gap-2.5 text-sm text-white/70">
              {[
                { label: 'Määräaikaishuolto', to: '/palvelut#huollot' },
                { label: 'Vuosihuolto', to: '/palvelut#huollot' },
                { label: 'Ilmastointihuolto', to: '/palvelut#huollot' },
                { label: 'Korjaamopalvelut', to: '/palvelut#korjaukset' },
                { label: 'Suuntaus', to: '/palvelut#korjaukset' },
                { label: 'Rengashotelli', to: '/palvelut#lisapalvelut' },
                { label: 'Sijaisauto', to: '/palvelut#lisapalvelut' },
                { label: 'Fixus Lasku', to: '/palvelut#lisapalvelut' },
              ].map((s) => (
                <Link key={s.label} to={s.to} className="hover:text-white transition-colors">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Aukiolo */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-white/45 mb-4">Aukioloajat</div>
            <div className="grid gap-2 text-sm text-white/70">
              {openingHours.map((item) => (
                <div key={item.day} className="flex justify-between gap-4">
                  <span>{item.short}</span>
                  <span className={item.hours === 'Suljettu' ? 'text-white/40' : 'text-white/80'}>{item.hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-white/55 leading-5">
              {business.dropoffNote}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/15 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>{business.legalName} · Y-tunnus {business.businessId}</p>
          <p>© {new Date().getFullYear()} Espoon Autohuolto</p>
        </div>
      </div>
    </footer>
  )
}
