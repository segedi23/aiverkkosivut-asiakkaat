import { Car, Bike, PaintBucket, Shield, Wrench, Sparkles } from 'lucide-react'

export const business = {
  brandName: 'SBS Innovation',
  legalName: 'SBS Innovation Oy',
  tagline: 'Automaalaamo ja moottoripyörien erikoismaalaukset',
  city: 'Hyvinkää',
  district: '',
  addressStreet: 'Kerkkolankatu 30',
  postalCode: '05800',
  fullAddress: 'Kerkkolankatu 30, 05800 Hyvinkää',
  phoneDisplay: '040 540 0027',
  phoneLink: 'tel:0405400027',
  email: 'info@sbsi.fi',
  emailLink: 'mailto:info@sbsi.fi',
  mapUrl: 'https://maps.google.com/?q=Kerkkolankatu+30+Hyvinkää',
  facebook: '',
  intro:
    'SBS Innovation Oy on vuodesta 2003 toiminut korkeatasoiseen työnlaatuun luottava automaalaamo Hyvinkäällä. Perinteisten automaalaamotöiden lisäksi erityisiä osaamisalojamme ovat moottoripyörien maalaus ja kolarikorjaus, mukaan lukien katteiden korjaus ja tankkien oikominen.',
  openingSummary: 'Arkisin 8–16 tai sopimuksen mukaan',
  businessId: '',
  dropoffNote: '',
}

export const openingHours = [
  { short: 'Ma–Pe', hours: '08:00–16:00 tai sopimuksen mukaan' },
  { short: 'La–Su', hours: 'Suljettu' },
]

export const services = [
  {
    slug: 'automaalaus',
    name: 'Automaalaus',
    icon: Car,
    description:
      'Paikkamaalauksesta kolarimaalauksiin ja ylimaalauksiin. Kaikki merkit. Käytämme markkinoiden parhaita tuotteita ja työmenetelmiä.',
  },
  {
    slug: 'mp-maalaukset',
    name: 'Moottoripyörien maalaus',
    icon: Bike,
    description:
      'Erikoistuneet moottoripyörien kolari- ja ylimaalauksiin. Pitkällä kokemuksellamme osaamme eri valmistajien värisävyt.',
  },
  {
    slug: 'erikoismaalaukset',
    name: 'Erikoismaalaukset',
    icon: Sparkles,
    description:
      'Matta-, efekti-, candy-, fleikki- ja monikerroshelmiäismaalaukset. Raidoitukset ja tarroitusten täydellinen toisto.',
  },
  {
    slug: 'kolarikorjaus',
    name: 'Kolarikorjaus',
    icon: Shield,
    description:
      'Täyden palvelun kolarikorjaus autoille ja moottoripyörille. Yhteistyökumppaniemme kanssa hoidamme vaativatkin korjaukset.',
  },
  {
    slug: 'vahinkotarkastus',
    name: 'Vahinkotarkastus',
    icon: Wrench,
    description:
      'Kaikkien vakuutusyhtiöiden vahinkotarkastukset ilman ajanvarausta. Hoidamme yhteydenpidon vakuutusyhtiön kanssa.',
  },
  {
    slug: 'mopoautot',
    name: 'Mopoautojen maalaus',
    icon: PaintBucket,
    description:
      'Mopoautojen maalaus ja kolarikorjaus onnistuu meiltä ammattitaidolla.',
  },
]

export const serviceCategories = services.map((s) => ({
  key: s.slug,
  label: s.name,
  title: s.name,
  description: s.description,
  icon: s.icon,
}))

export const pricingHighlights: { title: string; price: string; description: string }[] = []

export const processSteps = [
  {
    title: 'Arvio ja sävytys',
    description: 'Tutustu kohteeseen ja määritä sävyt. Erikoissävyissä teemme koenappeja ennen maalausta.',
  },
  {
    title: 'Esikäsittely',
    description: 'Hionta, pohjustus, kittaus ja maseeraus. Moottoripyöräosissa purkaminen ja suojaus.',
  },
  {
    title: 'Maalaus',
    description: 'Maalaus ammattilaislaadulla — perus- ja efektilakat, candy, fleikki tai helmiäiskerrokset.',
  },
  {
    title: 'Viimeistely',
    description: 'Lakitus, kiillotus ja tarkastus. Jokainen kohde tarkastetaan ennen luovutusta.',
  },
]

export const faqItems = [
  {
    question: 'Maalaatteko kaikkia automerkkejä?',
    answer: 'Kyllä — maalaamme kaiken merkkisiä autoja, moottoripyöriä ja mopoautoja.',
  },
  {
    question: 'Miten toimitaan kolaritilanteessa?',
    answer:
      'Suoritamme kaikkien vakuutusyhtiöiden vahinkotarkastukset ilman ajanvarausta. Hoidamme tarvittaessa yhteydenpidon vakuutusyhtiön kanssa puolestasi.',
  },
  {
    question: 'Millaisia erikoismaalauksia teette moottoripyörille?',
    answer:
      'Erikoisosaamisemme kattaa matta-, efekti-, candy-, fleikki- ja monikerroshelmiäismaalaukset. Raidoitukset onnistuvat ja tarroitukset toistamme täydellisesti.',
  },
  {
    question: 'Missä maalaamo sijaitsee?',
    answer: 'Maalaamo sijaitsee osoitteessa Kerkkolankatu 30, 05800 Hyvinkää. Aukioloaika arkisin 8–16 tai sopimuksen mukaan.',
  },
]

export const team = [
  { name: 'Antti Ranta', title: 'Automaalari', phone: '040 540 0027', phoneLink: 'tel:0405400027', email: 'info@sbsi.fi' },
  { name: 'Pekka Ranta', title: 'Automaalari', phone: '0400 485 117', phoneLink: 'tel:0400485117', email: '' },
]

export const heroImages = ['/images/porsche.jpg']

export const localBusinessSchema = {
  name: 'SBS Innovation Oy',
  url: 'http://www.sbsi.fi',
  telephone: '+358405400027',
  email: 'info@sbsi.fi',
  address: { street: 'Kerkkolankatu 30', postalCode: '05800', city: 'Hyvinkää' },
}
