import { Truck, Package, Home, Printer, MapPin, Clock, Sofa, Thermometer, Calendar } from 'lucide-react'

export const business = {
  brandName: 'Kuljetusliike Lindgren',
  legalName: 'Kuljetusliike Lindgren Oy',
  tagline: 'Luotettavat kuljetukset vuodesta 1964',
  city: 'Kokkola',
  district: '',
  addressStreet: 'Lekatie 6',
  postalCode: '67800',
  fullAddress: 'Lekatie 6, 67800 Kokkola',
  phoneDisplay: '040 550 2825',
  phoneLink: 'tel:0405502825',
  email: 'jan@kuljetusliikelindgren.fi',
  emailLink: 'mailto:jan@kuljetusliikelindgren.fi',
  mapUrl: 'https://maps.google.com/?q=Lekatie+6+Kokkola',
  facebook: '',
  intro:
    'Kuljetusliike Lindgren Oy on vuodesta 1964 toiminut täyden palvelun kuljetusliike Kokkolasta. Toimimme joustavasti, luotettavasti ja täsmällisesti. Palvelemme niin yritys- kuin yksityisasiakkaita tilausajoissa, muutoissa, erikoiskuljetuksissa sekä nouto- ja jakelupalveluissa koko Suomessa.',
  openingSummary: 'Arkisin — soita niin sovitaan',
  businessId: '',
  dropoffNote: '',
}

export const openingHours = [
  { short: 'Ma–Pe', hours: 'Sopimuksen mukaan' },
  { short: 'La–Su', hours: 'Sopimuksen mukaan' },
]

export const services = [
  {
    slug: 'tilausajot',
    name: 'Tilaus- ja sopimuskuljetukset',
    icon: Truck,
    description:
      'Alueemme ehkä pitkäaikaisin perinteinen jakelukuljetusyritys. Säännölliset sopimuskuljetukset ja yksittäiset tilausajot koko Suomeen — pienpaketista lavatavaraan asti. Luotettavasti aikataulussa.',
  },
  {
    slug: 'muuttokuljetukset',
    name: 'Muuttokuljetukset',
    icon: Home,
    description:
      'Muuttokuljetukset avaimet käteen -periaatteella. Referensseinämme mm. suuren painolaitoksen ja noin 400 oppilaan koulun muutto. Vuokraamme myös muuttolaatikoita.',
  },
  {
    slug: 'erikoiskuljetukset',
    name: 'Erikoiskuljetukset',
    icon: Package,
    description:
      'Arkisto- ja kassaholvisiirrot, pianojen ja flyygelin kuljetukset sekä muut soitinkuljetukset. Pianokuljetukset ovat meille rutiinitoimenpide laajan kokemuksemme ansiosta.',
  },
  {
    slug: 'kopiokonekuljetukset',
    name: 'Kopiokonekuljetukset',
    icon: Printer,
    description:
      'Monitoimilaitteiden kuljetukset jo 1980-luvulta. Täysi palvelu: kuljetus, asennus, käyttöönotto, toimivuuden tarkistus ja vanhan laitteen poisvienti. Käytössämme erikoisvalmisteisia rappukiipijöitä.',
  },
  {
    slug: 'nouto-jakelu',
    name: 'Nouto- ja jakelukuljetukset',
    icon: MapPin,
    description: 'Nouto- ja jakelupalvelut Kokkolan seudulla ja koko Suomessa. Joustava aikataulu.',
  },
  {
    slug: 'pikakuljetukset',
    name: 'Pikakuljetukset',
    icon: Clock,
    description: 'Kiireelliset pikakuljetukset kun aika on ratkaiseva tekijä.',
  },
  {
    slug: 'kalustekuljetukset',
    name: 'Kalustekuljetukset',
    icon: Sofa,
    description:
      'Huonekalujen ja kodinkoneiden kuljetukset perille asti, tarvittaessa kokoonpano ja asennus. Ammattitaitoista käsittelyä ovelta ovelle.',
  },
  {
    slug: 'muut-kuljetuspalvelut',
    name: 'Muut kuljetuspalvelut',
    icon: Thermometer,
    description:
      'Lämpösäädellyt kuljetukset, pikakuljetukset, osa- ja täyskuormat, terminaalipalvelut sekä varastointi- ja logistiikkapalvelut.',
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
    title: 'Pyydä tarjous',
    description: 'Soita tai lähetä sähköpostia. Kerro kuljetustarve, lähtö- ja kohdeosoite.',
  },
  {
    title: 'Sovitaan aikataulu',
    description: 'Sovimme kuljetuspäivän ja -ajan. Joustamme aikatauluissa tarpeen mukaan.',
  },
  {
    title: 'Kuljetus perille',
    description: 'Hoidamme kuljetuksen ammattitaidolla ja täsmällisesti sovitun mukaisesti.',
  },
]

export const faqItems = [
  {
    question: 'Millä alueella toimitte?',
    answer: 'Toimimme koko Suomessa. Kotipaikka on Kokkola ja terminaalit sijaitsevat Kokkolan keskeisillä kuljetusreiteillä.',
  },
  {
    question: 'Kuinka kauan yritys on toiminut?',
    answer: 'Kuljetusliike Lindgren on perustettu vuonna 1964 — yli 60 vuotta luotettavia kuljetuksia.',
  },
  {
    question: 'Teettekö muuttoja myös viikonloppuisin?',
    answer: 'Kyllä — sovimme kuljetukset joustavasti myös viikonloppuisin sopimuksen mukaan.',
  },
]

