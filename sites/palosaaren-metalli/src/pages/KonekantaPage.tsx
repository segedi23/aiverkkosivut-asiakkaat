import { machineFleet } from '../data/siteContent'
import { Seo } from '../utils/seo'

const machineCategories: { key: keyof typeof machineFleet; title: string }[] = [
  { key: 'cncHorizontal', title: 'CNC-koneistuskeskukset (vaakakaraiset)' },
  { key: 'cncVertical', title: 'CNC-koneistuskeskukset (pystykaraiset)' },
  { key: 'cncLathes', title: 'CNC-sorvit' },
  { key: 'manualLathes', title: 'Konventionaaliset sorvit' },
  { key: 'sheetMetal', title: 'Levy- ja särmäystyöt' },
  { key: 'welding', title: 'Hitsaus ja robotiikka' },
  { key: 'support', title: 'Tukivarusteet ja mittaus' },
]

export function KonekantaPage() {
  return (
    <>
      <Seo
        title="Konekanta | Palmet"
        description="Palmetin konekanta: CNC-koneistus, sorvit, levytyöt, hitsausrobotiikka sekä mittaus- ja tukivarusteet."
      />

      <section className="relative overflow-hidden bg-[var(--bg-dark)] text-white">
        <img src="/images/koneistus-01.jpg" alt="Palmetin koneistus" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#0f172ac2]" />

        <div className="shell relative py-16 sm:py-20">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Konekanta</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85">
            Käytössämme on noin 6 500 m² hallitilaa, 40 tonnin nostokapasiteetti ja 10 metrin koukkukorkeus vaativiin kappaleisiin.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-6">
          {machineCategories.map((category) => (
            <article key={category.key} className="overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm">
              <h2 className="border-b border-[var(--line)] bg-[var(--surface-soft)] px-6 py-4 font-heading text-2xl font-bold text-[var(--text-strong)]">
                {category.title}
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-[var(--line)] text-xs uppercase tracking-wider text-[var(--text-soft)]">
                      <th className="px-6 py-3 font-semibold">Kone</th>
                      <th className="px-6 py-3 font-semibold">Tekniset tiedot</th>
                      <th className="px-6 py-3 font-semibold">Lisätiedot</th>
                    </tr>
                  </thead>
                  <tbody>
                    {machineFleet[category.key].map((machine) => (
                      <tr key={machine.name} className="border-b border-[var(--line)] last:border-b-0">
                        <td className="px-6 py-4 font-semibold text-[var(--text-strong)]">{machine.name}</td>
                        <td className="px-6 py-4 text-[var(--text-soft)]">{machine.specs || '—'}</td>
                        <td className="px-6 py-4 text-[var(--text-soft)]">{machine.details || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
