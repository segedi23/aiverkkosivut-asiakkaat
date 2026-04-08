import { Clock, Mail, MapPin, Phone, User } from 'lucide-react'
import { ContactForm } from '../components/forms/ContactForm'
import { business, openingHours, team } from '../data/siteContent'
import { Seo } from '../utils/seo'

const mapEmbed = 'https://maps.google.com/maps?q=Svarvarintie%203%20Koivulahti&t=&z=13&ie=UTF8&iwloc=&output=embed'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Yhteystiedot | Palmet"
        description="Palmetin yhteystiedot, yhteydenottolomake ja kartta."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">Yhteystiedot</p>
          <h1 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">Ota yhteyttä Palmetiin</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Vastaanotamme tarjouspyynnöt ja tekniset kyselyt puhelimitse, sähköpostilla tai lomakkeella.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="grid gap-4">
            <a
              href={business.phoneLink}
              className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm transition-colors hover:border-[var(--brand-blue)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--text-soft)]">Puhelin</div>
                <div className="font-semibold text-[var(--text-strong)]">{business.phoneDisplay}</div>
              </div>
            </a>

            <a
              href={business.emailLink}
              className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm transition-colors hover:border-[var(--brand-blue)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--text-soft)]">Sähköposti</div>
                <div className="font-semibold text-[var(--text-strong)]">{business.email}</div>
              </div>
            </a>

            <a
              href={business.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm transition-colors hover:border-[var(--brand-blue)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--text-soft)]">Osoite</div>
                <div className="font-semibold text-[var(--text-strong)]">{business.fullAddress}</div>
              </div>
            </a>

            <div className="rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--text-soft)]">
                <Clock className="h-4 w-4 text-[var(--brand-blue)]" />
                Aukioloajat
              </div>
              <div className="mt-3 grid gap-2 text-sm">
                {openingHours.map((item) => (
                  <div key={item.short} className="flex justify-between gap-4">
                    <span className="text-[var(--text-soft)]">{item.short}</span>
                    <span className={item.hours === 'Suljettu' ? 'text-[var(--text-muted)]' : 'font-medium text-[var(--text-strong)]'}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="lomake">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell">
          <h2 className="font-heading text-3xl font-bold text-[var(--text-strong)] sm:text-4xl">Henkilöstö</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {team.map((person) => (
              <article key={person.email} className="rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm">
                {person.photo ? (
                  <img src={person.photo} alt={person.name} className="h-20 w-20 rounded-2xl object-cover" />
                ) : (
                  <span className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--surface-soft)] text-[var(--text-muted)]">
                    <User className="h-8 w-8" />
                  </span>
                )}

                <h3 className="mt-4 font-heading text-2xl font-bold text-[var(--text-strong)]">{person.name}</h3>
                <p className="mt-1 text-sm text-[var(--text-soft)]">{person.title}</p>

                <div className="mt-4 grid gap-2 text-sm">
                  <a href={person.phoneLink} className="font-medium text-[var(--text-strong)] transition-colors hover:text-[var(--brand-blue-dark)]">
                    {person.phone}
                  </a>
                  <a href={`mailto:${person.email}`} className="text-[var(--brand-blue-dark)] transition-colors hover:text-[var(--brand-blue)]">
                    {person.email}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm">
          <iframe
            title="Palmet kartalla"
            src={mapEmbed}
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}
