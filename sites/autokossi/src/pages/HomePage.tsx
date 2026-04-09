import { Clock, Mail, MapPin, Package, Phone, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  business,
  faqItems,
  heroImages,
  localBusinessSchema,
  openingHours,
  processSteps,
  services,
  stats,
  vehicleTypes,
} from '../data/siteContent'
import { Seo } from '../utils/seo'

function HomePage() {
  return (
    <>
      <Seo
        title="Autokossi — Autokorjaamo, varaosat ja rahoitus Kiuruvedellä"
        description="Kori- ja Konekorjaamo Kossi Ky palvelee Kiuruvedellä autohuolloissa, korjauksissa ja varaosissa jo 49 vuoden kokemuksella."
        structuredData={localBusinessSchema}
      />

      <section className="section-pad relative overflow-hidden bg-[var(--bg-dark)] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: `url('${heroImages[0]}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,26,43,0.94)] via-[rgba(11,26,43,0.8)] to-[rgba(11,26,43,0.7)]" />

        <div className="shell relative">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-accent)]">
            Kiuruvesi · Autokorjaamo · Vuodesta 1976
          </p>
          <h1 className="mt-4 max-w-3xl font-[var(--font-display)] text-5xl leading-tight sm:text-6xl">
            49 vuotta kokemusta autoalalla
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">{business.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/yhteystiedot"
              className="inline-flex items-center rounded-full bg-[var(--brand-accent)] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-accent-dark)]"
            >
              Ota yhteyttä
            </Link>
            <a
              href={business.phoneLink}
              className="inline-flex items-center rounded-full border border-white/60 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              Soita 0400 654 758
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/20 bg-white/5 px-5 py-4">
                <p className="font-[var(--font-display)] text-3xl leading-none text-[var(--brand-accent)]">{stat.value}</p>
                <p className="mt-2 text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <img
            src={heroImages[1]}
            alt="Autokossin korjaamotilat"
            className="h-full max-h-[520px] w-full rounded-2xl border border-[var(--line)] object-cover"
          />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">
              PERHEYRITYS KIURUVEDELLÄ
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-4xl leading-tight text-[var(--text-strong)]">
              Vankkaa autoalan osaamista jo neljän vuosikymmenen ajalta
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--text-body)]">{business.intro}</p>

            <p className="mt-6 text-sm font-semibold text-[var(--text-strong)]">
              Huollamme monipuolisesti: henkilöautot, pakettiautot, asuntoautot ja -vaunut, traktorit, työkoneet
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {vehicleTypes.map((vehicle) => {
                const Icon = vehicle.icon
                return (
                  <div key={vehicle.name} className="inline-flex items-center gap-2 text-sm text-[var(--text-body)]">
                    <Icon className="h-4 w-4 text-[var(--brand-primary)]" />
                    {vehicle.name}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">Palvelumme</p>
          <h2 className="mt-2 font-[var(--font-display)] text-4xl text-[var(--text-strong)]">Palvelumme</h2>
          <p className="mt-2 text-base text-[var(--text-body)]">Täyden palvelun korjaamo Pohjois-Savossa</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.slug} className="flex h-full flex-col rounded-2xl border border-[var(--line)] bg-white p-6">
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-[var(--font-display)] text-2xl leading-tight text-[var(--text-strong)]">{service.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[var(--text-body)]">{service.description}</p>
                  <a href={business.phoneLink} className="mt-5 text-sm font-semibold text-[var(--brand-primary)] hover:underline">
                    Kysy lisää →
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-dark)] text-white">
        <div className="shell">
          <h2 className="font-[var(--font-display)] text-4xl">Miksi valita meidät?</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: '49 vuotta kokemusta',
                description:
                  'Vuodesta 1976 olemme huoltaneet autoja ja työkoneita Kiuruvedellä. Tunnemme merkit ja tiedämme mitä teemme.',
                icon: ShieldCheck,
              },
              {
                title: 'Joustamme sinun aikataulusi mukaan',
                description:
                  'Sovimme ajan joka sopii sinulle — myös iltaisin ja viikonloppuisin tarvittaessa. Tulemme myös paikan päälle.',
                icon: Clock,
              },
              {
                title: 'Nopeat varaosat Örumin kautta',
                description:
                  'Klo 14 mennessä tilatut osat saapuvat yleensä seuraavaksi päiväksi. Tuulilasit 1–3 päivässä.',
                icon: Package,
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <item.icon className="h-6 w-6 text-[var(--brand-accent)]" />
                <h3 className="mt-4 font-[var(--font-display)] text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell">
          <h2 className="font-[var(--font-display)] text-4xl text-[var(--text-strong)]">Näin toimimme</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className={[
                  'rounded-2xl border border-[var(--line)] p-6',
                  index > 0 ? 'md:border-l md:border-[var(--line)]' : '',
                ].join(' ')}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-accent)] font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-[var(--font-display)] text-2xl text-[var(--text-strong)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-body)]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">Usein kysytyt</p>
            <h2 className="mt-2 font-[var(--font-display)] text-4xl text-[var(--text-strong)]">Usein kysyttyä</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">
              Jos jokin asia jäi epäselväksi, soita meille. Vastaamme suoraan ja rehellisesti.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-white p-5">
            {faqItems.map((item) => (
              <details key={item.question} className="border-b border-[var(--line)] py-3 last:border-none">
                <summary className="cursor-pointer list-none font-[var(--font-display)] text-2xl text-[var(--text-strong)]">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-dark)] text-white">
        <div className="shell grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-[var(--font-display)] text-4xl">Tule käymään tai soita</h2>

            <div className="mt-6 grid gap-3">
              <a href={business.phoneLink} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-4">
                <Phone className="h-5 w-5 text-[var(--brand-accent)]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/70">Puhelin</p>
                  <p className="font-semibold text-white">{business.phoneDisplay}</p>
                </div>
              </a>

              <a href={business.emailLink} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-4">
                <Mail className="h-5 w-5 text-[var(--brand-accent)]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/70">Sähköposti</p>
                  <p className="font-semibold text-white">{business.email}</p>
                </div>
              </a>

              <a href={business.mapUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-4">
                <MapPin className="h-5 w-5 text-[var(--brand-accent)]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/70">Osoite</p>
                  <p className="font-semibold text-white">{business.fullAddress}</p>
                </div>
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="mb-2 text-sm font-semibold">Aukioloajat</p>
              <div className="grid gap-1 text-sm text-white/80">
                {openingHours.map((item) => (
                  <div key={item.short} className="flex items-center justify-between gap-4">
                    <span>{item.short}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <iframe
            title="Autokossi kartalla"
            src={`https://maps.google.com/maps?q=Kievarintie+9+Kiuruvesi&output=embed`}
            className="h-80 w-full rounded-2xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}

export default HomePage
