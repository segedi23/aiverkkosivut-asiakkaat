import { services } from '../data/siteContent'
import { Seo } from '../utils/seo'

const serviceImages: Record<string, string> = {
  hitsaus: '/images/hitsaus-01.jpg',
  koneistus: '/images/koneistus-01.jpg',
  pintakasittely: '/images/pintakasittely-01.jpg',
  kokoonpano: '/images/kokoonpano-01.jpg',
  tuotekehitys: '/images/tuotekehitys-29.jpg',
  korjaukset: '/images/koneistus-10.jpg',
}

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Palvelut | Palmet"
        description="Palmetin palvelut: hitsaus, koneistus, pintakäsittely, kokoonpano, tuotekehitys ja kunnossapito."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Palvelut</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Toteutamme konepajaprojektit hitsauksesta koneistukseen, pintakäsittelystä kokoonpanoon ja kunnossapitoon.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-6 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article key={service.slug} className="overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm">
                <img src={serviceImages[service.slug]} alt={service.name} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="font-heading text-3xl font-bold text-[var(--text-strong)]">{service.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{service.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
