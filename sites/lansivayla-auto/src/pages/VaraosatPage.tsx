import { Phone } from 'lucide-react'
import { business, partnerBrands } from '../data/siteContent'
import { Seo } from '../utils/seo'

const quickInfo = [
  {
    title: 'Hyllyssä heti',
    description: 'Yleisimmät kulutusosat',
  },
  {
    title: 'Seuraavaksi aamuksi',
    description: 'Yhteistyökumppaneiden kautta',
  },
  {
    title: 'Omavalmisteosat',
    description: 'Erityisvaatimuksiin',
  },
]

export default function VaraosatPage() {
  return (
    <>
      <Seo
        title="Varaosat | Länsiväylän Auto"
        description="Varaosat raskaaseen kalustoon Pieksämäellä. Yleisimmät osat hyllyssä ja muut nopeasti kumppaniverkoston kautta."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">Varaosat</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold sm:text-5xl">Varaosat</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
            Yleisimmät kulutusosat löytyvät hyllystä heti. Muut osat saadaan yleensä seuraavaksi aamuksi,
            ja erikoistarpeisiin valmistamme myös omavalmisteosia.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell">
          <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface-soft)] p-6 sm:p-8">
            <h2 className="font-heading text-3xl font-semibold text-[var(--text-strong)]">Kumppanimerkit</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-body)]">
              Pidämme hyllyssä yleisimmät kulutusosat, ja yhteistyökumppaneiden kautta
              saamme varaosat kaikkiin merkkeihin. Nämä ovat edustamiamme brändejä:
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {partnerBrands.map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-medium text-[var(--text-strong)]"
                >
                  {brand}
                </span>
              ))}
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--line)] bg-white p-4">
              <img
                src="/images/brands-collage.png"
                alt="Länsiväylän Auton yhteistyökumppanit: Bosch, Sachs, Lemförder, Wabco, Knorr-Bremse, Dinex ja muut"
                className="mx-auto h-auto w-full max-w-xl"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {quickInfo.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[var(--line)] p-6">
                <h3 className="text-xl font-semibold text-[var(--text-strong)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-body)]">{item.description}</p>
              </article>
            ))}
          </div>

          <a
            href={business.phoneLink}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-primary-dark)]"
          >
            <Phone className="h-4 w-4" />
            Kysy varaosista: 0400 615 111
          </a>
        </div>
      </section>
    </>
  )
}
