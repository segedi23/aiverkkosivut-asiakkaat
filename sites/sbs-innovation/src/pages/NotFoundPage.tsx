import { Link } from 'react-router-dom'
import { buttonStyles } from '../components/ui/buttonStyles'
import { Seo } from '../utils/seo'

export function NotFoundPage() {
  return (
    <>
      <Seo
        title="Sivua ei löytynyt | SBS Innovation Oy"
        description="Pyydettyä sivua ei löytynyt. Siirry takaisin etusivulle tai yhteystietoihin."
      />
      <section className="section-pad">
        <div className="shell">
          <div className="mx-auto grid max-w-3xl gap-6 rounded-[2.5rem] border border-[var(--line)] bg-white px-6 py-16 text-center shadow-[0_24px_60px_rgba(8,19,31,0.08)] sm:px-10">
            <span className="eyebrow mx-auto bg-[var(--brand-blue-soft)] text-[var(--brand-blue)] ring-[var(--line)]">
              404
            </span>
            <h1 className="font-heading text-5xl leading-none text-[var(--text-strong)] sm:text-6xl">
              Sivua ei löytynyt.
            </h1>
            <p className="text-lg leading-8 text-[var(--text-soft)]">
              Palaa etusivulle tai siirry yhteystietoihin.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link className={buttonStyles('primary', 'lg')} to="/">
                Etusivulle
              </Link>
              <Link className={buttonStyles('ghost', 'lg')} to="/yhteystiedot">
                Yhteystiedot
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
