import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '../components/forms/ContactForm'
import { business, openingHours, team } from '../data/siteContent'
import { Seo } from '../utils/seo'

const postalAddress = 'Kasoorinkatu 10 as 24, 05800 Hyvinkää'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Yhteystiedot | SBS Innovation Oy"
        description="SBS Innovation Oy:n yhteystiedot: yhteyshenkilöt, käyntiosoite, postiosoite, kartta ja yhteydenottolomake."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">Yhteystiedot</p>
          <h1 className="mt-3 font-[var(--font-display)] text-4xl sm:text-5xl">Ota yhteyttä</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Automaalaamo ja moottoripyörien erikoismaalaukset Hyvinkäällä.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-5 lg:grid-cols-2">
          {team.map((member) => (
            <article key={member.name} className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)]">Yhteyshenkilö</p>
              <h2 className="mt-2 text-2xl font-bold text-[var(--text-strong)]">{member.name}</h2>
              <p className="mt-1 text-sm text-[var(--text-soft)]">{member.title}</p>
              <a href={member.phoneLink} className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-[var(--brand-blue)]">
                <Phone className="h-4 w-4" />
                {member.phone}
              </a>
              {member.email ? (
                <a href={business.emailLink} className="mt-3 block text-sm font-semibold text-[var(--text-strong)]">
                  {member.email}
                </a>
              ) : null}
            </article>
          ))}
        </div>

        <div className="shell mt-5 grid gap-5 lg:grid-cols-2">
          <div className="grid gap-5">
            <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)]">Sähköposti</p>
              <a href={business.emailLink} className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-[var(--text-strong)]">
                <Mail className="h-4 w-4 text-[var(--brand-blue)]" />
                {business.email}
              </a>
            </article>

            <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)]">Käyntiosoite</p>
              <a
                href={business.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-start gap-2 text-base font-semibold text-[var(--text-strong)]"
              >
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--brand-blue)]" />
                {business.fullAddress}
              </a>
            </article>

            <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)]">Postiosoite</p>
              <p className="mt-3 text-base font-semibold text-[var(--text-strong)]">{postalAddress}</p>
            </article>

            <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)]">Aukioloajat</p>
              <div className="mt-4 grid gap-2 text-sm text-[var(--text-soft)]">
                {openingHours.map((item) => (
                  <div key={item.short} className="flex items-center justify-between gap-4 rounded-xl bg-white px-3 py-2">
                    <span className="inline-flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-[var(--brand-blue)]" />
                      {item.short}
                    </span>
                    <span className="font-semibold text-[var(--text-strong)]">{item.hours}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-white p-3 shadow-sm sm:p-4">
            <iframe
              title="SBS Innovation kartta"
              src="https://www.google.com/maps?q=Kerkkolankatu+30+Hyvinkää&output=embed"
              className="h-[340px] w-full rounded-xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="mt-4">
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
