import { CheckCircle, Phone } from 'lucide-react'
import { business, certifications } from '../data/siteContent'
import { Seo } from '../utils/seo'

const technicalSpecs = [
  'Scanreco-järjestelmien erikoisosaaja',
  'Sertifioitu nostolaitetarkastaja',
  'Määräaikaiskatsastukset',
  '10-vuotistarkastukset',
  'Asennusnosturitarkastukset 25 TM saakka',
]

export default function NosturihuoltoPage() {
  return (
    <>
      <Seo
        title="Nosturihuolto ja tarkastukset | Länsiväylän Auto"
        description="PM-nostureiden valtuutettu korjaamo Pieksämäellä. Nosturihuollot, katsastukset ja tarkastukset sertifioidulla osaamisella."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">Nosturihuolto</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold sm:text-5xl">Nosturihuolto ja tarkastukset</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
            Olemme PM-nostureiden valtuutettu korjaamo. Huollot, tarkastukset ja korjaukset tehdään
            samalla toimipisteellä, jotta nosturi saadaan turvallisesti takaisin käyttöön ilman turhia viiveitä.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="overflow-hidden rounded-3xl border border-[var(--line)]">
            <img src="/images/service-nosturi.jpg" alt="Nosturihuolto" className="h-full w-full object-cover" />
          </div>

          <div>
            <h2 className="font-heading text-3xl font-semibold text-[var(--text-strong)]">Tekniset speksit</h2>
            <ul className="mt-5 grid gap-3 text-sm text-[var(--text-body)]">
              {technicalSpecs.map((spec) => (
                <li key={spec} className="inline-flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell">
          <h2 className="font-heading text-3xl font-semibold text-[var(--text-strong)]">Sertifioinnit</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((certification) => (
              <article key={certification.title} className="rounded-2xl border border-[var(--line)] bg-white p-6">
                <h3 className="text-lg font-semibold text-[var(--text-strong)]">{certification.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">{certification.description}</p>
              </article>
            ))}
          </div>

          <a
            href={business.phoneLink}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-primary-dark)]"
          >
            <Phone className="h-4 w-4" />
            Soita Pieksämäkeen 0400 615 111
          </a>
        </div>
      </section>
    </>
  )
}
