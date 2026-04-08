import { MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  business,
  certificationLogos,
  heroImages,
  localBusinessSchema,
  referenssit,
  services,
  team,
} from '../data/siteContent'
import { Seo } from '../utils/seo'

const heroSubtitle = business.intro.split(' Teemme ')[0]

const stats = [
  { value: '50+', label: 'vuotta' },
  { value: '15', label: 'ammattilaista' },
  { value: '20 m', label: 'max pituus' },
  { value: '10 t', label: 'max paino' },
]

const latestReferences = referenssit.filter((yearData) => yearData.year === '2023' || yearData.year === '2022')

export function HomePage() {
  return (
    <>
      <Seo
        title="RM-Hitsaamo Oy | CE-merkityt teräsrakenteet"
        description="RM-Hitsaamo Oy suunnittelee, valmistaa ja asentaa CE-merkittyjä teräsrakenteita Helsingissä vuodesta 1973."
        structuredData={localBusinessSchema}
      />

      <section className="relative overflow-hidden bg-[var(--bg-dark)] text-white">
        <div className="absolute inset-0">
          <img src={heroImages[0]} alt="RM-Hitsaamon teräsrakenteita" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />
        </div>

        <div className="shell relative py-24 sm:py-28 lg:py-36">
          <div className="max-w-4xl">
            <h1 className="font-heading text-5xl leading-[0.98] text-white sm:text-7xl lg:text-8xl">
              CE-MERKITYT TERÄSRAKENTEET VUODESTA 1973.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">{heroSubtitle}</p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/yhteystiedot"
                className="inline-flex items-center rounded-full bg-[var(--brand-blue)] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-[var(--brand-blue-dark)]"
              >
                Pyydä tarjous
              </Link>
              <a
                href={business.phoneLink}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/20"
              >
                <Phone className="h-5 w-5" />
                {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="shell">
          <div className="flex flex-wrap items-start justify-center gap-8 sm:gap-12">
            {certificationLogos.map((item) => (
              <div key={item.label} className="min-w-[8.5rem] text-center">
                <img
                  src={item.src}
                  alt={item.label}
                  className="mx-auto max-h-16 w-auto grayscale transition duration-300 hover:grayscale-0"
                />
                <p className="mt-3 text-sm font-semibold tracking-wide text-[var(--text-soft)]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell">
          <h2 className="font-heading text-4xl text-[var(--text-strong)] sm:text-5xl">Lukuina</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <article key={item.label} className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
                <p className="font-heading text-5xl text-[var(--brand-blue)]">{item.value}</p>
                <p className="mt-2 text-base font-semibold text-[var(--text-strong)]">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell">
          <h2 className="font-heading text-4xl text-[var(--text-strong)] sm:text-5xl">Palvelut</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.slug} className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-[var(--text-strong)]">{service.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{service.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-dark)] text-white">
        <div className="shell">
          <h2 className="font-heading text-4xl text-white sm:text-5xl">Luotettava kumppani suurhankkeissa</h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {latestReferences.map((yearData) => (
              <article key={yearData.year} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <h3 className="font-heading text-3xl text-white">{yearData.year}</h3>
                <ul className="mt-4 grid gap-2 text-sm leading-7 text-white/85">
                  {yearData.projects.map((project) => (
                    <li key={`${yearData.year}-${project.client}-${project.project}`}>
                      {project.client} — {project.project}: {project.description}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <Link
            to="/referenssit"
            className="mt-8 inline-flex text-sm font-semibold text-white underline underline-offset-4 transition-colors hover:text-white/80"
          >
            Katso kaikki referenssit →
          </Link>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <article className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
            <h2 className="font-heading text-4xl text-[var(--text-strong)]">Yhteystiedot</h2>
            <div className="mt-6 grid gap-4">
              {team.map((person) => (
                <a
                  key={person.name}
                  href={person.phoneLink}
                  className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] p-4 transition-colors hover:border-[var(--brand-blue)]"
                >
                  <p className="text-lg font-semibold text-[var(--text-strong)]">{person.name}</p>
                  <p className="text-sm text-[var(--text-soft)]">{person.title}</p>
                  <p className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-[var(--brand-blue)]">
                    <Phone className="h-4 w-4" />
                    {person.phone}
                  </p>
                </a>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
            <h3 className="font-heading text-3xl text-[var(--text-strong)]">RM-Hitsaamo Oy</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">{business.fullAddress}</p>
            <a
              href={business.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]"
            >
              <MapPin className="h-4 w-4" />
              Avaa kartta
            </a>

            <Link
              to="/yhteystiedot"
              className="mt-6 inline-flex items-center rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-blue-dark)]"
            >
              Pyydä tarjous
            </Link>
          </article>
        </div>
      </section>
    </>
  )
}
