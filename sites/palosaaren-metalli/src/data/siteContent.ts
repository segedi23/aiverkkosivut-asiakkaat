import { Flame, Settings, PaintBucket, Package, Lightbulb, Wrench } from 'lucide-react'

export const business = {
  brandName: 'Palmet',
  legalName: 'Palosaaren Metalli Oy',
  tagline: 'TÃ¤yden palvelun konepaja Koivulahdessa',
  city: 'Koivulahti',
  district: '',
  addressStreet: 'Svarvarintie 3',
  postalCode: '66530',
  fullAddress: 'Svarvarintie 3, 66530 Koivulahti',
  phoneDisplay: '(06) 2103 701',
  phoneLink: 'tel:0621037010',
  email: 'info@palmet.fi',
  emailLink: 'mailto:info@palmet.fi',
  mapUrl: 'https://maps.google.com/?q=Svarvarintie+3+Koivulahti',
  facebook: '',
  intro:
    'Palosaaren Metalli Oy on Koivulahdessa toimiva tÃ¤yden palvelun konepaja. Tarjoamme hitsaus-, koneistus-, pintakÃ¤sittely- ja kokoonpanopalveluja sekÃ¤ tuotekehitystÃ¤. Valmistamme myÃ¶s omia tuotteita: seetirenkaat, Ã¤Ã¤nenvaimentimet ja pumput. Asiakkainamme ovat mm. Logset ja Normet.',
  openingSummary: 'MaâPe 7:00â16:00',
  businessId: '',
  dropoffNote: '',
}

export const openingHours = [
  { short: 'MaâPe', hours: '07:00â16:00' },
  { short: 'LaâSu', hours: 'Suljettu' },
]

export const services = [
  {
    slug: 'hitsaus',
    name: 'Hitsaus',
    icon: Flame,
    description: 'JÃ¤reÃ¤t hitsaukset jopa 40 tonniin saakka. MIG, MAG, TIG ja puikkohitsaus. Sertifioidut hitsaajat.',
  },
  {
    slug: 'koneistus',
    name: 'Koneistus',
    icon: Settings,
    description: 'Suuret sorvaukset ja jyrsinnÃ¤t. CNC- ja konventionaalinen koneistus vaativiin tarpeisiin.',
  },
  {
    slug: 'pintakasittely',
    name: 'PintakÃ¤sittely',
    icon: PaintBucket,
    description: 'PintakÃ¤sittely laadunvarmistuksella. Maalaus, sinkitys ja muut pintakÃ¤sittelymenetelmÃ¤t.',
  },
  {
    slug: 'kokoonpano',
    name: 'Kokoonpano',
    icon: Package,
    description: 'Suunnittelusta kokoonpanoon â kokonaisvaltainen alihankintapalvelu valmiiseen tuotteeseen asti.',
  },
  {
    slug: 'tuotekehitys',
    name: 'Tuotekehitys',
    icon: Lightbulb,
    description: 'Tuotekehitys yhteistyÃ¶ssÃ¤ asiakkaan kanssa. PrototyypeistÃ¤ sarjatuotantoon.',
  },
  {
    slug: 'korjaukset',
    name: 'Kunnossapito',
    icon: Wrench,
    description: 'Konepajalaitteiden ja teollisuuskoneiden kunnossapito- ja korjauspalvelut.',
  },
]

export const serviceCategories = services.map((s) => ({
  key: s.slug, label: s.name, title: s.name, description: s.description, icon: s.icon,
}))

export const pricingHighlights: { title: string; price: string; description: string }[] = []

export const processSteps = [
  {
    title: 'TarjouspyyntÃ¶',
    description: 'LÃ¤hetÃ¤ piirustukset tai kuvaile tarve. Annamme tarjouksen nopeasti.',
  },
  {
    title: 'Suunnittelu ja valmistus',
    description: 'Suunnittelemme ja valmistamme osat omassa konepajassamme Koivulahdessa.',
  },
  {
    title: 'Toimitus',
    description: 'Toimitamme valmiit osat tai kokoonpanot sovitun aikataulun mukaisesti.',
  },
]

export const faqItems = [
  {
    question: 'MinkÃ¤ kokoisia kappaleita valmistatte?',
    answer: 'Suurimmat yksittÃ¤iset hitsattavat kappaleet ovat painoltaan jopa 40 tonnia. Koneistuksessa teemme suuretkin sorvaukset ja jyrsinnÃ¤t.',
  },
  {
    question: 'MitÃ¤ omia tuotteita valmistatte?',
    answer: 'Valmistamme seetirenkaat, pakokaasujen Ã¤Ã¤nenvaimentimet, ilmaÃ¤Ã¤nenvaimentimet, hitsauskiinnittimet, koneistuskiinnittimet ja jÃ¤Ã¤hdytysvesipumput.',
  },
  {
    question: 'KeitÃ¤ asiakkaitanne on?',
    answer: 'Asiakkaitamme ovat mm. Logset ja Normet. Palvelemme laajasti teollisuuden alihankintana.',
  },
]

