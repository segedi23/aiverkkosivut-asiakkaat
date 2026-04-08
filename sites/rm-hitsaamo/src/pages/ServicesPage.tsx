import { CheckCircle2, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, services } from '../data/siteContent'
import { Seo } from '../utils/seo'

const certificationItems = [
  'FISE-pätevyydet luokissa 2 ja poikkeuksellisen vaativa',
  'CE EN 1090 -merkityt kantavat teräsrakenteet',
  'Sertifioitu hitsauskoordinaattori (Inspecta Sertifiointi)',
]

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Palvelut | RM-Hitsaamo Oy"
        description="RM-Hitsaamo Oy:n tuotteet ja palvelut: CE-merkityt teräsrakenteet suunnittelusta valmistukseen ja asennukseen."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/65">Palvelut</p>
          <h1 className="max-w-4xl font-heading text-5xl leading-none sm:text-6xl">Tuotteet ja palvelut</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Suunnittelemme, valmistamme ja asennamme CE-merkittyjä teräsrakenteita.
          </p>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-white/80">
            Teemme tuotteita sekä teräksestä että ruostumattomasta teräksestä. Toimitusvarmuutemme perustuu
            omaan teräsrakennesuunnitteluun, ammattitaitoiseen työnjohtoon ja omaan vahvan kokemuksen omaavaan
            asennushenkilökuntaan.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/yhteystiedot"
              className="inline-flex items-center rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-blue-dark)]"
            >
              Pyydä tarjous
            </Link>
            <a
              href={business.phoneLink}
              className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.slug} className="rounded-2xl border border-[var(--line)] bg-white p-7 shadow-sm">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-semibold text-[var(--text-strong)]">{service.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{service.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell">
          <article className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-heading text-4xl text-[var(--text-strong)]">Sertifikaatit ja laatu</h2>
            <ul className="mt-5 grid gap-3 text-sm leading-7 text-[var(--text-soft)]">
              {certificationItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-blue)]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  )
}
