import { CheckCircle2 } from 'lucide-react'
import { jobOpenings } from '../data/siteContent'
import { Seo } from '../utils/seo'

export function RekryPage() {
  return (
    <>
      <Seo
        title="Rekrytointi | Palmet"
        description="Avoimet työpaikat Palmetilla: CNC-koneistaja, robottihitsaaja ja hitsaaja."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Rekrytointi</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Haluatko mukaan tekemään vaativia konepajaprojekteja modernissa tuotantoympäristössä?
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-6 lg:grid-cols-3">
          {jobOpenings.map((job) => (
            <article key={job.title} className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
              <h2 className="font-heading text-3xl font-bold text-[var(--text-strong)]">{job.title}</h2>

              <div className="mt-5 grid gap-5 text-sm leading-7 text-[var(--text-soft)]">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">Tehtävät</h3>
                  <ul className="mt-2 grid gap-2">
                    {job.tasks.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-blue)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">Odotamme</h3>
                  <ul className="mt-2 grid gap-2">
                    {job.requirements.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-blue)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">Tarjoamme</h3>
                  <ul className="mt-2 grid gap-2">
                    {job.benefits.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-blue)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="shell mt-10">
          <div className="rounded-2xl bg-[var(--bg-dark)] px-6 py-5 text-white sm:px-8">
            <p className="text-sm text-white/80">Lähetä hakemus:</p>
            <a href="mailto:info@palmet.fi" className="mt-2 inline-flex text-2xl font-semibold text-[var(--brand-blue)] hover:underline">
              info@palmet.fi
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