export const ownProducts = [
  { name: 'Seetirenkaat', description: 'Hitsauskiinnittimien seetirenkaat sarjatuotantoon ja yksittÃ¤iskappaleisiin.' },
  { name: 'Pakokaasujen Ã¤Ã¤nenvaimentimet', description: 'Pakokaasujen Ã¤Ã¤nenvaimentimet teollisuuden prosesseihin.' },
  { name: 'IlmaÃ¤Ã¤nenvaimentimet', description: 'IlmaÃ¤Ã¤nenvaimentimet paineilmajÃ¤rjestelmiin.' },
  { name: 'Hitsauskiinnittimet', description: 'Hitsauskiinnittimet sarjatuotantoon ja yksittÃ¤iskappaleisiin.' },
  { name: 'Koneistuskiinnittimet', description: 'Koneistuskiinnittimet CNC- ja konventionaaliseen koneistukseen.' },
  { name: 'JÃ¤Ã¤hdytysvesipumput', description: 'JÃ¤Ã¤hdytysvesipumput teollisuuden prosesseihin.' },
]

export const customerLogos = [
  { src: '/images/customer-logset.jpg', label: 'Logset' },
  { src: '/images/customer-normet.jpg', label: 'Normet' },
]

export const galleryImages = [
  { src: '/images/hitsaus-01.jpg', alt: 'HitsaustyÃ¶ konepajalla' },
  { src: '/images/hitsaus-02.jpg', alt: 'JÃ¤reÃ¤ hitsaus' },
  { src: '/images/koneistus-01.jpg', alt: 'CNC-koneistus' },
  { src: '/images/koneistus-02.jpg', alt: 'SorvaustyÃ¶' },
  { src: '/images/koneistus-03.jpg', alt: 'JyrsintÃ¤' },
  { src: '/images/kokoonpano-01.jpg', alt: 'KokoonpanotyÃ¶' },
  { src: '/images/kokoonpano-04.jpg', alt: 'Tuotteen kokoonpano' },
  { src: '/images/kokoonpano-05.jpg', alt: 'Valmis kokoonpano' },
]

export const companyStats = [
  { value: '1970', label: 'Perustettu' },
  { value: '6,2 Mâ¬', label: 'Liikevaihto (2024)' },
  { value: '40', label: 'HenkilÃ¶stÃ¶' },
  { value: '30 %', label: 'Suora vienti' },
  { value: '6 500 mÂ²', label: 'Hallitila' },
  { value: '40 t', label: 'Nostokapasiteetti' },
  { value: '10 m', label: 'Koukkukorkeus' },
]

export const team: { name: string; title: string; phone: string; phoneLink: string; email: string; photo: string | null }[] = [
  {
    name: 'Juha MarjamÃ¤ki',
    title: 'Johtaja, Myynti',
    phone: '0400 866 260',
    phoneLink: 'tel:0400866260',
    email: 'juha.marjamaki@palmet.fi',
    photo: '/images/staff-juha.jpg',
  },
  {
    name: 'Jukka Hankonen',
    title: 'Myynti & markkinointi',
    phone: '050 5328 913',
    phoneLink: 'tel:0505328913',
    email: 'jukka.hankonen@palmet.fi',
    photo: '/images/staff-jukka.jpg',
  },
  {
    name: 'Sami Holkko',
    title: 'TuotantopÃ¤Ã¤llikkÃ¶',
    phone: '0400 896 040',
    phoneLink: 'tel:0400896040',
    email: 'sami.holkko@palmet.fi',
    photo: '/images/staff-sami.jpg',
  },
  {
    name: 'Satu Laakso',
    title: 'Assistentti / Laskutus',
    phone: '0400 289 068',
    phoneLink: 'tel:0400289068',
    email: 'satu.laakso@palmet.fi',
    photo: null,
  },
  {
    name: 'Marko Setula',
    title: 'Logistiikka / Hankinnat',
    phone: '040 595 6882',
    phoneLink: 'tel:0405956882',
    email: 'marko.setula@palmet.fi',
    photo: null,
  },
  {
    name: 'Mika Hanhikoski',
    title: 'TyÃ¶njohtaja, Hitsaus',
    phone: '040 646 2166',
    phoneLink: 'tel:0406462166',
    email: 'mika.hanhikoski@palmet.fi',
    photo: null,
  },
  {
    name: 'Tero Laakso',
    title: 'TyÃ¶njohtaja, Koneistus',
    phone: '045 351 9737',
    phoneLink: 'tel:0453519737',
    email: 'tero.laakso@palmet.fi',
    photo: null,
  },
  {
    name: 'Cygan Ireneusz',
    title: 'Tuotannonsuunnittelija',
    phone: '044 242 1080',
    phoneLink: 'tel:0442421080',
    email: 'ireneusz.cygan@palmet.fi',
    photo: null,
  },
  {
    name: 'Kalle ÃstergÃ¥rd',
    title: 'Vastaanotto & lÃ¤hettÃ¤mÃ¶ (7:00â15:30)',
    phone: '040 6681 770',
    phoneLink: 'tel:0406681770',
    email: 'varasto@palmet.fi',
    photo: '/images/staff-kalle.jpg',
  },
  {
    name: 'Jyrki Jokipii',
    title: 'ICT',
    phone: '040 529 1035',
    phoneLink: 'tel:0405291035',
    email: 'jyrki.jokipii@palmet.fi',
    photo: null,
  },
]

