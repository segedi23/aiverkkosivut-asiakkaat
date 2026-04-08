import { CheckCircle2, Shield } from 'lucide-react'
import { business } from '../data/siteContent'
import { Seo } from '../utils/seo'

const highlights = [
  'Paikkamaalauksesta kokonaismaalauksiin kaikki automerkit.',
  'Tarkka sävymallinnus ja laadukkaat maalausjärjestelmät.',
  'Kolarimaalaukset ja ylimaalaukset ammattitason viimeistelyllä.',
  'Työt tehdään sovitussa aikataulussa ja dokumentoidaan selkeästi.',
]

export function AutomaalausPage() {
  return (
    <>
      <Seo
        title="Automaalaus | SBS Innovation Oy"
        description="Paikkamaalauksesta kokonaismaalauksiin — SBS Innovation Oy toteuttaa automaalaukset kaikille merkeille Hyvinkäällä."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">Automaalaus</p>
          <h1 className="mt-3 font-[var(--font-display)] text-4xl sm:text-5xl">Automaalaus</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Paikkamaalauksesta kokonaismaalauksiin — kaikki merkit.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <h2 className="font-[var(--font-display)] text-3xl text-[var(--text-strong)] sm:text-4xl">Laadukasta automaalausta vuodesta 2003</h2>
            <p className="mt-4 text-base leading-8 text-[var(--text-soft)]">
              {business.intro}
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--text-soft)]">
              Toteutamme paikkamaalaukset, kolarimaalaukset ja koko auton ylimaalaukset niin, että sävy, kiilto ja viimeistely
              vastaavat ajoneuvon alkuperäistä laatutasoa. Käytämme markkinoiden parhaita tuotteita ja työmenetelmiä.
            </p>
            <ul className="mt-6 grid gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-[var(--text-soft)]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-blue)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <img
            src="/images/porsche.jpg"
            alt="Automaalausprojekti"
            className="h-80 w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell rounded-3xl border border-[var(--line)] bg-white p-8 sm:p-10">
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
              <Shield className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-[var(--font-display)] text-3xl text-[var(--text-strong)] sm:text-4xl">Vakuutusyhtiöyhteistyö</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-soft)]">
                Suoritamme kaikkien vakuutusyhtiöiden vahinkotarkastukset ilman ajanvarausta ja hoidamme yhteydenpidon
                vakuutusyhtiön kanssa puolestasi. Palveluun luottavat yksityisasiakkaiden lisäksi autopeltikorjaamot,
                vakuutusyhtiöt sekä moottoripyörien maahantuojat ja korjaamot.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
