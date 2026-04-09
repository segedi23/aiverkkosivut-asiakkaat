import { Calendar, CheckCircle2, Phone, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { business } from '../data/siteContent'
import { Seo } from '../utils/seo'

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')
}

function AjanvarausPage() {
  const [form, setForm] = useState({
    rekisterinumero: '',
    merkki: '',
    malli: '',
    ajomaara: '',
    toivottuPaiva: '',
    huoltotarve: '',
    nimi: '',
    puhelin: '',
    sahkoposti: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'ajanvaraus', ...form }),
      })
      if (res.ok) {
        setStatus('success')
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
        title="Ajanvaraus | Autokossi"
        description="Varaa huoltoaika Autokossille Kiuruvedellä. Täytä lomake tai soita 0400 654 758. Vahvistamme varauksen puhelimitse tai sähköpostitse."
      />

      {/* Piilotettu Netlify Forms -tunnistuslomake */}
      <form name="ajanvaraus" data-netlify="true" hidden>
        <input type="text" name="rekisterinumero" />
        <input type="text" name="merkki" />
        <input type="text" name="malli" />
        <input type="text" name="ajomaara" />
        <input type="date" name="toivottuPaiva" />
        <textarea name="huoltotarve"></textarea>
        <input type="text" name="nimi" />
        <input type="tel" name="puhelin" />
        <input type="email" name="sahkoposti" />
      </form>

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-accent)]">Ajanvaraus</p>
          <h1 className="mt-3 font-[var(--font-display)] text-4xl font-bold sm:text-5xl">Varaa huoltoaika</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">
            Tällä lomakkeella voit tehdä ajanvarauspyynnön korjaamollemme. Vahvistamme
            varauksen puhelimitse tai sähköpostitse mahdollisimman pian. Kiireelliset
            asiat kannattaa hoitaa soittamalla.
          </p>
          <a
            href={business.phoneLink}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand-accent)] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-accent-dark)]"
          >
            <Phone className="h-4 w-4" />
            Soita: {business.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell max-w-3xl">
          {status === 'success' ? (
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--brand-primary-soft)] p-10 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-[var(--brand-primary)]" />
              <h2 className="mt-4 font-[var(--font-display)] text-2xl font-bold text-[var(--brand-primary-dark)]">
                Kiitos ajanvarauspyynnöstä!
              </h2>
              <p className="mt-3 text-[var(--text-body)]">
                Olemme sinuun yhteydessä mahdollisimman pian, yleensä saman päivän aikana.
              </p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Jos asia on kiireellinen, soita {business.phoneDisplay}.
              </p>
            </div>
          ) : (
            <form
              name="ajanvaraus"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm sm:p-8"
            >
              <input type="hidden" name="form-name" value="ajanvaraus" />

              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]">
                  <Calendar className="h-5 w-5" />
                </span>
                <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--text-strong)]">
                  Ajanvarauspyyntö
                </h2>
              </div>

              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">
                Ajoneuvon tiedot
              </h3>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <Field label="Rekisterinumero *" value={form.rekisterinumero} onChange={(v) => update('rekisterinumero', v)} required />
                <Field label="Merkki *" value={form.merkki} onChange={(v) => update('merkki', v)} required placeholder="esim. Volkswagen" />
                <Field label="Malli *" value={form.malli} onChange={(v) => update('malli', v)} required placeholder="esim. Passat 2.0 TDI" />
                <Field label="Ajomäärä (km)" value={form.ajomaara} onChange={(v) => update('ajomaara', v)} placeholder="esim. 145 000" />
              </div>

              <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">
                Huolto
              </h3>
              <div className="mt-3 grid gap-4">
                <label className="grid gap-2 text-sm font-semibold text-[var(--text-strong)]">
                  Toivottu työn alkamispäivä *
                  <input
                    required
                    type="date"
                    name="toivottuPaiva"
                    value={form.toivottuPaiva}
                    onChange={(e) => update('toivottuPaiva', e.target.value)}
                    className="h-11 rounded-xl border border-[var(--line)] bg-white px-4 text-sm transition-colors focus:border-[var(--brand-primary)] focus:outline-none"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-[var(--text-strong)]">
                  Kuvaile huoltotarvetta
                  <textarea
                    name="huoltotarve"
                    rows={4}
                    value={form.huoltotarve}
                    onChange={(e) => update('huoltotarve', e.target.value)}
                    placeholder="Mitä haluat huoltaa tai korjata? Näkyykö varoitusvaloja? Onko erityisiä ääniä?"
                    className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm transition-colors focus:border-[var(--brand-primary)] focus:outline-none"
                  />
                </label>
              </div>

              <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">
                Yhteystiedot
              </h3>
              <div className="mt-3 grid gap-4">
                <Field label="Nimi *" value={form.nimi} onChange={(v) => update('nimi', v)} required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Puhelin *" value={form.puhelin} onChange={(v) => update('puhelin', v)} required type="tel" />
                  <Field label="Sähköposti *" value={form.sahkoposti} onChange={(v) => update('sahkoposti', v)} required type="email" />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--brand-accent)] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-accent-dark)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {status === 'submitting' ? 'Lähetetään…' : 'Lähetä varauspyyntö'}
              </button>

              {status === 'error' ? (
                <p className="mt-4 text-sm text-red-600">
                  Varauspyynnön lähetys epäonnistui. Soita suoraan {business.phoneDisplay}.
                </p>
              ) : null}

              <p className="mt-6 text-xs text-[var(--text-muted)]">
                Vahvistamme varauksen puhelimitse tai sähköpostitse. Tiedot auttavat
                meitä varaamaan oikeat varaosat valmiiksi. Säästät yhden käyntikerran.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  value,
  onChange,
  required,
  type = 'text',
  placeholder,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  type?: string
  placeholder?: string
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[var(--text-strong)]">
      {label}
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 rounded-xl border border-[var(--line)] bg-white px-4 text-sm font-normal text-[var(--text-strong)] transition-colors focus:border-[var(--brand-primary)] focus:outline-none"
      />
    </label>
  )
}

export default AjanvarausPage
