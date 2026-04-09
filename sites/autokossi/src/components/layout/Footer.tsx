import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, services } from '../../data/siteContent'

function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] text-white">
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="grid gap-4">
            <img src="/images/logo.png" alt="Autokossi" className="h-10 w-auto rounded bg-white p-2" />
            <p className="max-w-sm text-sm leading-7 text-white/75">{business.intro}</p>
          </div>

          <div>
            <h3 className="font-[var(--font-display)] text-xl">Palvelut</h3>
            <div className="mt-4 grid gap-2 text-sm text-white/75">
              {services.slice(0, 8).map((service) => (
                <Link key={service.slug} to="/palvelut" className="hover:text-white">
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-[var(--font-display)] text-xl">Yhteystiedot</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/75">
              <a href={business.phoneLink} className="inline-flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 text-[var(--brand-accent)]" />
                {business.phoneDisplay}
              </a>
              <a href={business.emailLink} className="inline-flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4 text-[var(--brand-accent)]" />
                {business.email}
              </a>
              <a href={business.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                <MapPin className="h-4 w-4 text-[var(--brand-accent)]" />
                {business.fullAddress}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-xs text-white/55">
          © 2026 Kori- ja Konekorjaamo Kossi Ky · Y-tunnus 0672296-0
        </div>
      </div>
    </footer>
  )
}

export default Footer
