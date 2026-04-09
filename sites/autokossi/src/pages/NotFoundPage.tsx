import { Link } from 'react-router-dom'
import { Seo } from '../utils/seo'

function NotFoundPage() {
  return (
    <>
      <Seo
        title="404 | Autokossi"
        description="Sivua ei löytynyt. Palaa etusivulle."
      />
      <section className="section-pad bg-white">
        <div className="shell text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">404</p>
          <h1 className="mt-3 font-[var(--font-display)] text-5xl text-[var(--text-strong)]">Sivua ei löytynyt</h1>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-bold text-white hover:bg-[var(--brand-primary-dark)]"
          >
            Takaisin etusivulle
          </Link>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage
