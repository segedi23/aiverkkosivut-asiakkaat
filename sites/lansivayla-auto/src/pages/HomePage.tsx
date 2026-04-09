import { CheckCircle, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  business,
  certifications,
  faqItems,
  localBusinessSchema,
  openingHours,
  processSteps,
  services,
  stats,
} from '../data/siteContent'
import { Seo } from '../utils/seo'

const mapEmbedUrl = 'https://www.google.com/maps?q=Vilhontie+3+Pieks%C3%A4m%C3%A4ki&output=embed'

export default function HomePage() {
  return (
    <>
      <Seo
        title="Länsiväylän Auto ja Konekorjaamo | Raskaan kaluston monimerkkikorjaamo Pieksämäellä"
        description="Länsiväylän Auto ja Konekorjaamo Ky Pieksämäellä. Raskaan kaluston korjaus, nosturihuolto, katsastus, päällirakennevalmistus ja varaosat jo kuudennella vuosikymmenellä."
        structuredData={localBusinessSchema}
      />

      <section className="relative overflow-hidden bg-[var(--bg-dark)] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[36%] md:block"
          style={{
            backgroundImage:
              'radial-gradient(circle at center, rgba(211, 15, 22, 0.32) 1px, transparent 1px)',
            backgroundSize: '14px 14px',
          }}
        />

        <div className="shell relative py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">
              PIEKSÄMÄKI · RASKAAN KALUSTON KORJAAMO · VUODESTA 1983
            </p>
            <h1 className="mt-5 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Raskas kalusto kuntoon samalta tiskiltä
            </h1>
            <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg">
              {business.tagline} Huollamme ja korjaamme kuorma- ja linja-autot sekä maatalous-, maansiirto- ja
              metsäkoneet Pieksämäellä.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={business.phoneLink}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-primary-dark)]"
              >
                <Phone className="h-4 w-4" />
                Soita 0400 615 111
              </a>
              <Link
                to="/yhteystiedot"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Ota yhteyttä
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-white/5">
          <div className="shell grid grid-cols-2 gap-0 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-white/10 px-4 py-6 text-center even:border-l md:border-l">
                <div className="font-heading text-2xl font-semibold text-[var(--brand-primary)]">{stat.value}</div>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-3xl bg-[var(--brand-primary)] p-8 text-white sm:p-10">
            <h2 className="font-heading text-3xl font-semibold">Yrittäjä-tason palvelua</h2>
            <p className="mt-4 text-sm leading-7 text-white/90">
              Käytössä on moderni 1100 m² korjaamohalli, 10 tonnin siltanosturi ja 25 metrin huoltokuilu.
              Kalusto tulee sisään nopeasti ja työt etenevät selkeällä aikataululla.
            </p>
            <a
              href={business.phoneLink}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Soita 0400 615 111
            </a>
          </div>

          <div>
            <h2 className="font-heading text-3xl font-semibold text-[var(--text-strong)] sm:text-4xl">
              Perheyritys kuudennella vuosikymmenellä
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-body)]">{business.intro}</p>
            <ul className="mt-6 grid gap-3 text-sm text-[var(--text-body)]">
              {[
                '1100 m² korjaamohalli vuodelta 2011',
                '10 t siltanosturi vaativiin töihin',
                '25 m huoltokuilu raskaan kaluston huoltoon',
              ].map((item) => (
                <li key={item} className="inline-flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">PALVELUT</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-[var(--text-strong)] sm:text-4xl">
            Kaikki raskaan kaluston työt saman katon alta
          </h2>
          <div className="mt-8 grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article
                  key={service.slug}
                  className="flex h-full flex-col rounded-2xl border border-[var(--line)] bg-white p-6"
                >
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-[var(--text-strong)]">{service.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">{service.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-dark-alt)] text-white">
        <div className="shell">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">Viralliset valtuutukset</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((certification) => (
              <article
                key={certification.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-6"
              >
                <CheckCircle className="h-5 w-5 text-[var(--brand-primary)]" />
                <h3 className="mt-4 text-lg font-semibold text-white">{certification.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/80">{certification.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell">
          <h2 className="font-heading text-3xl font-semibold text-[var(--text-strong)] sm:text-4xl">Näin toimimme</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-[var(--line)] p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-primary)] text-base font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-[var(--text-strong)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-body)]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell">
          <h2 className="font-heading text-3xl font-semibold text-[var(--text-strong)] sm:text-4xl">Usein kysyttyä</h2>
          <div className="mt-8 grid gap-3">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-2xl border border-[var(--line)] bg-white px-5 py-4">
                <summary className="cursor-pointer list-none text-base font-semibold text-[var(--text-strong)]">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-dark)] text-white">
        <div className="shell grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="space-y-4 rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8">
            <h2 className="font-heading text-3xl font-semibold">Ota yhteyttä</h2>

            <a href={business.phoneLink} className="flex items-start gap-3 rounded-xl border border-white/15 bg-black/10 p-4">
              <Phone className="mt-0.5 h-5 w-5 text-[var(--brand-primary)]" />
              <div>
                <p className="text-xs uppercase tracking-widest text-white/65">Puhelin</p>
                <p className="font-semibold text-white">{business.phoneDisplay}</p>
                <p className="text-sm text-white/75">{business.phoneSecondary}</p>
              </div>
            </a>

            <a href={business.emailLink} className="flex items-start gap-3 rounded-xl border border-white/15 bg-black/10 p-4">
              <Mail className="mt-0.5 h-5 w-5 text-[var(--brand-primary)]" />
              <div>
                <p className="text-xs uppercase tracking-widest text-white/65">Sähköposti</p>
                <p className="font-semibold text-white">{business.email}</p>
              </div>
            </a>

            <a
              href={business.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 rounded-xl border border-white/15 bg-black/10 p-4"
            >
              <MapPin className="mt-0.5 h-5 w-5 text-[var(--brand-primary)]" />
              <div>
                <p className="text-xs uppercase tracking-widest text-white/65">Osoite</p>
                <p className="font-semibold text-white">{business.fullAddress}</p>
              </div>
            </a>

            <div className="rounded-xl border border-white/15 bg-black/10 p-4">
              <p className="text-xs uppercase tracking-widest text-white/65">Aukioloajat</p>
              <div className="mt-3 grid gap-2 text-sm">
                {openingHours.map((item) => (
                  <div key={item.short} className="flex justify-between gap-4 text-white/80">
                    <span>{item.short}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/15">
            <iframe
              title="Länsiväylän Auto kartalla"
              src={mapEmbedUrl}
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
