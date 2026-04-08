import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../utils/seo'

const movingTips = [
  {
    title: 'Laadi muuttoaikataulu ajoissa',
    text: 'Varaa muuttopäivä ja kuljetus hyvissä ajoin. Tee viikkokohtainen lista, jotta kaikki vaiheet ehtii hoitaa ilman kiirettä.',
  },
  {
    title: 'Hanki oikeat pakkaustarvikkeet',
    text: 'Varaa riittävästi muuttolaatikoita, kuplamuovia, teippiä ja suojapeitteitä. Oikeat tarvikkeet säästävät aikaa ja vähentävät rikkoutumisriskiä.',
  },
  {
    title: 'Pakkaa huone kerrallaan',
    text: 'Merkitse jokaiseen laatikkoon huone ja sisältö. Näin purkaminen uudessa kodissa sujuu huomattavasti nopeammin.',
  },
  {
    title: 'Suojaa arvokkaat ja särkyvät tavarat',
    text: 'Kääri lasi, elektroniikka ja muut herkät esineet huolellisesti. Pakkaa painavat tavarat pienempiin laatikoihin.',
  },
  {
    title: 'Muista osoitteenmuutos ja sopimukset',
    text: 'Tee osoitteenmuutos sekä päivitä tiedot pankkiin, vakuutuksiin ja muihin tärkeisiin palveluihin ennen muuttopäivää.',
  },
  {
    title: 'Valmistele muuttopäivä',
    text: 'Pidä avaimet, sopimukset ja tärkeimmät asiakirjat käsimatkatavarassa. Varmista, että kulkureitit ja pysäköinti ovat valmiina.',
  },
]

export function MuuttoOpasPage() {
  return (
    <>
      <Seo
        title="Muutto-opas | Kuljetusliike Lindgren Oy"
        description="Muutto-opas onnistuneeseen muuttoon: aikataulu, pakkaaminen, tarvikkeet ja muuttopäivän muistilista."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Muutto-opas</p>
          <h1 className="max-w-4xl font-heading text-4xl font-bold sm:text-5xl">
            Muutto-opas — vinkit onnistuneeseen muuttoon
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Kokosimme selkeät käytännön vinkit, joiden avulla muutto sujuu hallitusti suunnittelusta
            muuttopäivään.
          </p>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell grid gap-5 md:grid-cols-2">
          {movingTips.map((tip) => (
            <article key={tip.title} className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold text-[var(--text-strong)]">{tip.title}</h2>
              <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{tip.text}</p>
            </article>
          ))}
        </div>

        <div className="shell mt-14">
          <h2 className="font-heading text-3xl font-bold text-[var(--text-strong)] sm:text-4xl">
            Suositeltu muuttomiehistö
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
            Suunnittelun avuksi — suosittelemme muuton kokoon sopivaa miehitystä:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { size: 'Yksiö', crew: '1–2 muuttomiestä' },
              { size: 'Kaksio', crew: '2–3 muuttomiestä' },
              { size: 'Kolmio tai suurempi', crew: '3–4 muuttomiestä' },
            ].map((item) => (
              <article key={item.size} className="rounded-2xl border border-[var(--line)] bg-white p-5 text-center shadow-sm">
                <p className="font-heading text-xl font-bold text-[var(--text-strong)]">{item.size}</p>
                <p className="mt-1 text-sm font-semibold text-[var(--brand-blue)]">{item.crew}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="shell mt-10 rounded-2xl border border-[var(--brand-blue)]/20 bg-[var(--brand-blue-soft)] p-6">
          <p className="text-sm font-semibold text-[var(--text-strong)]">
            Kaikki kuljetuksemme, myös muutot, on vakuutettu vastuuvakuutuksella.
          </p>
        </div>

        <div className="shell mt-10">
          <h2 className="font-heading text-3xl font-bold text-[var(--text-strong)] sm:text-4xl">
            Pakkausvinkit
          </h2>
          <ul className="mt-5 grid gap-3">
            {[
              'Merkitse jokaiseen laatikkoon huone, johon se kuuluu.',
              'Pidä laatikot sen painoisina, että yksi henkilö jaksaa kantaa.',
              'Ilmoita etukäteen erityisen painavista tai särkyvistä esineistä.',
              'Käytä jätesäkkejä tekstiilien pakkaamiseen — ne ovat kevyitä ja tilaa säästäviä.',
            ].map((tip) => (
              <li
                key={tip}
                className="flex items-start gap-3 rounded-xl border border-[var(--line)] bg-white px-5 py-4 text-sm text-[var(--text-soft)]"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-blue)]" />
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className="shell mt-10">
          <Link
            to="/yhteystiedot"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-blue-dark)]"
          >
            Tilaa muuttokuljetuksesi
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
