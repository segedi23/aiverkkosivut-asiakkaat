import { galleryImages } from '../data/siteContent'
import { Seo } from '../utils/seo'

export function KuvagalleriaPage() {
  return (
    <>
      <Seo
        title="Kuvagalleria | RM-Hitsaamo Oy"
        description="RM-Hitsaamo Oy:n kuvagalleria teräsrakenteista ja toteutetuista kohteista."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <h1 className="font-heading text-5xl leading-none sm:text-6xl">Kuvagalleria — muutamia kuvia kohteistamme</h1>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] p-2">
                <img src={image.src} alt={image.alt} className="h-64 w-full rounded-xl object-cover" />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
