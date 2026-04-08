import { CheckCircle2, Phone } from 'lucide-react'
import { business, fleet } from '../data/siteContent'
import { Seo } from '../utils/seo'

export function KalustoPage() {
  return (
    <>
      <Seo
        title="Kalusto | Kuljetusliike Lindgren Oy"
        description="Kuljetusliike Lindgren Oy:n kalusto: pakettiautot, kevytkuorma-autot, raskaat kuorma-autot ja puoliperäyhdistelmät. Kaikissa takalaitanostimet."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Kalusto</p>
          <h1 className="max-w-3xl font-heading text-4xl font-bold sm:text-5xl">
            Monipuolinen kuljetuskalusto
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Kalustomme kattaa pakettiautot, kevytkuorma-autot, raskaat kuorma-autot ja puoliperäyhdistelmät.
            Kaikissa ajoneuvoissa on takalaitanostimet ja useimmissa lämpösäädellyt kuormatilat.
          </p>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell grid gap-6 md:grid-cols-2">
          {fleet.map((vehicle) => (
            <article
              key={vehicle.type}
              className="overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm"
            >
              <div className="p-6">
                <h2 className="font-heading text-2xl font-bold text-[var(--text-strong)]">
                  {vehicle.type}
                </h2>
                <p className="mt-2 text-3xl font-bold text-[var(--brand-blue)]">{vehicle.capacity}</p>
                <ul className="mt-4 grid gap-2">
                  {vehicle.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[var(--text-soft)]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--brand-blue)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-dark)] text-white">
        <div className="shell text-center">
          <h2 className="font-heading text-4xl font-bold sm:text-5xl">
            Kuormatilat 17–77 m³
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/80 sm:text-base">
            Kaikissa ajoneuvoissamme on takalaitanostimet. Suurin osa kalustosta on kylkiaukeavia ja
            varustettu lämpösäädetyin kuormatiloin. Kysy lisää — sovitamme kaluston tarpeesi mukaan.
          </p>
          <a
            href={business.phoneLink}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[var(--bg-dark)] transition-colors hover:bg-slate-100"
          >
            <Phone className="h-4 w-4" />
            {business.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  )
}
