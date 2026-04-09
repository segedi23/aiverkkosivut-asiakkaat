import {
  Wrench,
  Settings,
  Shield,
  Anchor,
  Package,
  Cable,
  AlertCircle,
  Factory,
} from 'lucide-react'

export const business = {
  brandName: 'Länsiväylän Auto',
  legalName: 'Länsiväylän Auto ja Konekorjaamo Ky',
  tagline: 'Raskaan kaluston monimerkkikorjaamo Pieksämäellä jo kuudennella vuosikymmenellä.',
  city: 'Pieksämäki',
  district: 'Etelä-Savo',
  addressStreet: 'Vilhontie 3',
  postalCode: '76150',
  fullAddress: 'Vilhontie 3, 76150 Pieksämäki',
  phoneDisplay: '0400 615 111',
  phoneLink: 'tel:0400615111',
  phoneSecondary: '015 615 111',
  phoneSecondaryLink: 'tel:015615111',
  email: 'korjaamo@lansivaylanauto.fi',
  emailLink: 'mailto:korjaamo@lansivaylanauto.fi',
  mapUrl: 'https://maps.google.com/?q=Vilhontie+3+Pieksämäki',
  facebook: 'https://www.facebook.com/lansivaylanauto/',
  intro:
    'Länsiväylän Auto ja Konekorjaamo Ky palvelee raskaan kaluston ja työkoneiden omistajia Pieksämäellä. Perinteikäs perheyritys toimii 1100 neliön modernissa hallissa 10 tonnin siltanosturilla ja 25 metrin huoltokuilulla varustettuna. Korjaamme kuorma- ja linja-autot, maatalous-, maansiirto- ja metsäkoneet sekä valmistamme päällirakenteita. Nosturihuolto ja katsastus hoidetaan samalta tiskiltä.',
  openingSummary: 'Ma–Pe 7–16, muina aikoina sopimuksesta',
  businessId: '0514694-9',
  vatId: 'FI05146949',
  dropoffNote:
    'Kun kalusto on nopeasti saatava takaisin tielle, soita meille. Joustamme aikataulussa ja teemme tarvittaessa töitä myös iltaisin ja viikonloppuisin.',
}

export const navigation = [
  { label: 'Etusivu', to: '/' },
  { label: 'Palvelut', to: '/palvelut' },
  { label: 'Nosturihuolto', to: '/nosturihuolto' },
  { label: 'Varaosat', to: '/varaosat' },
  { label: 'Yhteystiedot', to: '/yhteystiedot' },
]

export const openingHours = [
  { short: 'Ma–Pe', hours: '07:00–16:00' },
  { short: 'La', hours: 'Sopimuksen mukaan' },
  { short: 'Su', hours: 'Sopimuksen mukaan' },
]

export const services = [
  {
    slug: 'monimerkkikorjaamo',
    name: 'Monimerkkikorjaamo',
    icon: Wrench,
    description:
      'Korjaamme ja huollamme raskaan kaluston kaikkien merkkien osalta: kuorma- ja linja-autot, maatalouskoneet, maansiirto- ja metsäkoneet. Myös vaativat rungonoikaisut ja vauriokorjaamopalvelut.',
  },
  {
    slug: 'nosturihuolto',
    name: 'Nosturihuolto ja tarkastukset',
    icon: Anchor,
    description:
      'PM-nostureiden valtuutettu korjaamo. Erityisosaaminen Scanreco-järjestelmissä. Sertifioitu nostolaitetarkastaja: määräaikaiskatsastukset, perusteelliset 10-vuotistarkastukset ja asennusnosturitarkastukset 25 TM saakka.',
  },
  {
    slug: 'katsastus',
    name: 'Katsastukset',
    icon: Shield,
    description:
      'Ajoneuvokatsastukset samalta tiskiltä korjausten kanssa. Päästömittaukset, nopeudenrajoittimen testaukset, jarrusovitukset ja -testaukset. A-jarrulupa ja piirturiluvat, myös älypiirturit.',
  },
  {
    slug: 'paallirakenteet',
    name: 'Päällirakennevalmistus',
    icon: Factory,
    description:
      'Valmistamme nostureita, vaihtolavoja ja kaksitieajoneuvoja. Kiskopyörien asennukset maantieajoneuvoihin patentoidulla tekniikalla. Omaa tuotantoa vuosien kokemuksella.',
  },
  {
    slug: 'akselistomuutokset',
    name: 'Akselistomuutokset',
    icon: Settings,
    description:
      'Akseleiden lisäykset ja akseliston muutokset mukaan lukien jarrulaskelmat ja muutoskatsastukset. Yhdistelmäajoneuvojen muutostyöt kokeneesti.',
  },
  {
    slug: 'hydrauliikka',
    name: 'Hydrauliikka ja sähkötyöt',
    icon: Cable,
    description:
      'Hydrauliletkujen valmistus, hydraulivikojen selvitys ja korjaukset. Autosähkötyöt: johtosarjavikojen korjaukset, lisävaloasennukset ja muut sähköjärjestelmän työt.',
  },
  {
    slug: 'alkolukot',
    name: 'Alkolukkojen asennus ja kalibrointi',
    icon: AlertCircle,
    description:
      'Asennamme ja kalibroimme Dräger- ja Dignita-alkolukot. Asennus onnistuu kaikkiin ajoneuvoihin, ja hoidamme myös määräaikaiset kalibroinnit.',
  },
  {
    slug: 'varaosat',
    name: 'Varaosat',
    icon: Package,
    description:
      'Yleisimmät kulutusosat hyllyssämme. Yhteistyökumppaneiden kautta saamme osat kaikkiin merkkeihin, yleensä jo seuraavaksi aamuksi. Myös omavalmisteosat.',
  },
]

