import { Mail, MapPin, Phone } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { business, openingHours } from '../data/siteContent'
import { Seo } from '../utils/seo'

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

const mapEmbedUrl = 'https://www.google.com/maps?q=Vilhontie+3+Pieks%C3%A4m%C3%A4ki&output=embed'

function toFormBody(formData: FormData) {
  const params = new URLSearchParams()
  formData.forEach((value, key) => {
    params.append(key, String(value))
  })
  return params.toString()
}

export default function YhteystiedotPage() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus('sending')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: toFormBody(formData),
      })

      if (!response.ok) {
        throw new Error('Lähetys epäonnistui')
      }

      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Seo
        title="Yhteystiedot | Länsiväylän Auto"
        description="Länsiväylän Auton yhteystiedot Pieksämäellä. Puhelin, sähköposti, osoite, kartta ja Netlify-lomake ajoneuvotiedoille."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">Yhteystiedot</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold sm:text-5xl">Yhteystiedot</h1>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4 rounded-3xl border border-[var(--line)] bg-[var(--surface-soft)] p-6 sm:p-8">
            <a href={business.phoneLink} className="flex items-start gap-3 rounded-xl border border-[var(--line)] bg-white p-4">
              <Phone className="mt-0.5 h-5 w-5 text-[var(--brand-primary)]" />
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--text-muted)]">Puhelin</p>
                <p className="font-semibold text-[var(--text-strong)]">{business.phoneDisplay}</p>
                <p className="text-sm text-[var(--text-body)]">{business.phoneSecondary}</p>
              </div>
            </a>

            <a href={business.emailLink} className="flex items-start gap-3 rounded-xl border border-[var(--line)] bg-white p-4">
              <Mail className="mt-0.5 h-5 w-5 text-[var(--brand-primary)]" />
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--text-muted)]">Sähköposti</p>
                <p className="font-semibold text-[var(--text-strong)]">{business.email}</p>
              </div>
            </a>

            <a
              href={business.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 rounded-xl border border-[var(--line)] bg-white p-4"
            >
              <MapPin className="mt-0.5 h-5 w-5 text-[var(--brand-primary)]" />
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--text-muted)]">Osoite</p>
                <p className="font-semibold text-[var(--text-strong)]">{business.fullAddress}</p>
              </div>
            </a>

            <div className="rounded-xl border border-[var(--line)] bg-white p-4">
              <p className="text-xs uppercase tracking-widest text-[var(--text-muted)]">Aukioloajat</p>
              <div className="mt-3 grid gap-2 text-sm">
                {openingHours.map((item) => (
                  <div key={item.short} className="flex justify-between gap-4 text-[var(--text-body)]">
                    <span>{item.short}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="overflow-hidden rounded-3xl border border-[var(--line)]">
              <iframe
                title="Länsiväylän Auto kartalla"
                src={mapEmbedUrl}
                className="h-[320px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <form name="yhteydenotto" data-netlify="true" netlify-honeypot="bot-field" hidden>
              <input type="text" name="nimi" />
              <input type="tel" name="puhelin" />
              <input type="email" name="sahkoposti" />
              <input type="text" name="kaluston_tiedot" />
              <textarea name="viesti" />
            </form>

            <form
              name="yhteydenotto"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="rounded-3xl border border-[var(--line)] bg-[var(--surface-soft)] p-6 sm:p-8"
            >
              <input type="hidden" name="form-name" value="yhteydenotto" />
              <input type="hidden" name="bot-field" />

              <h2 className="font-heading text-3xl font-semibold text-[var(--text-strong)]">Lähetä viesti</h2>
              <div className="mt-5 grid gap-4">
                <label className="grid gap-1 text-sm font-medium text-[var(--text-strong)]">
                  Nimi
                  <input
                    name="nimi"
                    required
                    className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--text-strong)] outline-none ring-[var(--brand-primary)] transition focus:ring-2"
                  />
                </label>

                <label className="grid gap-1 text-sm font-medium text-[var(--text-strong)]">
                  Puhelin
                  <input
                    name="puhelin"
                    type="tel"
                    required
                    className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--text-strong)] outline-none ring-[var(--brand-primary)] transition focus:ring-2"
                  />
                </label>

                <label className="grid gap-1 text-sm font-medium text-[var(--text-strong)]">
                  Sähköposti
                  <input
                    name="sahkoposti"
                    type="email"
                    required
                    className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--text-strong)] outline-none ring-[var(--brand-primary)] transition focus:ring-2"
                  />
                </label>

                <label className="grid gap-1 text-sm font-medium text-[var(--text-strong)]">
                  Kaluston tiedot (merkki/malli/rekisterinumero)
                  <input
                    name="kaluston_tiedot"
                    required
                    className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--text-strong)] outline-none ring-[var(--brand-primary)] transition focus:ring-2"
                  />
                </label>

                <label className="grid gap-1 text-sm font-medium text-[var(--text-strong)]">
                  Viesti
                  <textarea
                    name="viesti"
                    required
                    rows={5}
                    className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--text-strong)] outline-none ring-[var(--brand-primary)] transition focus:ring-2"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-5 inline-flex items-center rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-primary-dark)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? 'Lähetetään...' : 'Lähetä'}
              </button>

              {status === 'sent' && (
                <p className="mt-4 text-sm text-[var(--text-body)]">Viesti lähetettiin onnistuneesti.</p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-sm text-[var(--brand-primary)]">
                  Lähetys epäonnistui. Kokeile uudelleen tai soita numeroon {business.phoneDisplay}.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
