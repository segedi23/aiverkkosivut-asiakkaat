import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '../components/forms/ContactForm'
import { business, openingHours, team } from '../data/siteContent'
import { Seo } from '../utils/seo'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Yhteystiedot | Kuljetusliike Lindgren Oy"
        description="Kuljetusliike Lindgren Oy:n yhteystiedot: yhteyshenkilöt, osoite, kartta ja yhteydenottolomake."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Yhteystiedot</p>
          <h1 className="max-w-3xl font-heading text-4xl font-bold sm:text-5xl">Ota yhteyttä</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Soita, lähetä sähköposti tai täytä lomake. Sovitaan kuljetus tarpeesi mukaan.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell">
          <h2 className="font-heading text-3xl font-bold text-[var(--text-strong)] sm:text-4xl">Yhteyshenkilöt</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {team.map((person) => (
              <article key={person.name} className="rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm">
                <p className="text-lg font-semibold text-[var(--text-strong)]">{person.name}</p>
                <p className="text-sm text-[var(--text-muted)]">{person.title}</p>
                <a href={person.phoneLink} className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[var(--text-soft)] hover:text-[var(--text-strong)]">
                  <Phone className="h-4 w-4" />
                  {person.phone}
                </a>
                {person.email ? (
                  <a
                    href={`mailto:${person.email}`}
                    className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[var(--text-soft)] hover:text-[var(--text-strong)]"
                  >
                    <Mail className="h-4 w-4" />
                    {person.email}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="grid gap-4">
            <a
              href={business.phoneLink}
              className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">Puhelin</div>
                <div className="font-semibold text-[var(--text-strong)]">{business.phoneDisplay}</div>
              </div>
            </a>

            <a
              href={business.emailLink}
              className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">Sähköposti</div>
                <div className="font-semibold text-[var(--text-strong)]">{business.email}</div>
              </div>
            </a>

            <a
              href={business.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">Osoite</div>
                <div className="font-semibold text-[var(--text-strong)]">{business.fullAddress}</div>
              </div>
            </a>

            <div className="rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm">
              <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">Aukioloajat</div>
              <div className="grid gap-2 text-sm">
                {openingHours.map((item) => (
                  <div key={item.short} className="flex justify-between gap-4">
                    <span className="text-[var(--text-soft)]">{item.short}</span>
                    <span className="font-medium text-[var(--text-strong)]">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="shell mt-10 overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm">
          <iframe
            title="Kuljetusliike Lindgren kartalla"
            src="https://maps.google.com/maps?q=Lekatie+6+Kokkola&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}