export const serviceCategories = services.map((service) => ({
  key: service.slug,
  label: service.name,
  title: service.name,
  description: service.description,
  icon: service.icon,
}))

export const bookingServiceOptions = services.map((service) => ({
  value: service.slug,
  label: service.name,
}))

export const stats = [
  { value: '6.', label: 'Vuosikymmen toiminnassa' },
  { value: '1100 m²', label: 'Korjaamohalli' },
  { value: '10 t', label: 'Siltanosturi' },
  { value: '25 m', label: 'Huoltokuilu' },
]

export const partnerBrands = [
  'Bosch',
  'Lemförder',
  'Sachs',
  'Wabco',
  'Knorr-Bremse',
  'Beral',
  'TAV',
  'VBG',
  'Hengst',
  'Gigant',
  'Dinex',
]

export const certifications = [
  {
    title: 'PM-nostureiden valtuutettu korjaamo',
    description: 'Scanreco-järjestelmien erityisosaaja. Asennus ja kalibrointi.',
  },
  {
    title: 'Sertifioitu nostolaitetarkastaja',
    description: 'Kuormausnostureiden määräaikais- ja 10-vuotistarkastukset 25 TM asti.',
  },
  {
    title: 'A-jarrulupa',
    description: 'Virallinen oikeus suorittaa jarrusovitukset ja -testaukset raskaaseen kalustoon.',
  },
  {
    title: 'Piirturilupa (myös älypiirturit)',
    description: 'Valtuutettu asennus, kalibrointi ja huolto.',
  },
  {
    title: 'Dräger ja Dignita alkolukot',
    description: 'Valtuutettu asennus ja kalibrointi kaikkiin ajoneuvoihin.',
  },
]

export const pricingHighlights: { title: string; price: string; description: string }[] = []

export const processSteps = [
  {
    title: 'Soita',
    description:
      'Soita 0400 615 111. Kerro kaluston merkki, malli ja vika, niin varmistamme oikeat varaosat ja huoltokuilun valmiiksi.',
  },
  {
    title: 'Tuo kalusto',
    description:
      'Sovitaan sinulle sopiva aika. Tarvittaessa joustamme myös iltaisin ja viikonloppuisin.',
  },
  {
    title: 'Nouda valmis',
    description:
      'Soitamme kun kalusto on valmis. Käymme tehdyt työt läpi ja saat selvän laskun kaikista töistä.',
  },
]

export const faqItems = [
  {
    question: 'Teettekö myös katsastukset?',
    answer:
      'Kyllä. Meillä on A-jarrulupa ja piirturiluvat, myös älypiirtureille. Katsastus, päästömittaukset, nopeudenrajoittimen testaukset ja jarrusovitukset hoituvat samalta tiskiltä korjaustöiden kanssa.',
  },
  {
    question: 'Huollatteko vain raskasta kalustoa?',
    answer:
      'Painopisteemme on raskaassa kalustossa ja työkoneissa, mutta huollamme myös pakettiautoja ja pienempää kalustoa. Soita ja kerro mitä tarvitset, niin katsotaan onnistuuko.',
  },
  {
    question: 'Kuinka nopeasti saan varaosan?',
    answer:
      'Yleisimmät kulutusosat ovat hyllyssämme heti. Muut osat saamme yhteistyökumppaneiltamme yleensä seuraavaksi aamuksi. Myös omavalmisteosat onnistuvat.',
  },
  {
    question: 'Teettekö töitä viikonloppuisin?',
    answer:
      'Sopimuksesta kyllä. Raskaassa kalustossa aika on usein rahaa, joten joustamme aikatauluissa kun se on mahdollista.',
  },
  {
    question: 'Voitteko tehdä päällirakenteita?',
    answer:
      'Kyllä. Valmistamme nostureita, vaihtolavoja ja kaksitieajoneuvoja omana tuotantona. Kiskopyörien asennus maantieajoneuvoihin hoituu patentoidulla tekniikalla.',
  },
]

export const heroImages = ['/images/hero.jpg']

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: business.brandName,
  legalName: business.legalName,
  telephone: business.phoneDisplay,
  email: business.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.addressStreet,
    postalCode: business.postalCode,
    addressLocality: business.city,
    addressRegion: business.district,
    addressCountry: 'FI',
  },
  openingHours: 'Mo-Fr 07:00-16:00',
  areaServed: 'Pieksämäki, Etelä-Savo',
}
