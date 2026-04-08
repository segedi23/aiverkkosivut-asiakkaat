import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, certifications, companyCapabilities } from '../data/siteContent'
import { Seo } from '../utils/seo'

const history = [
  {
    year: '1964',
    text: 'Artur Lindgren perustaa kuljetusyrityksen Kokkolaan. Aloittaa yhden ajoneuvon voimin halkokuormien kuljetuksella.',
  },
  {
    year: '1971–1975',
    text: 'Ensimmäinen umpiauto. Fazer-jakelu, SOK-tehtaan kuljetukset. Kalusto kasvaa 5 ajoneuvoon.',
  },
  {
    year: '1985–1988',
    text: 'Kommandiittiyhtiöksi. Scansped-yhteistyö, Suomen Kaukokiito. Valtakunnalliseksi.',
  },
  {
    year: '2000',
    text: 'Osakeyhtiöksi. Jan Lindgren aloittaa toimitusjohtajana.',
  },
  {
    year: 'Nykypäivä',
    text: 'Täyden palvelun kuljetusliike: joustavasti, luotettavasti, täsmällisesti.',
  },
]

const values = ['Joustavasti', 'Luotettavasti', 'Täsmällisesti']

export function AboutPage() {
  return (
    <>
      <Seo
        title="Tietoa | Kuljetusliike Lindgren Oy"
        description="Kuljetusliike Lindgren Oy on vuonna 1964 perustettu perheyritys Kokkolasta. Tutustu historiaan, arvoihin ja sertifikaatteihin."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Tietoa</p>
          <h1 className="max-w-3xl font-heading text-4xl font-bold sm:text-5xl">Perheyritys vuodesta 1964</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">{business.intro}</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/75">
            Tavoitteenamme on olla alueemme johtava laatu- ja kustannustehokas kuljetuspalveluiden tarjoaja.
            Palvelemme asiakkaitamme 110 % omistautumisella — täyden palvelun logistiikkaa yhdellä puhelinsoitolla.
          </p>
          <Link
            to="/yhteystiedot"
            className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--bg-dark)] transition-colors hover:bg-slate-100"
          >
            Pyydä tarjous
          </Link>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-blue)]">Historia</p>
            <h2 className="font-heading text-4xl font-bold text-[var(--text-strong)] sm:text-5xl">Yrityksen tarina</h2>
            <p className="mt-4 text-sm leading-8 text-[var(--text-soft)] sm:text-base">
              Olemme kokkolalainen kuljetusalan perheyritys, jossa pitkä kokemus yhdistyy käytännönläheiseen
              palveluun. Jokainen kuljetus suunnitellaan asiakkaan tarpeen mukaan.
            </p>
          </div>

          <div className="grid gap-4">
            {history.map((item) => (
              <article key={item.year} className="rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm">
                <p className="font-heading text-3xl font-semibold leading-none text-[var(--brand-blue)]">{item.year}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-blue)]">Laatu</p>
          <h2 className="font-heading text-4xl font-bold text-[var(--text-strong)] sm:text-5xl">
            Laatu ja seuranta
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-[var(--text-soft)] sm:text-base">
            Seuraamme jokaista kuljetusta reaaliaikaisesti. Täytämme EU-direktiivin mukaiset
            ammattipätevyysvaatimukset ja kehitämme osaamistamme jatkuvasti.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {companyCapabilities.map((cap) => (
              <article key={cap.label} className="rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-[var(--text-strong)]">{cap.label}</p>
                <p className="mt-1 text-xs font-medium text-[var(--brand-blue)]">{cap.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-blue)]">Arvot</p>
            <h2 className="font-heading text-4xl font-bold text-[var(--text-strong)] sm:text-5xl">Toimintatapamme</h2>
            <p className="mt-4 text-sm leading-8 text-[var(--text-soft)] sm:text-base">
              Toimimme joka päivä samalla periaatteella: joustavasti, luotettavasti ja täsmällisesti.
            </p>
            <ul className="mt-6 grid gap-3">
              {values.map((value) => (
                <li key={value} className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm font-medium text-[var(--text-strong)]">
                  <CheckCircle2 className="h-5 w-5 text-[var(--brand-blue)]" />
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-blue)]">Sertifikaatit</p>
            <h2 className="font-heading text-4xl font-bold text-[var(--text-strong)] sm:text-5xl">Luotettava kumppani</h2>
            <p className="mt-4 mb-2 text-sm leading-7 text-[var(--text-soft)]">
              Meille on myönnetty AAA-luottoluokitus usean vuoden ajan. Olemme Kauppalehden Menestyjäyritys
              ja Luotettava Kumppani -jäsen.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {certifications.map((cert) => (
                <article key={cert.label} className="rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm">
                  <img src={cert.src} alt={cert.label} className="mx-auto h-24 w-auto object-contain" />
                  <p className="mt-4 text-center text-sm font-semibold text-[var(--text-strong)]">{cert.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
