import { ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, services } from '../data/siteContent'
import { Seo } from '../utils/seo'

const serviceBanners: Record<string, string> = {
  tilausajot: '/images/banner-tilausajot.jpg',
  muuttokuljetukset: '/images/banner-muuttokuljetukset.jpg',
  erikoiskuljetukset: '/images/banner-erikoiskuljetukset.jpg',
  kopiokonekuljetukset: '/images/banner-monitoimilaitteet.jpg',
  'nouto-jakelu': '/images/banner-nouto-jakelu.jpg',
  pikakuljetukset: '/images/banner-kuljetukset.jpg',
  kalustekuljetukset: '/images/banner-kuljetukset.jpg',
  'muut-kuljetuspalvelut': '/images/banner-kuljetukset.jpg',
}

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Palvelut | Kuljetusliike Lindgren Oy"
        description="Kuljetusliike Lindgren Oy:n palvelut: tilausajot, muuttokuljetukset, erikoiskuljetukset, kopiokonekuljetukset, nouto- ja jakelukuljetukset sekä pikakuljetukset."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Palvelut</p>
          <h1 className="max-w-3xl font-heading text-4xl font-bold sm:text-5xl">
            Kattavat kuljetuspalvelut koko Suomeen
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Toteutamme kaikki kuljetukset samalla periaatteella: sovittu aikataulu,
            huolellinen käsittely ja luotettava toimitus.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={business.phoneLink}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[var(--bg-dark)] transition-colors hover:bg-slate-100"
            >
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
            <Link
              to="/yhteystiedot"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Pyydä tarjous
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell grid gap-6 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article key={service.slug} className="overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm">
                <img
                  src={serviceBanners[service.slug] ?? '/images/banner-kuljetukset.jpg'}
                  alt={service.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-semibold text-[var(--text-strong)]">{service.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-soft)] sm:text-base">{service.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
