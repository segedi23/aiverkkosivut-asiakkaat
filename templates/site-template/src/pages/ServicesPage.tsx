import { ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, services } from '../data/siteContent'
import { Seo } from '../utils/seo'

const categories = [
  {
    key: 'huollot' as const,
    label: 'Huollot',
    title: 'Määräaikaishuollot ja vuosihuollot valmistajan ohjeilla.',
    desc: 'Tehdastakuut säilyvät ja Fixus-varaosat pitävät laadun tasaisena.',
  },
  {
    key: 'korjaukset' as const,
    label: 'Korjaukset',
    title: 'Korjaukset, suuntaukset ja vaativammat erikoistyöt.',
    desc: 'Moottori, vaihteisto, DPF-puhdistus, suuntaus — 9 nosturia ja osaava tiimi.',
  },
  {
    key: 'lisapalvelut' as const,
    label: 'Lisäpalvelut',
    title: 'Rengashotelli, sijaisauto, tuulilasit ja joustava maksu.',
    desc: 'Kaikki arjea helpottavat palvelut saman katon alla.',
  },
]

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Palvelut | Espoon Autohuolto"
        description="Espoon Autohuollon palvelut: määräaikaishuollot, korjaukset, suuntaukset, ilmastointihuolto, katsastuspalvelu, rengashotelli ja sijaisauto."
      />

      {/* Hero */}
      <section className="bg-[var(--brand-blue)] text-white">
        <div className="shell py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-yellow)] mb-3">Palvelut</p>
          <h1 className="font-heading text-4xl font-bold sm:text-5xl max-w-3xl">
            Huollot, korjaukset ja lisäpalvelut — kaikki samasta osoitteesta.
          </h1>
          <p className="mt-5 text-lg text-white/75 max-w-2xl leading-7">
            Espoon Autohuolto hoitaa kaikki automerkit Friisinmäessä.
            Merkkihuolloista suuntauksiin ja renkaanvaihdosta moottorivaurioihin.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <Link to="/ajanvaraus" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold text-[var(--bg-dark)] hover:bg-[var(--brand-yellow-dark)] transition-colors">
              Varaa aika
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={business.phoneLink} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors">
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Service categories */}
      {categories.map((cat, catIdx) => (
        <section key={cat.key} id={cat.key} className={catIdx % 2 === 1 ? 'section-pad bg-[var(--surface-soft)]' : 'section-pad'}>
          <div className="shell">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)] mb-2">{cat.label}</p>
              <h2 className="font-heading text-2xl font-bold text-[var(--text-strong)] sm:text-3xl">{cat.title}</h2>
              <p className="mt-2 text-base text-[var(--text-soft)]">{cat.desc}</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {services.filter((s) => s.category === cat.key).map((service) => {
                const Icon = service.icon
                const isWindshield = service.slug === 'tuulilasit'
                const isFixusLasku = service.slug === 'fixus-lasku'
                return (
                  <div key={service.slug} className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-[var(--text-strong)]">{service.name}</h3>
                        {service.highlight && (
                          <span className="text-xs text-[var(--brand-blue)] font-medium">{service.highlight}</span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm leading-7 text-[var(--text-soft)]">{service.summary}</p>
                    <div className="mt-4 rounded-xl bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--text-strong)]">
                      {service.benefit}
                    </div>
                    {isWindshield && (
                      <div className="mt-3 text-xs text-[var(--text-soft)]">
                        Tuulilasin vaihdon tekee Espoon Autohuollon tiloissa{' '}
                        <a href={business.pesulasi.phoneLink} className="text-[var(--brand-blue)] font-medium hover:underline">
                          Pesulasi
                        </a>
                        {' '}— {business.pesulasi.phoneDisplay}
                      </div>
                    )}
                    {isFixusLasku && (
                      <div className="mt-3 rounded-lg border border-[var(--brand-blue)]/20 bg-[var(--brand-blue-soft)] px-4 py-3 text-xs text-[var(--text-strong)]">
                        <p className="font-semibold mb-1">Miten se toimii käytännössä?</p>
                        <ol className="list-decimal list-inside grid gap-1 text-[var(--text-soft)]">
                          <li>Tuo auto huoltoon normaalisti</li>
                          <li>Valitse kassalla maksutavaksi Fixus Lasku</li>
                          <li>Saat laskun — 30 pv maksuaika korottomasti</li>
                        </ol>
                        <a
                          href="https://www.fixus.fi/fixus-lasku"
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-[var(--brand-blue)] font-medium hover:underline"
                        >
                          Lue lisää fixus.fi →
                        </a>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-[var(--brand-blue)] text-white">
        <div className="shell py-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">Tarvitset palvelun, jota ei löydy listalta?</h2>
              <p className="mt-2 text-white/70">Soita tai lähetä viesti — hoidamme myös tapaukset, jotka eivät osu suoraan mihinkään kategoriaan.</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link to="/ajanvaraus" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold text-[var(--bg-dark)] hover:bg-[var(--brand-yellow-dark)] transition-colors">
                Varaa aika
              </Link>
              <a href={business.phoneLink} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors">
                <Phone className="h-4 w-4" />
                {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