export const machineFleet = {
  cncHorizontal: [
    {
      name: 'FPT AREA-EV8+TRT30-PT2530',
      specs: 'X=10000 Y=3500 Z=1500',
      details: 'PyÃ¶rÃ¶pÃ¶ytÃ¤ 2500Ã3000 mm, max 30 t, 60 tyÃ¶kalua',
    },
    { name: 'Fermat WFT 11', specs: 'X=3000 Y=2000 Z=1250 W=730', details: '10 000 kg, 60 tyÃ¶kalua' },
    { name: 'MITSUI SEIKI', specs: 'X=1200 Y=1200 Z=900', details: '120 tyÃ¶kalua, 1600 kg, 6Ã 800Ã800 palettia' },
    { name: 'SCHARMANN ECOCUT 2', specs: 'X=2500 Y=2000 Z=900 W=800', details: '6000 kg, 55 tyÃ¶kalua' },
  ],
  cncVertical: [
    { name: 'Hyundai Wia F650/50', specs: 'X=1400 Y=660 Z=635', details: '1300 kg' },
    { name: 'MAZAK', specs: 'X=1120 Y=510 Z=510', details: '800 kg' },
  ],
  cncLathes: [
    { name: '3Ã MAZAK QUICK-TURN 30 N', specs: 'Ã 400 Ã 1016 mm', details: '' },
    { name: 'MAZAK QUICKTURN 250L', specs: 'Ã 380 Ã 502 mm', details: '' },
    { name: 'MAZAK QUICK-TURN 10 N', specs: 'Ã 200 Ã 500 mm', details: '' },
    { name: 'MAZAK QUICK-TURN 28 U', specs: 'Ã 400 Ã 1000 mm', details: '' },
  ],
  manualLathes: [
    { name: 'HEID CNC', specs: 'Ã 800 Ã 3000 mm', details: '' },
    { name: 'SASTA SAC 150', specs: 'Ã 300 Ã 1500 mm', details: '' },
    { name: '1M63B', specs: 'Ã 315 Ã 3000 mm', details: '' },
    { name: 'BULLARD Carousel', specs: 'Ã 1500 Ã 1000 mm', details: '' },
  ],
  sheetMetal: [
    { name: 'JAROMET levyleikkuri', specs: '16Ã4000 mm', details: '' },
    { name: 'STM-PULLMAX, BIKO mankelointikoneet', specs: '', details: '' },
    { name: 'PEARSON sÃ¤rmÃ¤yspuristin', specs: '300 tonnia', details: '' },
    { name: 'LVD CNC sÃ¤rmÃ¤yspuristin', specs: '35 tonnia', details: '' },
  ],
  welding: [
    { name: 'Fanuc M-710iC robotti', specs: 'PyÃ¶rÃ¶pÃ¶ytÃ¤', details: '' },
    { name: 'MOTOMAN XRC robotti', specs: 'TuplakÃ¤Ã¤ntÃ¶pÃ¶ydÃ¤t', details: '' },
    { name: 'ESAB MKR 300 torni', specs: '800A jauhekaarihitsaus', details: '' },
  ],
  support: [
    { name: 'PyÃ¶rittÃ¤jÃ¤rullastot (10 kpl)', specs: '4â8 tonnia', details: '' },
    { name: 'PyÃ¶rÃ¶pÃ¶ydÃ¤t (useita)', specs: '600â5000 kg', details: '' },
    { name: 'DEA MISTRAL koordinaattimittauskone', specs: '3D-mittaus', details: '' },
  ],
}

