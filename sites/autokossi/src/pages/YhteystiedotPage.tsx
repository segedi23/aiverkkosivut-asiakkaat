import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { business, openingHours } from '../data/siteContent'
import { Seo } from '../utils/seo'

// Netlify Forms: static form with data-netlify="true" — Netlify captures
// submissions automatically when site is deployed to Netlify. The AJAX version
// POSTs urlencoded data back to "/" which Netlify intercepts.

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')
}

function YhteystiedotPage() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'yhteydenotto',
          nimi: name,
          puhelin: phone,
          sahkoposti: email,
          viesti: message,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setName('')
        setPhone('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Seo
        title="Yhteystiedot | Autokossi"
        description="Autokossin yhteystiedot Kiuruvedellä: puhelin, sähköposti, osoite, aukioloajat ja yhteydenottolomake."
      />

      {/* Piilotettu Netlify Forms -tunnistuslomake — Netlify lukee tämän buildin aikana */}
      <form name="yhteydenotto" data-netlify="true" hidden>
        <input type="text" name="nimi" />
        <input type="tel" name="puhelin" />
        <input type="email" name="sahkoposti" />
        <textarea name="viesti"></textarea>
      </form>

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-accent)]">Yhteystiedot</p>
          <h1 className="mt-3 font-[var(--font-display)] text-4xl font-bold sm:text-5xl">Ota yhteyttä</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">
            Soita, lähetä sähköpostia tai täytä lomake. Vastaamme mahdollisimman pian — myös iltaisin ja viikonloppuisin sopimuksesta.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Vasen: kontaktitiedot */}
          <div className="grid gap-4">
            <a href={business.phoneLink} className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">Puhelin</p>
                <p className="text-lg font-bold text-[var(--text-strong)]">{business.phoneDisplay}</p>
              </div>
            </a>

            <a href={business.emailLink} className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">Sähköposti</p>
                <p className="text-base font-semibold text-[var(--text-strong)] break-all">{business.email}</p>
              </div>
            </a>

            <a
              href={business.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">Osoite</p>
                <p className="text-base font-semibold text-[var(--text-strong)]">{business.fullAddress}</p>
              </div>
            </a>

            <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">Yrittäjä</p>
              <p className="mt-1 font-[var(--font-display)] text-2xl font-bold text-[var(--text-strong)]">
                Kalervo Kossi
              </p>
              <a
                href={business.phoneLink}
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
              >
                <Phone className="h-4 w-4" />
                {business.phoneDisplay}
              </a>
            </div>

            <div className="rounded-2xl border border-[var(--line)] bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">Aukioloajat</p>
              <div className="mt-3 grid gap-2 text-sm">
                {openingHours.map((item) => (
                  <div key={item.short} className="flex items-center justify-between gap-4">
                    <span className="text-[var(--text-body)]">{item.short}</span>
                    <span className="font-semibold text-[var(--text-strong)]">{item.hours}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-[var(--text-muted)]">
                Työt sopimuksesta myös viikonloppuisin — soita ja kysy.
              </p>
            </div>
          </div>

          {/* Oikea: lomake */}
          <div className="grid gap-6">
            <div className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--text-strong)] sm:text-3xl">
                Lähetä viesti
              </h2>
              <p className="mt-2 text-sm leading-7 text-[var(--text-body)]">
                Vastaamme mahdollisimman pian, yleensä saman päivän aikana.
              </p>

              {status === 'success' ? (
                <div className="mt-6 flex items-start gap-3 rounded-xl bg-[var(--brand-primary-soft)] p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-primary)]" />
                  <div>
                    <p className="font-semibold text-[var(--brand-primary-dark)]">Kiitos viestistä!</p>
                    <p className="mt-1 text-sm text-[var(--text-body)]">
                      Olemme sinuun yhteydessä mahdollisimman pian.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  name="yhteydenotto"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="mt-6 grid gap-4"
                >
                  <input type="hidden" name="form-name" value="yhteydenotto" />

                  <label className="grid gap-2 text-sm font-semibold text-[var(--text-strong)]">
                    Nimi
                    <input
                      required
                      type="text"
                      name="nimi"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-11 rounded-xl border border-[var(--line)] bg-white px-4 text-sm text-[var(--text-strong)] transition-colors focus:border-[var(--brand-primary)] focus:outline-none"
                    />
                  </label>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-semibold text-[var(--text-strong)]">
                      Puhelin
                      <input
                        required
                        type="tel"
                        name="puhelin"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="h-11 rounded-xl border border-[var(--line)] bg-white px-4 text-sm text-[var(--text-strong)] transition-colors focus:border-[var(--brand-primary)] focus:outline-none"
                      />
                    </label>
                    <label className="grid gap-2 text-sm font-semibold text-[var(--text-strong)]">
                      Sähköposti
                      <input
                        required
                        type="email"
                        name="sahkoposti"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-11 rounded-xl border border-[var(--line)] bg-white px-4 text-sm text-[var(--text-strong)] transition-colors focus:border-[var(--brand-primary)] focus:outline-none"
                      />
                    </label>
                  </div>

                  <label className="grid gap-2 text-sm font-semibold text-[var(--text-strong)]">
                    Viesti
                    <textarea
                      required
                      name="viesti"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Kerro esimerkiksi auton merkki, malli, rekisterinumero ja huoltotarve."
                      className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--text-strong)] transition-colors focus:border-[var(--brand-primary)] focus:outline-none"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--brand-accent)] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-accent-dark)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Send className="h-4 w-4" />
                    {status === 'submitting' ? 'Lähetetään…' : 'Lähetä viesti'}
                  </button>

                  {status === 'error' ? (
                    <p className="text-sm text-red-600">
                      Viestin lähetys epäonnistui. Soita suoraan {business.phoneDisplay} tai lähetä sähköposti osoitteeseen {business.email}.
                    </p>
                  ) : null}
                </form>
              )}
            </div>

            {/* Google Maps */}
            <iframe
              title="Autokossi kartalla"
              src="https://maps.google.com/maps?q=Kievarintie+9+Kiuruvesi&output=embed"
              className="h-80 w-full rounded-2xl border border-[var(--line)]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default YhteystiedotPage
