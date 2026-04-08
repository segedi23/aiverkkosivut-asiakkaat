import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Star,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  business,
  faqItems,
  heroImages,
  localBusinessSchema,
  openingHours,
  services,
} from '../data/siteContent'
import { Seo } from '../utils/seo'

const mainServices = services.filter((s) => s.category !== 'lisapalvelut')
const extraServices = services.filter((s) => s.category === 'lisapalvelut')

// Top 3 featured services shown prominently
const featuredSlugs = ['maaraaikaishuolto', 'korjaamopalvelut', 'suuntaus']
const featuredServices = mainServices.filter((s) => featuredSlugs.includes(s.slug))
const otherServices = mainServices.filter((s) => !featuredSlugs.includes(s.slug))

const stats = [
  { value: 'Vuodesta 2012', label: 'toiminut Espoossa' },
  { value: '9 nosturia', label: 'Friisinmäen hallissa' },
  { value: '7 mekaanikoa', label: 'osaava tiimi' },
  { value: 'Fixus-ketju', label: 'laadukkaat varaosat' },
]

const highlights = [
  { title: 'Sijaisauto', desc: 'Saatavilla edullisesti — mainitse varauksen yhteydessä.', to: '/palvelut#lisapalvelut' },
  { title: 'Rengashotelli', desc: 'Renkaat oikeissa olosuhteissa, vaihto ilman kuljettelua.', to: '/palvelut#lisapalvelut' },
  { title: 'Fixus Lasku', desc: '30 päivää korotonta maksuaikaa myös isoille töille.', to: '/palvelut#lisapalvelut' },
  { title: 'Katsastuspalvelu', desc: 'Katsastuskäynti + huolto samalla varauksella.', to: '/palvelut#huollot' },
]

const reviews = [
  {
    text: 'Todella ystävällinen ja asiantunteva palvelu! Pitivät koko korjauksen ajan minut ajantasalla, mitä tehdään ja mitä mieltä minä olen. En vie autoani enää mihinkään muualle. Vahva suositus 👍',
    initials: 'MK',
  },
  {
    text: 'Erinomainen palvelu! Ruohonleikkurin kopan pieni hitsaustyö tehtiin joustavasti muiden töiden välissä.',
    initials: 'JH',
  },
  {
    text: 'Loistavaa palvelua ja asiat selitetään niin, että ei tarvitse tietää autoista paljoa ymmärtääkseen. Hinta-arvio pitänyt aina kutinsa, usein käynnistä selviää edullisemmin kuin ensin arvioitu. Lämmin suositus!',
    initials: 'TV',
  },
  {
    text: 'Käytin autoani sen moottorin ja yleisten vikakoodien haussa. Palveluun pääsy oli nopea (seuraavana päivänä), ystävällinen ja onnistunut, lisäksi edullinen.',
    initials: 'AL',
  },
]

