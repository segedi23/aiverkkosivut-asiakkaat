import { ExternalLink, Phone } from 'lucide-react'
import { business } from '../data/siteContent'
import { Seo } from '../utils/seo'

const partCategories = [
  'Alusta-, jakopää- ja jarruosat',
  'Moottorinosat ja pakoputket',
  'Kemikaalit ja suodattimet',
  'Sytytys ja hehkutus',
  'Sähkö ja elektroniikka',
  'Voimansiirron osat',
  'Korinosat',
  'Tuulilasit',
]

function VaraosatPage() {
  return (
    <>
      <Seo
        title="Varaosat nopealla toimituksella | Autokossi"
        description="Örum-yhteistyön kautta saat varaosat nopeasti Kiuruvedelle. Klo 14 mennessä tilatut osat yleensä seuraavalle päivälle."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">Varaosat</p>
          <h1 className="mt-3 font-[var(--font-display)] text-4xl sm:text-5xl">Varaosat nopealla toimituksella</h1>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-base leading-8 text-[var(--text-body)]">
              Toimitamme varaosat nopeasti Örum-kumppanin kautta. Kerro rekisterinumero tai ajoneuvon tarkat tiedot,
              niin varmistamme oikeat osat kerralla.
            </p>

            <h2 className="mt-8 font-[var(--font-display)] text-3xl text-[var(--text-strong)]">Varaosakategoriat</h2>
            <ul className="mt-4 grid gap-2 text-sm text-[var(--text-body)]">
              {partCategories.map((category) => (
                <li key={category} className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3">
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-8 text-center">
            <img src="/images/partner-orum.png" alt="Örum" className="mx-auto h-28 w-auto" />
            <a
              href="https://www.orum.fi"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--brand-primary)] hover:bg-[var(--brand-primary-soft)]"
            >
              Tutustu Örumiin
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="shell mt-10 grid gap-4 md:grid-cols-3">
          {[
            { title: 'Klo 14 mennessä tilatut', value: 'Seuraavalle päivälle' },
            { title: 'Tuulilasit', value: '1–3 arkipäivää' },
            { title: 'Ulkomailta', value: 'Noin viikko' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-6">
              <p className="text-sm uppercase tracking-[0.15em] text-[var(--text-muted)]">{item.title}</p>
              <p className="mt-2 font-[var(--font-display)] text-3xl text-[var(--text-strong)]">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="shell mt-8 rounded-2xl border border-[var(--line)] bg-[var(--brand-primary-soft)] p-6 text-sm text-[var(--text-strong)]">
          Lähetä kysely osista puhelimitse 0400 654 758 tai sähköpostilla
          <div className="mt-3 flex flex-wrap gap-3">
            <a href={business.phoneLink} className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-accent)] px-5 py-2.5 font-semibold text-white hover:bg-[var(--brand-accent-dark)]">
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
            <a href={business.emailLink} className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-5 py-2.5 font-semibold text-[var(--brand-primary)] hover:bg-[var(--surface-soft)]">
              {business.email}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default VaraosatPage
