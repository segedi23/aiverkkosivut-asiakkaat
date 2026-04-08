import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  business,
  companyStats,
  customerLogos,
  galleryImages,
  heroImages,
  localBusinessSchema,
  openingHours,
  ownProducts,
  services,
} from '../data/siteContent'
import { Seo } from '../utils/seo'

export function HomePage() {
  const [logoExists, setLogoExists] = useState(true)

  return (
    <>
      <Seo
        title="Palmet | Täyden palvelun konepaja Koivulahdessa"
        description="Palmet (Palosaaren Metalli Oy) tarjoaa hitsauksen, koneistuksen, pintakäsittelyn, kokoonpanon ja tuotekehityksen sekä omat teollisuustuotteet."
        structuredData={localBusinessSchema}
      />

      <section className="relative overflow-hidden bg-[var(--bg-dark)] text-white">
        <img
          src={heroImages[0]}
          alt="Hitsaustyö Palmetin konepajalla"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f172abf]" />

        <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6 lg:left-8 lg:top-8">
          {logoExists ? (
            <img
              src="/images/logo.png"
              alt="Palmet logo"
              className="h-12 w-auto rounded bg-white/90 p-2 sm:h-14"
              onError={() => setLogoExists(false)}
            />
          ) : (
            <span className="inline-flex rounded bg-white/90 px-3 py-2 font-heading text-xl font-bold tracking-wide text-[var(--bg-dark)]">
              PALMET
            </span>
          )}
        </div>

        <div className="shell relative py-24 sm:py-28 lg:py-36">
          <h1 className="max-w-4xl font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            PALMET — TÄYDEN PALVELUN KONEPAJA
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
            Hitsaus, koneistus, pintakäsittely ja kokoonpano Koivulahdessa
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/yhteystiedot"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-blue)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-blue-dark)]"
            >
              Pyydä tarjous
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={business.phoneLink}
              className="inline-flex items-center gap-2 rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {companyStats.slice(0, 4).map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-[var(--line)] bg-white p-6 text-center shadow-sm">
              <div className="font-heading text-4xl font-bold text-[var(--brand-blue)] sm:text-5xl">{stat.value}</div>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-[var(--text-soft)]">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell">
          <h2 className="font-heading text-3xl font-bold text-[var(--text-strong)] sm:text-4xl">Palvelumme</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.slug} className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-[var(--text-strong)]">{service.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{service.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-dark)] text-white">
        <div className="shell">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Omat tuotteet</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ownProducts.map((product) => (
              <article key={product.name} className="rounded-2xl border border-white/10 bg-[var(--surface-dark)] p-6">
                <h3 className="font-heading text-2xl font-bold">{product.name}</h3>
                <p className="mt-2 text-sm leading-7 text-white/75">{product.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell text-center">
          <h2 className="font-heading text-3xl font-bold text-[var(--text-strong)] sm:text-4xl">Luotettavat kumppanit</h2>
          <div className="mx-auto mt-8 grid max-w-3xl gap-8 sm:grid-cols-2 sm:items-center">
            {customerLogos.map((logo) => (
              <img key={logo.label} src={logo.src} alt={logo.label} className="mx-auto max-h-20 w-auto" />
            ))}
          </div>
          <p className="mt-6 text-sm font-medium text-[var(--text-soft)]">Logset ja Normet luottavat Palmetin osaamiseen</p>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-heading text-3xl font-bold text-[var(--text-strong)] sm:text-4xl">Kuvagalleria</h2>
            <Link
              to="/kuvagalleria"
              className="text-sm font-semibold text-[var(--brand-blue-dark)] transition-colors hover:text-[var(--brand-blue)]"
            >
              Katso kaikki kuvat →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.slice(0, 4).map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="h-56 w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-dark)] text-white">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">Yhteystiedot</h2>
            <div className="mt-6 grid gap-3 text-sm text-white/85">
              <a href={business.phoneLink} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Phone className="h-4 w-4 text-[var(--brand-blue)]" />
                {business.phoneDisplay}
              </a>
              <a href={business.emailLink} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Mail className="h-4 w-4 text-[var(--brand-blue)]" />
                {business.email}
              </a>
              <a href={business.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <MapPin className="h-4 w-4 text-[var(--brand-blue)]" />
                {business.fullAddress}
              </a>
            </div>
            <div className="mt-6 grid gap-2 rounded-2xl border border-white/15 bg-white/5 p-5 text-sm">
              {openingHours.map((item) => (
                <div key={item.short} className="flex justify-between gap-4">
                  <span>{item.short}</span>
                  <span className={item.hours === 'Suljettu' ? 'text-white/50' : 'text-white/90'}>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/yhteystiedot"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-[var(--brand-blue)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-blue-dark)]"
          >
            Pyydä tarjous
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