const trustBadges = [
  'Vuodesta 2012',
  'Kaikki automerkit',
  'Fixus-ketju',
  'Friisinmäki, Espoo',
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[var(--brand-yellow)] text-[var(--brand-yellow)]" />
      ))}
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[var(--line)] last:border-0">
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold text-[var(--text-strong)] hover:text-[var(--brand-blue)] transition-colors"
        onClick={() => setOpen((v) => !v)}
      >
        {question}
        <ChevronDown className={`h-5 w-5 shrink-0 text-[var(--brand-blue)] transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <p className="pb-5 text-sm leading-7 text-[var(--text-soft)]">{answer}</p>
      )}
    </div>
  )
}

export function HomePage() {
  return (
    <>
      <Seo
        title="Autohuolto Espoossa | Espoon Autohuolto"
        description="Huollot, korjaukset ja suuntaukset Espoon Friisinmäessä. Kaikki automerkit, Fixus-ketju, ajanvaraus verkossa tai puhelimitse."
        structuredData={localBusinessSchema}
      />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--brand-blue)]">
        <div className="absolute inset-0">
          <img
            src={heroImages.mechanic}
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-blue)]/80 to-transparent" />
        </div>

        <div className="shell relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <img
                src="https://fixus.fi/wp-content/uploads/2024/05/Fixus_logo_rgb_120.png"
                alt="Fixus"
                className="h-7 rounded-full bg-white px-2 py-0.5"
              />
              <span className="text-white/60 text-sm">— valtuutettu jälleenmyyjä</span>
            </div>

            <h1 className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Autokorjaamo Friisinmäessä — nopea aika, rehellinen arvio.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/80 max-w-xl">
              Tuo auto huoltoon tai pyydä arviota — pääset usein jo samalle viikolle.
              Kaikki automerkit, Fixus-varaosat, sijaisauto tarpeen mukaan.
            </p>

            {/* Primary + secondary CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/ajanvaraus"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-yellow)] px-8 py-4 text-base font-bold text-[var(--bg-dark)] hover:bg-[var(--brand-yellow-dark)] transition-colors shadow-lg"
              >
                Varaa huoltoaika
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={business.phoneLink}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-white hover:bg-white/20 hover:border-white/60 transition-colors backdrop-blur"
              >
                <Phone className="h-5 w-5" />
                Soita nyt
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/85">
                  <CheckCircle className="h-3.5 w-3.5 shrink-0 text-[var(--brand-yellow)]" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────── */}
      <section className="bg-[var(--bg-blue-dark)] text-white">
        <div className="shell">
          <div className="grid grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.value} className="px-6 py-6 text-center">
                <div className="font-heading text-xl font-bold text-[var(--brand-yellow)] sm:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-white/60 leading-4">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)] mb-2">Palvelut</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--text-strong)] sm:text-4xl">
              Huollot ja korjaukset kaikille automerkeille.
            </h2>
            <p className="mt-3 text-base text-[var(--text-soft)] max-w-2xl">
              Määräaikaishuolloista suuntauksiin ja jarruista moottoritöihin — kaikki hoidetaan Fixus-ketjun laadukkailla varaosilla.
            </p>
          </div>

          {/* Featured 3 services */}
          <div className="grid gap-4 sm:grid-cols-3 mb-4">
            {featuredServices.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.slug}
                  className="rounded-2xl bg-white border border-[var(--line)] p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="h-1 w-10 rounded-full bg-[var(--brand-yellow)] mb-5" />
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-bold text-[var(--text-strong)]">{service.name}</h3>
                  </div>
                  {service.highlight && (
                    <p className="text-xs font-semibold text-[var(--brand-blue)] mb-2">{service.highlight}</p>
                  )}
                  <p className="text-sm leading-6 text-[var(--text-soft)]">{service.summary}</p>
                  {service.forWho && (
                    <p className="mt-3 text-xs text-[var(--text-soft)] italic border-t border-[var(--line)] pt-3">
                      {service.forWho}
                    </p>
                  )}
                </div>
              )
            })}
          </div>

          {/* Remaining services — smaller cards */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.slug}
                  className="rounded-xl bg-white border border-[var(--line)] p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-sm text-[var(--text-strong)]">{service.name}</h3>
                      <p className="mt-1 text-xs leading-5 text-[var(--text-soft)]">{service.summary}</p>
                      {service.forWho && (
                        <p className="mt-2 text-xs text-[var(--text-soft)] italic">{service.forWho}</p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Extra services as chips */}
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-soft)] mb-3">Lisäpalvelut</p>
            <div className="flex flex-wrap gap-2">
              {extraServices.map((service) => (
                <Link
                  key={service.slug}
                  to="/palvelut#lisapalvelut"
                  className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm text-[var(--text-soft)] hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA after services */}
          <div className="mt-10 rounded-2xl bg-[var(--brand-blue)] px-8 py-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-heading text-xl font-bold text-white">Tarvitsetko huoltoa tai korjausta?</p>
              <p className="mt-1 text-sm text-white/70">Varaa aika tai pyydä ensin arvio — se ei sido mihinkään.</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/ajanvaraus"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold text-[var(--bg-dark)] hover:bg-[var(--brand-yellow-dark)] transition-colors shadow"
              >
                Varaa huoltoaika
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={business.phoneLink}
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Soita ja kysy lisää
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS (käytännön edut) ────────────────────── */}
      <section className="section-pad">
        <div className="shell">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)] mb-2">Käytännön edut</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--text-strong)] sm:text-4xl">
              Pienemmät murheet, kun auto on huollossa.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <Link
                key={h.title}
                to={h.to}
                className="group rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm hover:border-[var(--brand-blue)] hover:shadow-md transition-all"
              >
                <div className="h-2 w-8 rounded-full bg-[var(--brand-yellow)] mb-4" />
                <h3 className="font-semibold text-[var(--text-strong)] group-hover:text-[var(--brand-blue)] transition-colors">{h.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{h.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[var(--brand-blue)] opacity-0 group-hover:opacity-100 transition-opacity">
                  Lue lisää <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US + IMAGE ────────────────────────────────── */}
      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 overflow-hidden rounded-2xl shadow-lg lg:order-1">
            <img
              src={heroImages.alignment}
              alt="Suuntaustyö Espoon Autohuollossa"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)] mb-3">Miksi valita meidät</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--text-strong)] sm:text-4xl">
              Paikallinen korjaamo, joka hoitaa myös vaativat työt.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--text-soft)]">
              Espoon Autohuolto on kasvanut Kilosta isompiin tiloihin Friisinmäkeen.
              9 nosturia ja 7 osaavaa mekaanikoa mahdollistavat niin arkirutiinit kuin suuremmat remontit — moottori, vaihteisto, DPF-puhdistus.
            </p>
            <ul className="mt-6 grid gap-3">
              {[
                'Kaikki automerkit — erikoisosaaminen BMW ja Mercedes-Benz',
                'Fixus-ketjun laadukkaat alkuperäiset tai vastaavat varaosat',
                'Nelipyöräsuuntaus Hunterin ammattilaitteilla alkaen 89 €',
                'Auton voi jättää huoltoon myös aukioloaikojen ulkopuolella',
                'Sijaisauto ja rengashotelli tarpeen mukaan',
                'Fixus Lasku: 30 pv koroton maksuaika',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[var(--text-soft)]">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-blue)]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3 flex-wrap items-center">
              <Link to="/yritys" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--brand-blue-dark)] transition-colors">
                Lue lisää yrityksestä
              </Link>
              <img
                src="https://fixus.fi/wp-content/uploads/2024/05/Fixus_logo_rgb_120.png"
                alt="Fixus"
                className="h-7"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS — dark section for identity ───────────── */}
      <section className="section-pad bg-[var(--bg-dark)] text-white">
        <div className="shell">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-yellow)] mb-2">Asiakaskokemukset</p>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Miksi asiakkaat palaavat uudelleen
            </h2>
            <div className="mt-3 flex items-center justify-center gap-1.5 text-sm text-white/60">
              <Star className="h-4 w-4 fill-[var(--brand-yellow)] text-[var(--brand-yellow)]" />
              <span>Google-arvostelut</span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="flex flex-col rounded-xl bg-white/5 border border-white/10 p-6 hover:bg-white/8 hover:-translate-y-1 transition-all"
              >
                <Stars />
                <p className="mt-4 flex-1 text-sm leading-7 text-white/80">
                  "{review.text}"
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)] text-xs font-bold text-white">
                    {review.initials}
                  </div>
                  <p className="text-xs font-medium text-white/50">Google-arvostelu</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)] mb-3">Usein kysyttyä</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--text-strong)] sm:text-4xl">
              Vastauksia yleisimpiin kysymyksiin.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--text-soft)]">
              Etkö löydä vastausta? Soita suoraan tai lähetä viesti — vastataan nopeasti.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={business.phoneLink} className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--brand-blue-dark)] transition-colors">
                <Phone className="h-4 w-4" />
                {business.phoneDisplay}
              </a>
              <Link to="/ajanvaraus" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--text-strong)] hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] transition-colors">
                Varaa aika
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
            {faqItems.map((item) => (
              <FaqItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ─────────────────────────────────── */}
      <section className="bg-[var(--brand-blue)] text-white">
        <div className="shell py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-yellow)] mb-3">Puhelin</div>
              <a href={business.phoneLink} className="flex items-center gap-2 text-xl font-bold hover:text-[var(--brand-yellow)] transition-colors">
                <Phone className="h-5 w-5" />
                {business.phoneDisplay}
              </a>
              <p className="mt-1 text-sm text-white/60">Nopein tapa sopia aika</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-yellow)] mb-3">Sähköposti</div>
              <a href={business.emailLink} className="flex items-center gap-2 text-base font-semibold hover:text-[var(--brand-yellow)] transition-colors">
                <Mail className="h-4 w-4" />
                {business.email}
              </a>
              <Link to="/ajanvaraus" className="mt-2 inline-block text-sm text-white/60 hover:text-white underline underline-offset-2">
                Tai käytä ajanvarauslomaketta →
              </Link>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-yellow)] mb-3">Sijainti</div>
              <a href={business.mapUrl} target="_blank" rel="noreferrer" className="flex items-start gap-2 text-sm hover:text-[var(--brand-yellow)] transition-colors">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {business.fullAddress}
              </a>
              <p className="mt-1 text-sm text-white/60">Lähellä Leppävaaraa</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-yellow)] mb-3">Aukioloajat</div>
              <div className="grid gap-1 text-sm">
                {openingHours.map((item) => (
                  <div key={item.short} className="flex justify-between gap-4">
                    <span className="text-white/70">{item.short}</span>
                    <span className={item.hours === 'Suljettu' ? 'text-white/35' : 'text-white/90'}>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKING CTA (ennen footeria) ──────────────────── */}
      <section className="section-pad">
        <div className="shell">
          <div className="rounded-2xl bg-[var(--brand-blue)] px-8 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-heading text-2xl font-bold text-white">
                Varaa huoltoaika tai pyydä arvio.
              </h2>
              <p className="mt-1 text-sm text-white/70">
                Ajanvaraus ei sido mihinkään — kerro tarve ja me hoidamme loput.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {trustBadges.map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                    <CheckCircle className="h-3 w-3 shrink-0 text-[var(--brand-yellow)]" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/ajanvaraus"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-yellow)] px-7 py-4 text-base font-bold text-[var(--bg-dark)] hover:bg-[var(--brand-yellow-dark)] transition-colors shadow-lg"
              >
                Varaa huoltoaika
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={business.phoneLink}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-7 py-4 text-base font-bold text-white hover:bg-white/20 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Soita ja kysy lisää
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE CTA ─────────────────────────────── */}
      <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden">
        <div className="flex border-t border-white/10 bg-[var(--bg-dark)] shadow-[0_-4px_24px_rgba(0,0,0,0.3)]">
          <a
            href={business.phoneLink}
            className="flex flex-1 items-center justify-center gap-2 py-4 text-sm font-bold text-white hover:bg-white/5 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Soita nyt
          </a>
          <div className="w-px bg-white/10" />
          <Link
            to="/ajanvaraus"
            className="flex flex-1 items-center justify-center gap-2 bg-[var(--brand-yellow)] py-4 text-sm font-bold text-[var(--bg-dark)] hover:bg-[var(--brand-yellow-dark)] transition-colors"
          >
            Varaa aika
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  )
}
