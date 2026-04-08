// PLACEHOLDER siteContent.ts
//
// Tämä tiedosto on aiverkkosivut-asiakkaat monorepon templaten osa.
// Kun onboarding-Worker luo uuden asiakkaan sites/<slug>/, tämä tiedosto
// korvataan täysin asiakaskohtaisella sisällöllä Claude-generaattorin avulla.
//
// Älä commitoi muutoksia suoraan tähän tiedostoon — muokkaa sivukohtaista
// kopiota sites/<slug>/src/data/siteContent.ts tai anna onboarding-Workerin
// / email-Workerin tehdä se puolestasi.

import { Briefcase, Phone, Mail, MapPin, Clock, Star } from 'lucide-react'

export const business = {
  brandName: 'Placeholder Oy',
  legalName: 'Placeholder Oy',
  tagline: 'Lyhyt tagline',
  city: 'Helsinki',
  district: '',
  addressStreet: 'Katu 1',
  postalCode: '00100',
  fullAddress: 'Katu 1, 00100 Helsinki',
  phoneDisplay: '040 000 0000',
  phoneLink: 'tel:0400000000',
  email: 'info@placeholder.fi',
  emailLink: 'mailto:info@placeholder.fi',
  mapUrl: 'https://maps.google.com/?q=Helsinki',
  facebook: '',
  instagram: '',
  intro: 'Esittelyteksti täällä.',
  openingSummary: 'Ma–Pe 9–17',
  businessId: '',
}

export const navigation = [
  { label: 'Etusivu', to: '/' },
  { label: 'Palvelut', to: '/palvelut' },
  { label: 'Tietoa', to: '/tietoa' },
  { label: 'Yhteystiedot', to: '/yhteystiedot' },
]

export const openingHours = [
  { short: 'Ma–Pe', hours: '9–17' },
  { short: 'La',    hours: 'Suljettu' },
  { short: 'Su',    hours: 'Suljettu' },
]

export const services = [
  { slug: 'palvelu-1', name: 'Palvelu 1', icon: Briefcase, description: 'Palvelun kuvaus.' },
]

export const serviceCategories = services.map((s) => ({
  key: s.slug, label: s.name, title: s.name, description: s.description, icon: s.icon,
}))

export const bookingServiceOptions = services.map((s) => ({ value: s.slug, label: s.name }))

export const pricingHighlights: { title: string; price: string; description: string }[] = []

export const processSteps = [
  { title: 'Ota yhteyttä', description: 'Kerro tarpeestasi.' },
  { title: 'Suunnitelma',  description: 'Teemme suunnitelman.' },
  { title: 'Toteutus',     description: 'Toteutamme sovitusti.' },
]

export const faqItems: { question: string; answer: string }[] = []

export const team: { name: string; title: string; phone?: string; email?: string; photo?: string | null }[] = []

export const heroImages = ['/images/hero-01.jpg']

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: business.brandName,
  telephone: business.phoneDisplay,
  email: business.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.addressStreet,
    postalCode: business.postalCode,
    addressLocality: business.city,
    addressCountry: 'FI',
  },
}
