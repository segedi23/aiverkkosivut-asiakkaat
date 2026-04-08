import { Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ContactForm } from '../components/forms/ContactForm'
import { business, openingHours } from '../data/siteContent'
import { Seo } from '../utils/seo'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Yhteystiedot | Espoon Autohuolto"
        description="Espoon Autohuollon yhteystiedot, aukioloajat ja sijainti Friisinmäessä. Soita, lähetä sähköpostia tai täytä yhteydenottolomake."
      />

      {/* Hero */}
      <section className="bg-[var(--brand-blue)] text-white">
        <div className="shell py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-yellow)] mb-3">Yhteystiedot</p>
          <h1 className="font-heading text-4xl font-bold sm:text-5xl max-w-3xl">
            Ota yhteyttä tai varaa aika.
          </h1>
          <p className="mt-5 text-lg text-white/75 max-w-xl leading-7">
            Puhelin, sähköposti ja sijainti — kaikki löytyy tältä sivulta. Auton voi jättää myös aukioloaikojen ulkopuolella, sovitaan käytännöistä varausta tehdessä.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="section-pad">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Left: contact cards + hours */}
          <div className="grid gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)] mb-1">Ota yhteyttä</p>

            <a href={business.phoneLink} className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm hover:border-[var(--brand-blue)] transition-colors">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--text-soft)] mb-0.5">Puhelin</div>
                <div className="font-semibold text-[var(--text-strong)]">{business.phoneDisplay}</div>
              </div>
            </a>

            <a href={business.emailLink} className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm hover:border-[var(--brand-blue)] transition-colors">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--text-soft)] mb-0.5">Sähköposti</div>
                <div className="font-semibold text-[var(--text-strong)]">{business.email}</div>
              </div>
            </a>

            <a href={business.mapUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm hover:border-[var(--brand-blue)] transition-colors">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--text-soft)] mb-0.5">Osoite</div>
                <div className="font-semibold text-[var(--text-strong)]">{business.fullAddress}</div>
                <div className="text-sm text-[var(--text-soft)]">Lähellä Leppävaaraa</div>
              </div>
            </a>

            <a href={business.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm hover:border-[var(--brand-blue)] transition-colors">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                <ExternalLink className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--text-soft)] mb-0.5">Facebook</div>
                <div className="font-semibold text-[var(--text-strong)]">facebook.com/espoonautohuolto</div>
              </div>
            </a>

            {/* Hours */}
            <div className="rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-[var(--brand-blue)]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-soft)]">Aukioloajat</span>
              </div>
              <div className="grid gap-2 text-sm">
                {openingHours.map((item) => (
                  <div key={item.day} className="flex justify-between gap-4">
                    <span className="text-[var(--text-soft)]">{item.day}</span>
                    <span className={item.hours === 'Suljettu' ? 'text-[var(--text-muted)]' : 'font-medium text-[var(--text-strong)]'}>{item.hours}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-[var(--text-soft)]">{business.dropoffNote}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/ajanvaraus" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--brand-blue-dark)] transition-colors">
                Varaa aika
              </Link>
              <a href={business.phoneLink} className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--text-strong)] hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] transition-colors">
                <Phone className="h-4 w-4" />
                Soita nyt
              </a>
            </div>
          </div>

          {/* Right: contact form */}
          <ContactForm />
        </div>
      </section>

      {/* Map + location info */}
      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="overflow-hidden rounded-2xl border border-[var(--line)] shadow-sm">
            <iframe
              title="Espoon Autohuolto kartalla"
              src={business.mapEmbed}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)] mb-1">Sijainti</p>
            <h2 className="font-heading text-2xl font-bold text-[var(--text-strong)] sm:text-3xl">
              Helppo löytää lähellä Leppävaaraa.
            </h2>
            <p className="text-sm leading-7 text-[var(--text-soft)]">
              Toimipiste sijaitsee Friisinmäentiellä lähellä Leppävaaraa ja Turunväylän liittymää.
            </p>

            <div className="rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-[var(--text-strong)] mb-1">{business.brandName}</div>
              <div className="text-sm text-[var(--text-soft)]">{business.legalName}</div>
              <div className="mt-2 text-sm text-[var(--text-soft)]">{business.addressStreet}</div>
              <div className="text-sm text-[var(--text-soft)]">{business.postalCode} {business.city}</div>
              <div className="mt-2 text-xs text-[var(--text-soft)]">Y-tunnus {business.businessId}</div>
            </div>

            <div className="rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-[var(--text-strong)] mb-2">Tuulilasin vaihto</div>
              <p className="text-sm text-[var(--text-soft)] leading-6">
                Tuulilasin vaihdot tekee Espoon Autohuollon tiloissa <strong>Pesulasi</strong>.
              </p>
              <a href={business.pesulasi.phoneLink} className="mt-2 block text-sm font-semibold text-[var(--brand-blue)] hover:underline">
                {business.pesulasi.phoneDisplay}
              </a>
              <a href={business.pesulasi.emailLink} className="block text-sm text-[var(--text-soft)] hover:text-[var(--brand-blue)]">
                {business.pesulasi.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