export const historyTimeline = [
  {
    year: 1970,
    text: 'Pentti SyrjÃ¤lÃ¤ perustaa yrityksen 1.12.1970. Kaksi tyÃ¶ntekijÃ¤Ã¤ Vaasan Palosaaren kaupunginosassa.',
  },
  {
    year: 1972,
    text: 'EnsimmÃ¤inen iso projekti â matkustajien noususilta ruotsalaislaivaan Vaskiluodon satamassa.',
  },
  {
    year: 1973,
    text: 'YhteistyÃ¶ WÃ¤rtsilÃ¤n kanssa alkaa. Dieselmoottorien Ã¤Ã¤nenvaimentimia, parhaimmillaan 500 kpl/vuosi vuoteen 2000 asti.',
  },
  {
    year: 1981,
    text: 'Muutto VÃ¤hÃ¤kyrÃ¶Ã¶n. Vaasan majakka (16,3 m korkea) rakennetaan, kuljetetaan ja asennetaan merelle.',
  },
  {
    year: 1993,
    text: 'Osittainen muutto Koivulahteen, Mustasaareen. VÃ¤hÃ¤kyrÃ¶n tuotanto loppuu 2002.',
  },
  { year: 2002, text: 'YhteistyÃ¶ Normetin kanssa (Iisalmi). Kasvaa noin kolmasosaan liikevaihdosta.' },
  {
    year: 2004,
    text: 'Generaattorikomponentteja suurille suoravetoisille tuuliturbiineille (~4 MW) The Switch/ScanWindille (Norja), GE Energyn yritysostoon asti (2007).',
  },
  { year: 2007, text: 'Logset-yhteistyÃ¶ alkaa (naapuriyritys). Noin kolmasosa liikevaihdosta.' },
  {
    year: 2014,
    text: 'LangTechin pakokaasupesureita â yrityksen historian merkittÃ¤vin yksittÃ¤istilaus.',
  },
  { year: 2017, text: 'Johdon uudistaminen, "Muutos 2017" kehitysohjelma.' },
]

export const certifications = [
  { name: 'ISO 9001:2015', description: 'LaadunhallintajÃ¤rjestelmÃ¤' },
  { name: 'ISO 14001:2015', description: 'YmpÃ¤ristÃ¶jÃ¤rjestelmÃ¤' },
  { name: 'OHSAS 18001', description: 'TyÃ¶terveys ja -turvallisuus' },
  { name: 'IIW International Welding Specialists', description: 'KansainvÃ¤linen hitsausasiantuntijuus' },
]

export const jobOpenings = [
  {
    title: 'CNC-koneistaja',
    tasks: ['KoneistustyÃ¶t', 'Ohjelmointi', 'Asetteenvaihto'],
    requirements: ['Usean vuoden CNC-kokemus', 'Tekniikka, koneet ja materiaalit', 'Piirustusten luku'],
    benefits: ['Vakituinen kokopÃ¤ivÃ¤tyÃ¶', 'Moderni ympÃ¤ristÃ¶', 'Ajanmukainen kalusto', 'Kehittymismahdollisuudet'],
  },
  {
    title: 'Robottihitsaaja',
    tasks: ['Robottihitsaus', 'Ohjelmointi', 'Asetteenvaihto'],
    requirements: ['Fanuc tai Motoman -kokemus', 'Piirustusten luku'],
    benefits: ['Vakituinen kokopÃ¤ivÃ¤tyÃ¶', 'Moderni ympÃ¤ristÃ¶', 'Ajanmukainen kalusto', 'Kehittymismahdollisuudet'],
  },
  {
    title: 'Hitsaaja',
    tasks: ['OhutlevytyÃ¶t ja hitsaus'],
    requirements: ['Hitsauskokemus tai halu oppia', 'Piirustusten luku'],
    benefits: ['Vakituinen kokopÃ¤ivÃ¤tyÃ¶', 'Moderni ympÃ¤ristÃ¶', 'Ajanmukainen kalusto', 'Kehittymismahdollisuudet'],
  },
]

export const heroImages = ['/images/hero-01-hitsaus.jpg']

export const localBusinessSchema = {
  name: 'Palosaaren Metalli Oy',
  url: 'https://www.palmet.fi',
  telephone: '+35862103700',
  email: 'info@palmet.fi',
  address: { street: 'Svarvarintie 3', postalCode: '66530', city: 'Koivulahti' },
}
