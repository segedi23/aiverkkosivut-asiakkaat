import { ArrowRight, CheckCircle, MapPin, Phone, ShieldCheck, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, heroImages } from '../data/siteContent'
import { Seo } from '../utils/seo'

const facts = [
  { icon: ShieldCheck, title: 'Toiminnassa vuodesta 2012', desc: 'Yli kymmenen vuoden kokemus espoolaisesta autohuollosta. Vakiintunut asiakaskunta ja tuttu toimintatapa.' },
  { icon: Wrench, title: 'Kasvu Kilosta Friisinmäkeen', desc: 'Uudet isommat tilat Friisinmäessä lähellä Leppävaaraa. 9 nosturia ja tilaa myös vaativimmille töille.' },
  { icon: MapPin, title: 'Osa Fixus-ketjua', desc: 'Valtakunnallinen Fixus-verkosto takaa laadukkaat alkuperäiset tai alkuperäistä vastaavat varaosat.' },
]

export function AboutPage() {
  return (
    <>
      <Seo
        title="Yritys | Espoon Autohuolto"
        description="Espoon Autohuolto on vuodesta 2012 Espoossa toiminut autokorjaamo Friisinmäessä. Kaikki automerkit, Fixus-ketju ja 9 nosturia."
      />

      {/* Hero */}
      <section className="bg-[var(--brand-blue)] text-white">
        <div className="shell py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-yellow)] mb-3">Yritys</p>
              <h1 className="font-heading text-4xl font-bold sm:text-5xl">
                Paikallinen autokorjaamo, joka on kasvanut oikeaan suuntaan.
              </h1>
              <p className="mt-5 text-lg text-white/75 leading-7 max-w-xl">
                {business.brandName} on vuodesta {business.founded} Espoossa toiminut autokorjaamo, joka huoltaa ja korjaa kaikki automerkit.
                Kasvu on vienyt yrityksen Kilosta isompiin tiloihin Friisinmäkeen — nyt käytössä on 9 nosturia ja osaaminen myös vaativimmista töistä.
              </p>
              <div className="mt-8 flex gap-3 flex-wrap">
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
            <div className="hidden lg:block overflow-hidden rounded-2xl shadow-2xl">
              <img src={heroImages.mechanic} alt="Mekaanikko työssä" className="h-[380px] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="section-pad">
        <div className="shell grid gap-6 sm:grid-cols-3">
          {facts.map((fact) => {
            const Icon = fact.icon
            return (
              <div key={fact.title} className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)] mb-4">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="font-semibold text-[var(--text-strong)] mb-2">{fact.title}</h2>
                <p className="text-sm leading-7 text-[var(--text-soft)]">{fact.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* What you get */}
      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)] mb-3">Mitä saat meiltä</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--text-strong)] sm:text-4xl">
              Yksi paikka, kaikki merkit, selkeä kokonaispaketti.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--text-soft)]">
              Espoon Autohuolto hoitaa niin arkirutiinit kuin laajemmat remontit.
              Sijaisauto ja rengashotelli saa samalta varauksellaisen, ja joustava Fixus Lasku auttaa isompienkin töiden maksussa.
            </p>
            <ul className="mt-6 grid gap-3">
              {[
                'Kaikki automerkit — erikoisosaaminen BMW ja Mercedes-Benz',
                'Fixus-ketjun varaosat: alkuperäiset tai alkuperäistä vastaavat',
                'Nelipyöräsuuntaus Hunterin laitteilla',
                'Automaattivaihteiston huuhtelu ja DPF-puhdistus',
                'Sijaisauto saatavilla — ilmoita varauksessa',
                'Auton voi jättää myös aukioloaikojen ulkopuolella',
                'Fixus Lasku: 30 pv koroton maksuaika',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[var(--text-soft)]">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-blue)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)] mb-4">Yhteystiedot</p>
            <div className="grid gap-4 text-sm">
              <div>
                <div className="font-semibold text-[var(--text-strong)]">{business.brandName}</div>
                <div className="text-[var(--text-soft)]">{business.legalName}</div>
              </div>
              <div>
                <div className="text-[var(--text-soft)]">{business.addressStreet}</div>
                <div className="text-[var(--text-soft)]">{business.postalCode} {business.city}</div>
              </div>
              <a href={business.phoneLink} className="font-semibold text-[var(--brand-blue)] hover:underline">{business.phoneDisplay}</a>
              <a href={business.emailLink} className="text-[var(--text-soft)] hover:text-[var(--brand-blue)]">{business.email}</a>
            </div>
            <div className="mt-6 flex gap-3">
              <Link to="/ajanvaraus" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--brand-blue-dark)] transition-colors">
                Varaa aika
              </Link>
              <Link to="/yhteystiedot" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--text-strong)] hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] transition-colors">
                Yhteystiedot
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
