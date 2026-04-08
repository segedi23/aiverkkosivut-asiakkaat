import { ChevronDown, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { business, faqItems, localBusinessSchema, openingHours, processSteps, services, team } from '../data/siteContent'
import { Seo } from '../utils/seo'

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/15 last:border-0">
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-white transition-colors hover:text-[var(--brand-blue)]"
        onClick={() => setOpen((value) => !value)}
      >
        {question}
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[var(--brand-blue)] transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open ? <p className="pb-5 text-sm leading-7 text-white/75">{answer}</p> : null}
    </div>
  )
}

const specialPaints = ['Matta', 'Efekti', 'Candy', 'Fleikki', 'Helmiäis', 'Raidoitukset', 'Tarroitukset']

export function HomePage() {
  return (
    <>
      <Seo
        title="SBS Innovation Oy | Automaalaamo ja moottoripyörien erikoismaalaukset Hyvinkäällä"
        description={business.intro}
        structuredData={localBusinessSchema}
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-24 sm:py-28 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">HYVINKÄÄ | AUTOMAALAAMO</p>
          <h1 className="mt-4 font-[var(--font-display)] text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">SBS INNOVATION</h1>
          <p className="mt-6 max-w-4xl text-xl font-bold uppercase tracking-[0.08em] text-[var(--brand-blue)] sm:text-2xl lg:text-3xl">
            AUTOMAALAAMO &amp; MOOTTORIPYÖRIEN ERIKOISMAALAUKSET
          </p>
          <div className="mt-6 h-1 w-24 bg-[var(--brand-blue)]" />
          <p className="mt-6 text-base text-white/80">Hyvinkää — vuodesta 2003</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/yhteystiedot"
              className="inline-flex items-center rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-blue-dark)]"
            >
              Ota yhteyttä
            </Link>
            <a
              href={business.phoneLink}
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)]">SBS Innovation Oy</p>
            <h2 className="mt-3 font-[var(--font-display)] text-4xl text-[var(--text-strong)] sm:text-5xl">Automaalaamo Hyvinkäällä</h2>
            <p className="mt-5 text-base leading-8 text-[var(--text-soft)]">{business.intro}</p>
            <p className="mt-4 text-base leading-8 text-[var(--text-soft)]">
              Palveluihimme luottavat yksityisasiakkaiden lisäksi vakuutusyhtiöt, autopeltikorjaamot,
              moottoripyörien maahantuojat ja korjaamot.
            </p>
          </div>
          <img
            src="/images/porsche.jpg"
            alt="Porsche maalaamon pihalla"
            className="h-80 w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell">
          <h2 className="font-[var(--font-display)] text-4xl text-[var(--text-strong)] sm:text-5xl">Palvelut</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.slug} className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-strong)]">{service.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{service.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-dark)] text-white">
        <div className="shell">
          <h2 className="font-[var(--font-display)] text-4xl leading-tight sm:text-5xl">Moottoripyörien erikoismaalaukset</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/80">
            Candy, fleikki, monikerroshelmiäis — taidetta kahdella pyörällä.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <img
              src="/images/acs11.jpg"
              alt="Moottoripyörän erikoismaalaus"
              className="h-[420px] w-full rounded-2xl object-cover"
              loading="lazy"
            />
            <div className="rounded-2xl border border-white/15 bg-[var(--surface-dark)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">Erikoistekniikat</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {specialPaints.map((item) => (
                  <li key={item} className="rounded-xl bg-black/25 px-4 py-3 text-sm font-semibold text-white/90">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell">
          <h2 className="font-[var(--font-display)] text-4xl text-[var(--text-strong)] sm:text-5xl">Näin maalaus etenee</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-blue)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-[var(--text-strong)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-dark)] text-white">
        <div className="shell grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)]">Usein kysyttyä</p>
            <h2 className="mt-3 font-[var(--font-display)] text-4xl">Kysymyksiä ennen maalausta?</h2>
            <div className="mt-6 rounded-2xl border border-white/15 bg-[var(--surface-dark)] px-6">
              {faqItems.map((item) => (
                <FaqItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-[var(--surface-dark)] p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)]">Yhteystiedot</p>
            <div className="mt-4 grid gap-3">
              {team.map((member) => (
                <article key={member.name} className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-white/65">{member.title}</p>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <a href={member.phoneLink} className="mt-1 inline-flex items-center gap-2 text-[var(--brand-blue)]">
                    <Phone className="h-4 w-4" />
                    {member.phone}
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-3 text-sm text-white/85">
              <a href={business.emailLink} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Mail className="h-4 w-4 text-[var(--brand-blue)]" />
                {business.email}
              </a>
              <a
                href={business.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-start gap-2 transition-colors hover:text-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--brand-blue)]" />
                {business.fullAddress}
              </a>
              <div className="grid gap-1">
                {openingHours.map((item) => (
                  <p key={item.short} className="text-white/75">
                    <span className="font-semibold text-white">{item.short}</span> {item.hours}
                  </p>
                ))}
              </div>
            </div>

            <Link
              to="/yhteystiedot"
              className="mt-6 inline-flex items-center rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-blue-dark)]"
            >
              Ota yhteyttä
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
