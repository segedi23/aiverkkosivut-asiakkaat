import { Link } from 'react-router-dom'
import { Seo } from '../utils/seo'

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="404 | Länsiväylän Auto"
        description="Sivua ei löytynyt. Palaa etusivulle."
      />
      <section className="section-pad">
        <div className="shell">
          <div className="mx-auto max-w-2xl rounded-3xl border border-[var(--line)] bg-white px-6 py-14 text-center sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">404</p>
            <h1 className="mt-3 font-heading text-5xl font-semibold text-[var(--text-strong)]">Sivua ei löytynyt</h1>
            <Link
              to="/"
              className="mt-8 inline-flex rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-primary-dark)]"
            >
              Takaisin etusivulle
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
