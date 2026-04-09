import { CreditCard, Mail, Phone } from 'lucide-react'
import { business } from '../data/siteContent'
import { Seo } from '../utils/seo'

function RahoitusPage() {
  return (
    <>
      <Seo
        title="Autorahoitus Kiuruvedellä | Autokossi"
        description="Rahoitamme autot, moottoripyörät, veneet, asuntovaunut ja muut ajoneuvot. Luottopäätökset 24/7."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">Rahoitus</p>
          <h1 className="mt-3 font-[var(--font-display)] text-4xl sm:text-5xl">Autorahoitus Kiuruvedellä</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
            Rahoitamme autot, moottoripyörät, veneet, asuntovaunut ja muut ajoneuvot. Luottopäätökset 24/7.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-4 md:grid-cols-3">
          {[
            { title: 'Luottopäätös 24/7', value: 'Nopea käsittely ympäri vuorokauden' },
            { title: 'Käsiraha min. 10 %', value: 'Aloitus joustavasti tarpeen mukaan' },
            { title: 'Maksuaika jopa 60 kk', value: 'Sovitaan kuukausierä tilanteesi mukaan' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-6">
              <CreditCard className="h-5 w-5 text-[var(--brand-primary)]" />
              <h2 className="mt-3 font-[var(--font-display)] text-2xl text-[var(--text-strong)]">{item.title}</h2>
              <p className="mt-2 text-sm leading-7 text-[var(--text-body)]">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="shell mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="font-[var(--font-display)] text-3xl text-[var(--text-strong)]">Rahoitamme:</h2>
            <ul className="mt-4 grid gap-2 text-sm text-[var(--text-body)]">
              {['Autot', 'Moottoripyörät', 'Veneet', 'Asuntovaunut', 'Muut ajoneuvot'].map((item) => (
                <li key={item} className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--brand-primary-soft)] p-6 text-[var(--text-strong)]">
            <p className="font-[var(--font-display)] text-3xl">Kysy lisää rahoituksesta</p>
            <p className="mt-3 text-sm leading-7">Kysy lisää rahoituksesta: 0400 654 758 tai kalervo.kossi@autokossi.fi</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={business.phoneLink} className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-accent)] px-5 py-2.5 text-sm font-bold text-white hover:bg-[var(--brand-accent-dark)]">
                <Phone className="h-4 w-4" />
                {business.phoneDisplay}
              </a>
              <a href={business.emailLink} className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--brand-primary)]">
                <Mail className="h-4 w-4" />
                {business.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RahoitusPage
