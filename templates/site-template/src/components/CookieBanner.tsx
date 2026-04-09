import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Evästebanneri — tallentaa valinnan localStorageen. Esitetään vain kun
// käyttäjä ei ole vielä tehnyt valintaa. Banneri ei lataa mitään kolmannen
// osapuolen skriptejä itsestään — se vain tallentaa käyttäjän valinnan,
// ja sivuston muut osat voivat lukea sen `localStorage.getItem('cookie-consent')`
// kautta ennen kuin lataavat esim. analytiikkaa.

type ConsentValue = 'accepted' | 'rejected' | null

const STORAGE_KEY = 'cookie-consent'

function getStoredConsent(): ConsentValue {
  if (typeof window === 'undefined') return null
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    if (value === 'accepted' || value === 'rejected') return value
  } catch {}
  return null
}

function setStoredConsent(value: 'accepted' | 'rejected') {
  try {
    window.localStorage.setItem(STORAGE_KEY, value)
    window.localStorage.setItem(`${STORAGE_KEY}-at`, new Date().toISOString())
  } catch {}
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Näytä banneri vain jos valintaa ei vielä ole
    const stored = getStoredConsent()
    if (!stored) {
      // Pieni viive, jotta banneri ei välähdä heti sivun ladatessa
      const timer = setTimeout(() => setVisible(true), 500)
      return () => clearTimeout(timer)
    }
  }, [])

  function handleAccept() {
    setStoredConsent('accepted')
    setVisible(false)
  }

  function handleReject() {
    setStoredConsent('rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Evästeasetukset"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-2xl border border-[var(--line)] bg-white p-5 shadow-xl sm:inset-x-auto sm:right-4 sm:bottom-4 sm:left-auto sm:w-[520px]"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-[var(--text-strong)]">
            Sivusto käyttää evästeitä
          </h2>
          <p className="mt-2 text-sm leading-6 text-[var(--text-body)]">
            Käytämme välttämättömiä evästeitä sivuston toiminnan varmistamiseksi.
            Lisäksi upotettu Google Maps voi asettaa omia evästeitä kun avaat
            kartan. Voit lukea tarkemmin{' '}
            <Link
              to="/tietosuoja"
              className="font-semibold text-[var(--brand-primary)] underline hover:no-underline"
            >
              tietosuojaselosteesta
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleAccept}
          className="inline-flex items-center rounded-full bg-[var(--brand-primary)] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-primary-dark)]"
        >
          Hyväksy kaikki
        </button>
        <button
          type="button"
          onClick={handleReject}
          className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--text-strong)] transition-colors hover:border-[var(--brand-primary)]"
        >
          Vain välttämättömät
        </button>
      </div>
    </div>
  )
}
