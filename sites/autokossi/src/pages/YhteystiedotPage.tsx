import { Mail, MapPin, Phone } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { business, openingHours } from '../data/siteContent'
import { openMailClient } from '../utils/mailto'
import { Seo } from '../utils/seo'

function YhteystiedotPage() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    openMailClient(business.email, 'Yhteydenotto verkkosivuilta', [
      { label: 'Nimi', value: name },
      { label: 'Puhelin', value: phone },
      { label: 'Sähköposti', value: email },
      { label: 'Viesti', value: message },
    ])

    setSubmitted(true)
  }

  return (
    <>
      <Seo
        title="Yhteystiedot | Autokossi"
        description="Autokossin yhteystiedot Kiuruvedellä: puhelin, sähköposti, osoite, aukioloajat ja yhteydenottolomake."
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">Yhteystiedot</p>
          <h1 className="mt-3 font-[var(--font-display)] text-4xl sm:text-5xl">Yhteystiedot</h1>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="grid gap-4">
            <a href={business.phoneLink} className="flex items-center gap-3 rounded-2xl border border-[var(--line)] p-4">
              <Phone className="h-5 w-5 text-[var(--brand-primary)]" />
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">Puhelin</p>
                <p className="font-semibold text-[var(--text-strong)]">{business.phoneDisplay}</p>
              </div>
            </a>

            <a href={business.emailLink} className="flex items-center gap-3 rounded-2xl border border-[var(--line)] p-4">
              <Mail className="h-5 w-5 text-[var(--brand-primary)]" />
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">Sähköposti</p>
                <p className="font-semibold text-[var(--text-strong)]">{business.email}</p>
              </div>
            </a>

            <a href={business.mapUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-[var(--line)] p-4">
              <MapPin className="h-5 w-5 text-[var(--brand-primary)]" />
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">Osoite</p>
                <p className="font-semibold text-[var(--text-strong)]">{business.fullAddress}</p>
              </div>
            </a>

            <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-5 text-sm text-[var(--text-body)]">
              <p className="font-[var(--font-display)] text-2xl text-[var(--text-strong)]">Kalervo Kossi — yrittäjä</p>
              <a href={business.phoneLink} className="mt-2 inline-block font-semibold text-[var(--brand-primary)] hover:underline">
                {business.phoneDisplay}
              </a>
            </div>

            <div className="rounded-2xl border border-[var(--line)] p-5">
              <p className="font-[var(--font-display)] text-2xl text-[var(--text-strong)]">Aukioloajat</p>
              <div className="mt-3 grid gap-2 text-sm text-[var(--text-body)]">
                {openingHours.map((item) => (
                  <div key={item.short} className="flex items-center justify-between gap-4">
                    <span>{item.short}</span>
                    <span className="font-medium text-[var(--text-strong)]">{item.hours}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-[var(--text-body)]">Työt sopimuksesta myös viikonloppuisin</p>
            </div>
          </div>

          <iframe
            title="Autokossi kartalla"
            src={`https://maps.google.com/maps?q=Kievarintie+9+Kiuruvesi&output=embed`}
            className="h-96 w-full rounded-2xl border border-[var(--line)]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="section-pad bg-[var(--surface-soft)]">
        <div className="shell max-w-3xl">
          <div className="rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-8">
            <h2 className="font-[var(--font-display)] text-3xl text-[var(--text-strong)]">Ota yhteyttä</h2>
            <p className="mt-2 text-sm leading-7 text-[var(--text-body)]">
              Lomake avaa valmiin viestin sähköpostiohjelmaasi (ei backendiä).
            </p>

            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <label className="grid gap-2 text-sm font-semibold text-[var(--text-strong)]">
                Nimi
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="h-11 rounded-xl border border-[var(--line)] px-4"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-[var(--text-strong)]">
                  Puhelin
                  <input
                    required
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="h-11 rounded-xl border border-[var(--line)] px-4"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-[var(--text-strong)]">
                  Sähköposti
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="h-11 rounded-xl border border-[var(--line)] px-4"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-[var(--text-strong)]">
                Viesti
                <textarea
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="min-h-32 rounded-xl border border-[var(--line)] px-4 py-3"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-fit items-center rounded-full bg-[var(--brand-accent)] px-6 py-3 text-sm font-bold text-white hover:bg-[var(--brand-accent-dark)]"
              >
                Lähetä viesti
              </button>
            </form>

            {submitted ? (
              <p className="mt-4 text-sm text-[var(--brand-primary)]">
                Viesti avattiin sähköpostiohjelmaan. Jos ikkuna ei auennut, voit lähettää viestin suoraan osoitteeseen {business.email}.
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </>
  )
}

export default YhteystiedotPage
