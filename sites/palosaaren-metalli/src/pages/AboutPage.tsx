import { ArrowRight, Factory, ShieldCheck, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business } from '../data/siteContent'
import { Seo } from '../utils/seo'

const highlights = [
  {
    icon: Factory,
    title: 'Palmet yhtiönä',
    description:
      'Palmet (Palosaaren Metalli Oy) on Koivulahdessa toimiva konepaja, joka yhdistää alihankintavalmistuksen ja omat tuotteet saman tuotanto-organisaation alle.',
  },
  {
    icon: ShieldCheck,
    title: 'Laatu ja sertifikaatit',
    description:
      'Laatu varmistetaan jokaisessa vaiheessa piirustuksista toimitukseen. Sertifioidut työmenetelmät ja dokumentoidut toimintatavat tukevat vaativia asiakasprojekteja.',
  },
  {
    icon: Users,
    title: 'Ihmiset ja yhteistyö',
    description:
      'Työskentelemme tiiviisti asiakkaan suunnittelun, tuotannon ja hankinnan kanssa, jotta kokonaisuudet valmistuvat aikataulussa ja ilman turhia siirtovaiheita.',
  },
]

const aboutLinks = [
  {
    title: 'Historia',
    description: 'Palmetin tarina alkaa vuodesta 1970 ja sisältää useita merkittäviä teollisuusprojekteja.',
    to: '/historia',
    cta: 'Lue koko historiamme',
  },
  {
    title: 'Rekrytointi',
    description: 'Etsimme jatkuvasti uusia osaajia koneistuksen, hitsauksen ja tuotannon tehtäviin.',
    to: '/rekry',
    cta: 'Katso avoimet työpaikat',
  },
  {
    title: 'Sertifikaatit',
    description: 'Laadunhallinta ja turvallisuus ovat keskeinen osa jokapäiväistä toimintaamme.',
    to: '/sertifikaatit',
    cta: 'Tutustu sertifikaatteihin',
  },
  {
    title: 'Konekanta',
    description: 'Moderni konekantamme mahdollistaa vaativien kappaleiden valmistuksen tehokkaasti.',
    to: '/konekanta',
    cta: 'Tutustu konekantaamme',
  },
]

export function AboutPage() {
  return (
    <>
      <Seo
        title="Tietoa | Palmet"
        description="Palmet on Koivulahdessa toimiva täyden palvelun konepaja. Tutustu yritykseen, historiaan, laatuun ja rekrytointiin."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell grid gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">Tietoa yrityksestä</p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold sm:text-5xl">Palmet yhtiönä</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">{business.intro}</p>
          </div>
          <img src="/images/hero-02-koneistus.jpg" alt="Palmetin tuotanto" className="h-full w-full rounded-2xl object-cover" />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-4 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="font-semibold text-[var(--text-strong)]">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{item.description}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell grid gap-4 md:grid-cols-2">
          {aboutLinks.map((item) => (
            <article key={item.to} className="rounded-2xl border border-[var(--line)] bg-white p-7">
              <h2 className="font-heading text-3xl font-bold text-[var(--text-strong)]">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">{item.description}</p>
              <Link
                to={item.to}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue-dark)] transition-colors hover:text-[var(--brand-blue)]"
              >
                {item.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
