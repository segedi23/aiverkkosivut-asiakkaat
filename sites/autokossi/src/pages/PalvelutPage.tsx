import { Phone, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, services } from '../data/siteContent'
import { Seo } from '../utils/seo'

const vehicleTypes = [
  'Henkilö- ja pakettiautot',
  'Asuntoautot ja -vaunut',
  'Traktorit',
  'Maatalous- ja työkoneet',
  'Mopoautot',
]

function PalvelutPage() {
  return (
    <>
      <Seo
        title="Korjaamopalvelut | Autokossi"
        description="Huollamme ja korjaamme henkilö- ja pakettiautot, asuntoautot ja -vaunut, traktorit sekä työkoneet Kiuruvedellä — jo 49 vuoden kokemuksella."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-accent)]">Korjaamopalvelut</p>
          <h1 className="mt-3 font-[var(--font-display)] text-4xl font-bold sm:text-5xl">
            Täyden palvelun korjaamo Kiuruvedellä
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/80">
            Huollamme ja korjaamme henkilö- ja pakettiautot, asuntoautot ja -vaunut,
            traktorit sekä työkoneet samalla ammattitaidolla — merkistä riippumatta.
            49 vuoden kokemus takaa, että kohtaamme harvoin vikaa jota emme tuntisi.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {vehicleTypes.map((type) => (
              <span
                key={type}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90"
              >
                <CheckCircle2 className="h-4 w-4 text-[var(--brand-accent)]" />
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">Palvelumme</p>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl font-bold text-[var(--text-strong)] sm:text-4xl">
              Kaikki autohuollot ja korjaukset saman katon alta
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article
                  key={service.slug}
                  className="flex gap-5 rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-[var(--font-display)] text-xl font-bold text-[var(--text-strong)]">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-body)]">
                      {service.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">
              Erikoisalueemme
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl font-bold text-[var(--text-strong)] sm:text-4xl">
              Traktorit ja työkoneet — myös paikan päällä
            </h2>
            <p className="mt-4 leading-8 text-[var(--text-body)]">
              Maatalous- ja teollisuuskoneet ovat meille tuttuja. Tarvittaessa tulemme
              huoltamaan koneet suoraan tilallesi tai työmaalle — omilla työkaluilla ja
              varaosilla. Näin säästyy turha kuljetusreissu eikä työ keskeydy pitkäksi
              aikaa.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-[var(--text-body)]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-accent)]" />
                Kenttähuollot suoraan tilallesi
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-accent)]" />
                Hydrauliikka, sähköjärjestelmät ja moottorit
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-accent)]" />
                Runkohitsaukset ja ruostevauriokorjaukset
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-accent)]" />
                Sopimuksesta myös viikonloppuisin
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">
              Näin toimimme
            </p>
            <h3 className="mt-3 font-[var(--font-display)] text-2xl font-bold text-[var(--text-strong)]">
              Soita ja kysy lisää
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">
              Ilmoita työtilauksen yhteydessä auton rekisterinumero ja ajokilometrit,
              niin varmistamme oikeat varaosat ja ajomääräkohtaisen huolto-ohjelman
              kerralla.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={business.phoneLink}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-primary-dark)]"
              >
                <Phone className="h-4 w-4" />
                {business.phoneDisplay}
              </a>
              <Link
                to="/yhteystiedot"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-6 py-3 text-sm font-semibold text-[var(--text-strong)] transition-colors hover:border-[var(--brand-primary)]"
              >
                Yhteystiedot
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PalvelutPage