export const certifications = [
  { src: '/images/cert-aaa.jpg', label: 'AAA — Korkein luottoluokitus' },
  { src: '/images/cert-menestyjayritys.jpg', label: 'Menestyjäyritys' },
  { src: '/images/cert-luotettava-kumppani.jpg', label: 'Luotettava kumppani' },
]

export const fleet = [
  {
    type: 'Pakettiautot',
    capacity: '~17 m³',
    features: ['Takalaitanostin', 'Kylkiaukeavat'],
    image: '/images/icon-kalusto.png',
  },
  {
    type: 'Kevytkuorma-autot',
    capacity: '~30 m³',
    features: ['Takalaitanostin', 'Lämpösäädelty kuormatila'],
    image: '/images/icon-kalusto.png',
  },
  {
    type: 'Raskaat kuorma-autot',
    capacity: '~50 m³',
    features: ['Takalaitanostin', 'Kylkiaukeavat', 'Lämpösäädelty kuormatila'],
    image: '/images/icon-kalusto.png',
  },
  {
    type: 'Puoliperäyhdistelmät',
    capacity: '~77 m³',
    features: ['Täysperä', 'Kylkiaukeavat', 'Lämpösäädelty kuormatila'],
    image: '/images/icon-kalusto.png',
  },
]

export const historyTimeline = [
  {
    year: '1964',
    title: 'Yritys perustetaan',
    description:
      'Artur Lindgren aloittaa yhden ajoneuvon voimin halkokuormien kuljetuksella Kokkolassa. Saa kuljetusluvan 16. toukokuuta.',
    icon: Calendar,
  },
  {
    year: '1971',
    title: 'Ensimmäinen umpiauto',
    description:
      'Polttopuubisnes loppuu. Ensimmäinen umpikorinen jakeluauto hankitaan. Paasivaaran meijerin, Sampo-juomatehtaan ja Kalan sahan kuljetukset alkavat.',
    icon: Calendar,
  },
  {
    year: '1972',
    title: 'Fazer-jakelu alkaa',
    description: 'Fazerin leipomon jakelu alkaa kahdella autolla.',
    icon: Calendar,
  },
  {
    year: '1975',
    title: 'Kasvu viidellä autolla',
    description:
      'SOK-tehtaan laajennus Kalajoelle ja Ylivieskaan. Kalusto kasvaa 5 ajoneuvoon. Outokummun tehtaan kuljetukset ja Kokkolan Terveyskeskuksen kuljetukset alkavat. Keski-Pohjanmaan kamariorkesterin kuljetukset alkavat (yli 30 vuotta).',
    icon: Calendar,
  },
  {
    year: '1985',
    title: 'Kommandiittiyhtiöksi',
    description:
      'Yritys muuttuu kommandiittiyhtiöksi. Vastuu siirtyy asteittain perustajan pojille.',
    icon: Calendar,
  },
  {
    year: '1986–1987',
    title: 'Ensimmäinen haaste',
    description:
      'SOK:n vapaa-ajan pukujen valmistus loppuu. Ensimmäinen varsinainen haaste yrityksen historiassa.',
    icon: Calendar,
  },
  {
    year: '1988',
    title: 'Valtakunnalliseksi',
    description:
      'Scansped-yhteistyö alkaa. Liittyy Suomen Kaukokiitoon. Saarioisten elintarvikejakelu käynnistyy.',
    icon: Calendar,
  },
  {
    year: '1990-luku',
    title: 'Erikoistuminen',
    description:
      'Erikoiskuljetukset laajenevat: monitoimilaitteet, pianot, flyygelet. Kotimaan ja ulkomaan muuttopalvelut alkavat.',
    icon: Calendar,
  },
  {
    year: '2000',
    title: 'Osakeyhtiöksi',
    description:
      'Yhtiömuoto vaihtuu osakeyhtiöksi 31.3.2000. Jan Lindgren nimitetään toimitusjohtajaksi.',
    icon: Calendar,
  },
  {
    year: 'Nykypäivä',
    title: 'Täsmäkuljetusta',
    description:
      'Täyden palvelun kuljetusliike, joka palvelee joustavasti, luotettavasti ja täsmällisesti — asiakkaan luottamuksen arvoisena.',
    icon: Calendar,
  },
]

export const companyCapabilities = [
  { label: 'EU-direktiivin mukainen ammattipätevyys', description: 'Jatkuva koulutus' },
  { label: 'Sähköinen kuljetusseuranta', description: '24/7 reaaliaikainen' },
  { label: 'Kuljettajien ajo- ja työaikaseuranta', description: 'Reaaliaikainen' },
  { label: 'Rahdin lämpötilaseuranta', description: 'Reaaliaikainen' },
]

export const team = [
  { name: 'Jan Lindgren', title: 'Yrittäjä', phone: '040 550 2825', phoneLink: 'tel:0405502825', email: 'jan@kuljetusliikelindgren.fi' },
  { name: 'Annika Lindgren', title: 'Yrittäjä', phone: '040 066 7899', phoneLink: 'tel:0400667899', email: '' },
  { name: 'Mika Bexar', title: 'Kuljettaja', phone: '040 593 1427', phoneLink: 'tel:0405931427', email: '' },
]

export const heroImages = ['/images/hero-01.jpg']

export const localBusinessSchema = {
  name: 'Kuljetusliike Lindgren Oy',
  url: 'https://www.kuljetusliikelindgren.fi',
  telephone: '+358405502825',
  email: 'jan@kuljetusliikelindgren.fi',
  address: { street: 'Lekatie 6', postalCode: '67800', city: 'Kokkola' },
}
