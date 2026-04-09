import { Phone } from 'lucide-react'
import { business, partnerBrands, services } from '../data/siteContent'
import { Seo } from '../utils/seo'

export default function PalvelutPage() {
  return (
    <>
      <Seo
        title="Palvelumme | Länsiväylän Auto ja Konekorjaamo"
        description="Raskaan kaluston monimerkkikorjaamo Pieksämäellä. Tutustu kaikkiin palveluihimme nosturihuollosta katsastuksiin ja päällirakennevalmistukseen."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">Palvelut</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold sm:text-5xl">Palvelumme</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
            Huollamme ja korjaamme raskasta kalustoa sekä työkoneita monimerkkiperiaatteella.
            Yhdestä paikasta hoituvat korjaukset, katsastukset, nosturihuollot ja erikoistyöt.
            Työt suunnitellaan kaluston käyttöä ajatellen, jotta seisonta-aika jää lyhyeksi.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.slug} className="rounded-2xl border border-[var(--line)] bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-[var(--text-strong)]">{service.name}</h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">{service.description}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell">
          <h2 className="font-heading text-3xl font-semibold text-[var(--text-strong)]">Kumppanimerkit</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {partnerBrands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-medium text-[var(--text-strong)]"
              >
                {brand}
              </span>
            ))}
          </div>
          <a
            href={business.phoneLink}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-primary-dark)]"
          >
            <Phone className="h-4 w-4" />
            Kysy lisää: 0400 615 111
          </a>
        </div>
      </section>
    </>
  )
}
