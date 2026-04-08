import { historyTimeline } from '../data/siteContent'
import { Seo } from '../utils/seo'

export function HistoriaPage() {
  return (
    <>
      <Seo
        title="Historia | Palmet"
        description="Palosaaren Metallin historia vuodesta 1970 tähän päivään."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Historia</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Yli 50 vuotta metallialan osaamista alihankinnasta omiin tuotteisiin.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-start">
          <div className="relative">
            <div className="absolute bottom-0 left-[78px] top-0 hidden w-px bg-[var(--line)] sm:block" />

            <div className="grid gap-8">
              {historyTimeline.map((item) => (
                <article key={item.year} className="sm:grid sm:grid-cols-[120px_1fr] sm:gap-6">
                  <div className="font-heading text-4xl font-bold leading-none text-[var(--brand-blue)] sm:text-5xl">{item.year}</div>
                  <div className="mt-2 rounded-2xl border border-[var(--line)] bg-white p-5 text-sm leading-7 text-[var(--text-soft)] sm:mt-0">
                    {item.text}
                    {item.year === 1981 ? (
                      <figure className="mt-5 overflow-hidden rounded-xl border border-[var(--line)]">
                        <img src="/images/historia-majakka.jpg" alt="Vaasan majakka vuonna 1981" className="h-56 w-full object-cover" />
                      </figure>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)]">
            <img src="/images/historia-majakka.jpg" alt="Vaasan majakka" className="h-64 w-full object-cover" />
            <div className="p-6">
              <h2 className="font-heading text-3xl font-bold text-[var(--text-strong)]">Vaasan majakka</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                Vuonna 1981 Palmet rakensi 16,3 metriä korkean Vaasan majakan, joka kuljetettiin ja asennettiin merelle.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
