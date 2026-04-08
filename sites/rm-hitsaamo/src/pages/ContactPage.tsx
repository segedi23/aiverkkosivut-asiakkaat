import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '../components/forms/ContactForm'
import { business, team } from '../data/siteContent'
import { Seo } from '../utils/seo'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Yhteystiedot | RM-Hitsaamo Oy"
        description="RM-Hitsaamo Oy:n yhteystiedot, tiimi, yritystiedot ja yhteydenottolomake."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <h1 className="max-w-4xl font-heading text-5xl leading-none sm:text-6xl">Yhteystiedot</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Ota yhteyttä suoraan oikealle henkilölle tai lähetä viesti lomakkeella.
          </p>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <article className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
            <h2 className="font-heading text-4xl text-[var(--text-strong)]">Tiimin yhteystiedot</h2>
            <div className="mt-6 grid gap-4">
              {team.map((person) => (
                <div key={person.name} className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] p-4">
                  <p className="text-lg font-semibold text-[var(--text-strong)]">{person.name}</p>
                  <p className="text-sm text-[var(--text-soft)]">{person.title}</p>
                  <a href={person.phoneLink} className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-[var(--brand-blue)]">
                    <Phone className="h-4 w-4" />
                    {person.phone}
                  </a>
                  {person.email ? (
                    <a
                      href={`mailto:${person.email}`}
                      className="mt-2 block text-sm font-medium text-[var(--text-soft)] transition-colors hover:text-[var(--brand-blue)]"
                    >
                      {person.email}
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
            <h2 className="font-heading text-3xl text-[var(--text-strong)]">Yritystiedot</h2>
            <div className="mt-5 grid gap-3 text-sm leading-7 text-[var(--text-soft)]">
              <p>
                <strong className="text-[var(--text-strong)]">Yritys:</strong> {business.legalName}
              </p>
              <p>
                <strong className="text-[var(--text-strong)]">Y-tunnus:</strong> {business.businessId}
              </p>
              <a href={business.phoneLink} className="inline-flex items-center gap-2 font-semibold text-[var(--brand-blue)]">
                <Phone className="h-4 w-4" />
                {business.phoneDisplay}
              </a>
              <a href={business.emailLink} className="inline-flex items-center gap-2 font-semibold text-[var(--brand-blue)]">
                <Mail className="h-4 w-4" />
                {business.email}
              </a>
              <a href={business.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold text-[var(--brand-blue)]">
                <MapPin className="h-4 w-4" />
                {business.fullAddress}
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
        <div className="shell" id="lomake">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
