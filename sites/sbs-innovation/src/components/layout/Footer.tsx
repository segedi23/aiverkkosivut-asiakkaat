import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, openingHours, team } from '../../data/siteContent'

const navigation = [
  { to: '/', label: 'Etusivu' },
  { to: '/automaalaus', label: 'Automaalaus' },
  { to: '/mp-maalaukset', label: 'MP-maalaukset' },
  { to: '/yhteystiedot', label: 'Yhteystiedot' },
]

const postalAddress = 'Kasoorinkatu 10 as 24, 05800 Hyvinkää'

export function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] text-white">
      <div className="shell py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <p className="font-[var(--font-display)] text-2xl uppercase tracking-[0.08em]">SBS Innovation</p>
            <p className="text-sm text-white/70">Automaalaamo ja moottoripyörien erikoismaalaukset Hyvinkäällä.</p>
            {team.map((member) => (
              <a key={member.name} href={member.phoneLink} className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white">
                <Phone className="h-4 w-4 text-[var(--brand-blue)]" />
                {member.phone} ({member.name.split(' ')[0]})
              </a>
            ))}
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/45">Sivut</p>
            <div className="grid gap-2 text-sm text-white/75">
              {navigation.map((item) => (
                <Link key={item.to} to={item.to} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/45">Yhteystiedot</p>
            <div className="grid gap-2 text-sm text-white/75">
              <a href={business.emailLink} className="flex items-center gap-2 transition-colors hover:text-white">
                <Mail className="h-4 w-4 text-[var(--brand-blue)]" />
                {business.email}
              </a>
              <a href={business.mapUrl} target="_blank" rel="noreferrer" className="flex items-start gap-2 transition-colors hover:text-white">
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--brand-blue)]" />
                {business.fullAddress}
              </a>
              <p className="text-white/65">Postiosoite: {postalAddress}</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/45">Aukioloajat</p>
            <div className="grid gap-2 text-sm text-white/75">
              {openingHours.map((item) => (
                <div key={item.short} className="flex justify-between gap-4">
                  <span>{item.short}</span>
                  <span className={item.hours === 'Suljettu' ? 'text-white/45' : 'text-white/85'}>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-xs text-white/45">
          <p>(c) {new Date().getFullYear()} {business.legalName}</p>
        </div>
      </div>
    </footer>
  )
}
