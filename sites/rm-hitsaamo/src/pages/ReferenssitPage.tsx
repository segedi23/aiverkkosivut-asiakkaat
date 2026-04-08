import { referenssit } from '../data/siteContent'
import { Seo } from '../utils/seo'

export function ReferenssitPage() {
  return (
    <>
      <Seo
        title="Referenssit | RM-Hitsaamo Oy"
        description="RM-Hitsaamo Oy:n referenssit valituista hankkeista lähivuosilta."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <h1 className="font-heading text-5xl leading-none sm:text-6xl">Referenssit — valittuja hankkeita lähivuosilta</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Olemme ehtineet olemaan mukana toteuttamassa useita hankkeita.
          </p>
        </div>
      </section>

      {referenssit.map((yearData, index) => (
        <section
          key={yearData.year}
          className={index % 2 === 0 ? 'section-pad bg-white' : 'section-pad bg-[var(--surface-soft)]'}
        >
          <div className="shell">
            <article className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-heading text-4xl text-[var(--text-strong)]">{yearData.year}</h2>
              <ul className="mt-6 grid gap-4 text-sm leading-7 text-[var(--text-soft)]">
                {yearData.projects.map((project) => (
                  <li key={`${yearData.year}-${project.client}-${project.project}`} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-blue)]" aria-hidden="true" />
                    <p>
                      <strong className="text-[var(--text-strong)]">
                        {project.client} — {project.project}
                      </strong>
                      : {project.description}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      ))}
    </>
  )
}
