import { ArrowUpRight, Car, CreditCard, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business } from '../data/siteContent'
import { Seo } from '../utils/seo'

const NETTIAUTO_URL = 'https://www.nettiauto.com/autokossi'

function VaihtoautotPage() {
  return (
    <>
      <Seo
        title="Vaihtoautot | Autokossi"
        description="Autokossin vaihtoautovalikoima Nettiautossa. Tarjoamme myös autorahoituksen — luottopäätökset 24/7."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-primary)]">Vaihtoautot</p>
          <h1 className="mt-3 font-[var(--font-display)] text-4xl font-bold sm:text-5xl">
            Vaihtoautot Nettiautossa
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">
            Myymme vaihtoautoja aika ajoin. Ajantasainen valikoima löytyy
            Nettiautosta, jossa pidämme omat ilmoituksemme aina ajan tasalla.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="rounded-2xl border border-[var(--line)] bg-white p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]">
                <Car className="h-7 w-7" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  Autokossi Nettiautossa
                </p>
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--text-strong)]">
                  Katso nykyinen valikoima
                </h2>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-[var(--text-body)]">
              Kaikki myynnissä olevat autot löydät suoraan Nettiauto.com-sivulta.
              Sieltä näet auton kuvat, tiedot ja hinnan. Jos jokin auto kiinnostaa,
              voit soittaa Kalervolle tai poiketa paikan päällä Kievarintiellä.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={NETTIAUTO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-primary-dark)]"
              >
                Avaa Nettiautossa
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={business.phoneLink}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-6 py-3 text-sm font-semibold text-[var(--text-strong)] transition-colors hover:border-[var(--brand-primary)]"
              >
                <Phone className="h-4 w-4" />
                {business.phoneDisplay}
              </a>
            </div>

            <p className="mt-6 rounded-xl bg-[var(--surface-soft)] px-4 py-3 text-xs text-[var(--text-muted)]">
              Jos Nettiauto-linkkimme ei näytä juuri nyt yhtään autoa, meillä ei
              sillä hetkellä ole myynnissä kohteita. Uusia tulee säännöllisesti —
              tai kysy suoraan, minkälaista autoa etsit.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-8">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[var(--brand-primary)] shadow-sm">
              <CreditCard className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-[var(--font-display)] text-xl font-bold text-[var(--text-strong)]">
              Rahoitus samalla kertaa
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">
              Järjestämme vaihtoauton rahoituksen saman käynnin yhteydessä.
              Luottopäätökset 24/7, käsiraha alkaen 10 % ja maksuaika jopa 60 kk.
            </p>
            <Link
              to="/rahoitus"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
            >
              Lue lisää rahoituksesta →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default VaihtoautotPage
