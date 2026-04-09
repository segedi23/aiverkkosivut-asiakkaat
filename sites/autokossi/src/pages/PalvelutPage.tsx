import { Phone } from 'lucide-react'
import { business, heroImages, services } from '../data/siteContent'
import { Seo } from '../utils/seo'

function PalvelutPage() {
  return (
    <>
      <Seo
        title="Korjaamopalvelut | Autokossi"
        description="Huollamme ja korjaamme henkilö- ja pakettiautot, asuntoautot ja -vaunut, traktorit sekä työkoneet Kiuruvedellä."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">Palvelut</p>
          <h1 className="mt-3 font-[var(--font-display)] text-4xl sm:text-5xl">Korjaamopalvelut</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
            Huollamme ja korjaamme henkilö- ja pakettiautot, asuntoautot ja -vaunut, traktorit sekä työkoneet. Samalla ammattitaidolla, merkistä riippumatta.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <article key={service.slug} className="overflow-hidden rounded-2xl border border-[var(--line)] bg-white">
                <img
                  src={heroImages[index % heroImages.length]}
                  alt={service.name}
                  className="h-48 w-full object-cover lg:h-full"
                />
                <div className="p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 font-[var(--font-display)] text-3xl text-[var(--text-strong)]">{service.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">{service.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section-pad bg-[var(--brand-primary)] text-white">
        <div className="shell">
          <h2 className="font-[var(--font-display)] text-4xl">Erikoisalueemme: traktorit ja työkoneet</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/85">
            Teemme huoltoja ja korjauksia myös kenttäolosuhteissa. Tarvittaessa tulemme asiakkaan tiloihin omilla työkaluilla ja varaosilla.
          </p>
          <a
            href={business.phoneLink}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand-accent)] px-6 py-3 text-sm font-bold text-white hover:bg-[var(--brand-accent-dark)]"
          >
            <Phone className="h-4 w-4" />
            Kysy lisää puhelimitse 0400 654 758
          </a>
        </div>
      </section>
    </>
  )
}

export default PalvelutPage
