import { ShieldCheck } from 'lucide-react'
import { certifications } from '../data/siteContent'
import { Seo } from '../utils/seo'

export function SertifikaatitPage() {
  return (
    <>
      <Seo
        title="Sertifikaatit | Palmet"
        description="Palmetin sertifikaatit ja laadunvarmistus vaativaan konepajatuotantoon."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Sertifikaatit</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Laatu, ympäristövastuu ja turvallisuus ovat olennainen osa Palmetin toimintaa.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <article key={cert.name} className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-heading text-2xl font-bold text-[var(--text-strong)]">{cert.name}</h2>
              <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{cert.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
