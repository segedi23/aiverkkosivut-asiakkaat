import { Bike } from 'lucide-react'
import { Seo } from '../utils/seo'

const paintTypes = ['Candy', 'Fleikki', 'Helmiäis', 'Matta', 'Efekti', 'Raidoitukset']

export function MpMaalauksetPage() {
  return (
    <>
      <Seo
        title="Moottoripyörien maalaus | SBS Innovation Oy"
        description="Erikoistuneet moottoripyörien kolari- ja ylimaalauksiin sekä näyttäviin erikoismaalauksiin Hyvinkäällä."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">MP-maalaukset</p>
          <h1 className="mt-3 font-[var(--font-display)] text-4xl sm:text-5xl">Moottoripyörien maalaus</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Erikoistuneet moottoripyörien kolari- ja ylimaalauksiin.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-8">
          <img
            src="/images/acs11.jpg"
            alt="Moottoripyörän erikoismaalaus"
            className="h-[440px] w-full rounded-2xl object-cover"
            loading="lazy"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {paintTypes.map((item) => (
              <article key={item} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-5">
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                  <Bike className="h-5 w-5" />
                </span>
                <h2 className="text-lg font-bold text-[var(--text-strong)]">{item}</h2>
                <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
                  Toteutamme {item.toLowerCase()}-maalaukset huolellisella pohjatyöllä ja viimeistelyllä.
                </p>
              </article>
            ))}
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-6">
            <p className="text-base leading-8 text-[var(--text-soft)]">
              Moottoripyörien värit eivät ole yhtä standardisoituja kuin autoissa, mutta pitkällä kokemuksellamme osaamme
              eri valmistajien jipon.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
