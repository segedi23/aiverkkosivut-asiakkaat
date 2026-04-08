import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  business,
  certifications,
  heroImages,
  localBusinessSchema,
  processSteps,
  services,
  team,
} from '../data/siteContent'
import { Seo } from '../utils/seo'

export function HomePage() {
  const heroImage = heroImages[0] ?? '/images/hero-01.jpg'

  return (
    <>
      <Seo
        title="Kuljetusliike Lindgren Oy | Luotettavat kuljetukset vuodesta 1964"
        description="Kuljetusliike Lindgren Oy tarjoaa tilausajot, muutot, erikoiskuljetukset sekä nouto- ja jakelupalvelut Kokkolasta koko Suomeen."
        structuredData={localBusinessSchema}
      />

      <section className="relative overflow-hidden bg-[var(--bg-dark)] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(13,27,42,0.92)_10%,rgba(13,27,42,0.82)_55%,rgba(30,64,96,0.88)_100%)]" />

        <div className="shell relative py-20 text-center sm:py-24 lg:py-28">
          <img src="/images/logo.png" alt={business.brandName} className="mx-auto mb-8 w-full max-w-[260px]" />
          <h1 className="font-heading text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl">
            LUOTETTAVAT KULJETUKSET VUODESTA 1964
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85">
            Tilausajot, muutot, erikoiskuljetukset — Kokkolasta koko Suomeen
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/yhteystiedot"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-blue-dark)]"
            >
              Pyydä tarjous
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={business.phoneLink}
              className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-transparent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="shell grid gap-6 sm:grid-cols-3 sm:items-center">
          {certifications.map((cert) => (
            <div key={cert.label} className="flex justify-center">
              <img
                src={cert.src}
                alt={cert.label}
                className="h-20 w-auto grayscale transition duration-300 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-blue)]">Palvelut</p>
            <h2 className="font-heading text-4xl font-bold text-[var(--text-strong)] sm:text-5xl">Kuljetuspalvelumme</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <article key={service.slug} className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-strong)]">{service.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{service.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-dark)] text-white">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/65">Historia</p>
            <h2 className="font-heading text-4xl font-bold sm:text-5xl">Yli 60 vuotta kuljetusalan kokemusta</h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-white/80 sm:text-base">
              Kuljetusliike Lindgren Oy on perustettu vuonna 1964 Kokkolaan. Olemme perheyritys,
              jonka arjessa näkyvät samat arvot vuosikymmenestä toiseen: toimimme joustavasti,
              luotettavasti ja täsmällisesti jokaisessa kuljetuksessa.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-[var(--surface-dark)]/80 px-8 py-6 text-center">
            <p className="font-heading text-7xl font-bold leading-none text-emerald-400">60+</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/65">Vuotta kokemusta</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell max-w-4xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-blue)]">Muutto-opas</p>
          <h2 className="font-heading text-4xl font-bold text-[var(--text-strong)] sm:text-5xl">Muutto edessä?</h2>
          <p className="mt-4 text-sm leading-8 text-[var(--text-soft)] sm:text-base">
            Koostimme käytännön vinkit onnistuneeseen muuttoon. Saat nopeasti selkeän muistilistan
            pakkaamiseen, aikatauluun ja muuttopäivän valmisteluihin.
          </p>
          <Link
            to="/muutto-opas"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-blue)] transition-colors hover:text-[var(--brand-blue-dark)]"
          >
            Lue muutto-opas →
          </Link>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-blue)]">Prosessi</p>
            <h2 className="font-heading text-4xl font-bold text-[var(--text-strong)] sm:text-5xl">Kuljetus kolmessa vaiheessa</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-blue)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-[var(--text-strong)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-dark)] text-white">
        <div className="shell grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/65">Yhteystiedot</p>
            <h2 className="font-heading text-4xl font-bold sm:text-5xl">Ota yhteyttä</h2>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-white/80 sm:text-base">{business.intro}</p>

            <div className="mt-7 grid gap-3 text-sm text-white/85">
              <a href={business.phoneLink} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Phone className="h-4 w-4" />
                {business.phoneDisplay}
              </a>
              <a href={business.emailLink} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Mail className="h-4 w-4" />
                {business.email}
              </a>
              <a
                href={business.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <MapPin className="h-4 w-4" />
                {business.fullAddress}
              </a>
            </div>

            <Link
              to="/yhteystiedot"
              className="mt-7 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--bg-dark)] transition-colors hover:bg-slate-100"
            >
              Pyydä tarjous
            </Link>
          </div>

          <div className="grid gap-4">
            {team.map((person) => (
              <article key={person.name} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-lg font-semibold text-white">{person.name}</p>
                <p className="text-sm text-white/70">{person.title}</p>
                <a href={person.phoneLink} className="mt-3 inline-flex items-center gap-2 text-sm text-white/85 hover:text-white">
                  <Phone className="h-4 w-4" />
                  {person.phone}
                </a>
                {person.email ? (
                  <a href={`mailto:${person.email}`} className="mt-2 inline-flex items-center gap-2 text-sm text-white/85 hover:text-white">
                    <Mail className="h-4 w-4" />
                    {person.email}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
