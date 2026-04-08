import { CalendarClock, CheckCircle, Mail, Phone } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { BookingForm } from '../components/forms/BookingForm'
import { business, openingHours } from '../data/siteContent'
import { Seo } from '../utils/seo'

export function BookingPage() {
  const [searchParams] = useSearchParams()
  const initialService = searchParams.get('service')

  return (
    <>
      <Seo
        title="Ajanvaraus | Espoon Autohuolto"
        description="Varaa huoltoaika Espoon Autohuollolle verkossa. Täytä lomake tai soita suoraan — vastaamme nopeasti."
      />

      {/* Hero */}
      <section className="bg-[var(--brand-blue)] text-white">
        <div className="shell py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-yellow)] mb-3">Ajanvaraus</p>
          <h1 className="font-heading text-4xl font-bold sm:text-5xl max-w-3xl">
            Varaa huoltoaika tai kysy tarjousta.
          </h1>
          <p className="mt-5 text-lg text-white/75 max-w-xl leading-7">
            Täytä lomake ja lähetä se suoraan huollon sähköpostiin. Vaihtoehtoisesti soita tai lähetä sähköposti suoraan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={business.phoneLink} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors">
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
            <a href={business.emailLink} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors">
              <Mail className="h-4 w-4" />
              {business.email}
            </a>
          </div>
        </div>
      </section>

      {/* Main: instructions + form */}
      <section className="section-pad">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Left: info */}
          <div className="grid gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)] mb-3">Miten varaus etenee</p>
              <h2 className="font-heading text-2xl font-bold text-[var(--text-strong)] sm:text-3xl">
                Yksi lomake, selkeä rakenne, nopea vastaus.
              </h2>
            </div>

            <ul className="grid gap-3">
              {[
                { icon: CalendarClock, text: 'Valitse palvelu tai useampi, lisää auton tiedot ja toivottu ajankohta.' },
                { icon: CheckCircle, text: 'Otamme yhteyttä ja vahvistamme ajan — sijaisauto tai rengashotelli kannattaa mainita jo varauksessa.' },
                { icon: Mail, text: 'Lähetys avaa valmiin viestin sähköpostiohjelmaasi osoitteeseen ' + business.email + '.' },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <p className="text-sm leading-7 text-[var(--text-soft)]">{item.text}</p>
                </li>
              ))}
            </ul>

            {/* Hours */}
            <div className="rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)] mb-3">Aukioloajat</p>
              <div className="grid gap-2 text-sm">
                {openingHours.map((item) => (
                  <div key={item.day} className="flex justify-between gap-4">
                    <span className="text-[var(--text-soft)]">{item.short}</span>
                    <span className={item.hours === 'Suljettu' ? 'text-[var(--text-muted)]' : 'font-medium text-[var(--text-strong)]'}>{item.hours}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-[var(--text-soft)]">{business.dropoffNote}</p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <BookingForm key={initialService ?? 'default-booking'} initialServiceSlug={initialService} />
          </div>
        </div>
      </section>
    </>
  )
}
