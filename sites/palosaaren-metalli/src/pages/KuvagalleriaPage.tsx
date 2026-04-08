import { galleryImages } from '../data/siteContent'
import { Seo } from '../utils/seo'

export function KuvagalleriaPage() {
  return (
    <>
      <Seo
        title="Kuvagalleria | Palmet"
        description="Palmetin konepajan kuvagalleria: hitsaus, koneistus, pintakäsittely ja kokoonpano."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Kuvagalleria</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Kuvia Palmetin tuotannosta ja palveluista.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} className="h-64 w-full rounded-2xl object-cover" />
          ))}
        </div>
      </section>
    </>
  )
}
