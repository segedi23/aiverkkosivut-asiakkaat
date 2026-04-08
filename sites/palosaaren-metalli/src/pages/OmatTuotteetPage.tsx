import { ownProducts } from '../data/siteContent'
import { Seo } from '../utils/seo'

const productImages: Record<string, string> = {
  Seetirenkaat: '/images/seetirengas-01.png',
  'Pakokaasujen äänenvaimentimet': '/images/pakovaimennin-01.jpg',
  Ilmaäänenvaimentimet: '/images/pakovaimennin-08.jpg',
  Hitsauskiinnittimet: '/images/hitsauskiinnitin.png',
  Koneistuskiinnittimet: '/images/koneistuskiinnitin.png',
  Jäähdytysvesipumput: '/images/vesipumppu-01.jpg',
}

export function OmatTuotteetPage() {
  return (
    <>
      <Seo
        title="Omat tuotteet | Palmet"
        description="Palmetin omat tuotteet: seetirenkaat, äänenvaimentimet, hitsaus- ja koneistuskiinnittimet sekä jäähdytysvesipumput."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Omat tuotteet</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Valmistamme omia tuotteita teollisuuden vaativiin käyttöympäristöihin.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ownProducts.map((product) => (
            <article key={product.name} className="overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm">
              <img src={productImages[product.name]} alt={product.name} className="h-52 w-full bg-[var(--surface-soft)] object-cover p-3" />
              <div className="p-6">
                <h2 className="font-heading text-2xl font-bold text-[var(--text-strong)]">{product.name}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
