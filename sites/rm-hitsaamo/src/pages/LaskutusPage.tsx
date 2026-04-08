import { billing, business } from '../data/siteContent'
import { Seo } from '../utils/seo'

export function LaskutusPage() {
  return (
    <>
      <Seo
        title="Laskutus | RM-Hitsaamo Oy"
        description="RM-Hitsaamo Oy:n laskutustiedot: verkkolasku, PDF-laskut ja yritystiedot."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <h1 className="font-heading text-5xl leading-none sm:text-6xl">Laskutustiedot</h1>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell grid gap-6">
          <article className="rounded-2xl bg-[var(--surface-dark)] p-6 text-white shadow-sm sm:p-8">
            <div className="grid gap-2 text-sm leading-7 sm:text-base">
              <p>
                <strong>OVT-tunnus:</strong> {billing.ovt}
              </p>
              <p>
                <strong>Operaattori:</strong> {billing.operator}
              </p>
              <p>
                <strong>Operaattorin tunnus:</strong> {billing.operatorCode}
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm leading-7 text-[var(--text-soft)]">
              Laskut tulee lähettää ensisijaisesti verkkolaskuna.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
              Mikäli verkkolaskutus ei ole mahdollista, laskut voi lähettää PDF-muodossa sähköpostilla
              osoitteeseen {billing.pdfEmail}
            </p>
            <div className="mt-6 grid gap-2 text-sm leading-7 text-[var(--text-soft)]">
              <p>
                <strong className="text-[var(--text-strong)]">Yritys:</strong> RM-Hitsaamo Oy
              </p>
              <p>
                <strong className="text-[var(--text-strong)]">Osoite:</strong> {business.fullAddress}
              </p>
              <p>
                <strong className="text-[var(--text-strong)]">Y-tunnus:</strong> {business.businessId}
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
