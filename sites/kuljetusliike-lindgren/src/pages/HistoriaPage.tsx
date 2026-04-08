import { Link } from 'react-router-dom'
import { historyTimeline } from '../data/siteContent'
import { Seo } from '../utils/seo'

export function HistoriaPage() {
  return (
    <>
      <Seo
        title="Historia | Kuljetusliike Lindgren Oy"
        description="Kuljetusliike Lindgren Oy:n historia vuodesta 1964 nykypäivään. Perheyrityksen tarina Kokkolasta."
      />

      <section className="relative bg-[var(--bg-dark)] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: 'url(/images/banner-historia.jpg)' }}
          aria-hidden="true"
        />
        <div className="relative shell py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Historia</p>
          <h1 className="max-w-3xl font-heading text-4xl font-bold sm:text-5xl">
            Yli 60 vuotta kuljetusalan osaamista
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Kuljetusliike Lindgren Oy:n tarina alkoi vuonna 1964, kun Artur Lindgren aloitti
            yhden ajoneuvon voimin. Tänä päivänä palvelemme täyden palvelun kuljetusliikkeenä koko Suomessa.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell max-w-4xl">
          <div className="relative border-l-2 border-[var(--brand-blue)]/30 pl-8">
            {historyTimeline.map((item, index) => {
              const Icon = item.icon

              return (
                <article
                  key={item.year}
                  className={`relative pb-10 ${index === historyTimeline.length - 1 ? 'pb-0' : ''}`}
                >
                  <span className="absolute -left-[calc(1rem+5px)] top-1 h-3 w-3 rounded-full border-2 border-[var(--brand-blue)] bg-white" />
                  <p className="font-heading text-2xl font-bold text-[var(--brand-blue)]">{item.year}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <Icon className="h-4 w-4 text-[var(--brand-blue)]" />
                    <h2 className="text-lg font-semibold text-[var(--text-strong)]">{item.title}</h2>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell text-center">
          <h2 className="font-heading text-4xl font-bold text-[var(--text-strong)] sm:text-5xl">
            Täsmäkuljetusta vuodesta 1964
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[var(--text-soft)] sm:text-base">
            Pitkä kokemus, perheyrityksen arvot ja moderni kalusto — sitä on Kuljetusliike Lindgren.
          </p>
          <Link
            to="/yhteystiedot"
            className="mt-7 inline-flex rounded-full bg-[var(--brand-blue)] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-blue-dark)]"
          >
            Pyydä tarjous
          </Link>
        </div>
      </section>
    </>
  )
}
