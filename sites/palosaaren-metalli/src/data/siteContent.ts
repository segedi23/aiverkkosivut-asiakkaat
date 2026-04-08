import { Flame, Settings, PaintBucket, Package, Lightbulb, Wrench } from 'lucide-react'

export const business = {
  brandName: 'Palmet',
  legalName: 'Palosaaren Metalli Oy',
  tagline: 'Täyden palvelun konepaja Koivulahdessa',
  city: 'Koivulahti',
  district: '',
  addressStreet: 'Svarvarintie 3',
  postalCode: '66530',
  fullAddress: 'Svarvarintie 3, 66530 Koivulahti',
  phoneDisplay: '(06) 2103 701',
  phoneLink: 'tel:062103701',
  email: 'info@palmet.fi',
  emailLink: 'mailto:info@palmet.fi',
  mapUrl: 'https://maps.google.com/?q=Svarvarintie+3+Koivulahti',
  facebook: '',
  intro:
    'Palosaaren Metalli Oy on Koivulahdessa toimiva täyden palvelun konepaja. Tarjoamme hitsaus-, koneistus-, pintakäsittely- ja kokoonpanopalveluja sekä tuotekehitystä. Valmistamme myös omia tuotteita: seetirenkaat, äänenvaimentimet ja pumput. Asiakkainamme ovat mm. Logset ja Normet.',
  openingSummary: 'Ma–Pe 7:00–16:00',
  businessId: '',
  dropoffNote: '',
}

export const openingHours = [
  { short: 'Ma–Pe', hours: '07:00–16:00' },
  { short: 'La–Su', hours: 'Suljettu' },
]

export const services = [
  {
    slug: 'hitsaus',
    name: 'Hitsaus',
    icon: Flame,
    description: 'Järeät hitsaukset jopa 40 tonniin saakka. MIG, MAG, TIG ja puikkohitsaus. Sertifioidut hitsaajat.',
  },
  {
    slug: 'koneistus',
    name: 'Koneistus',
    icon: Settings,
    description: 'Suuret sorvaukset ja jyrsinnät. CNC- ja konventionaalinen koneistus vaativiin tarpeisiin.',
  },
  {
    slug: 'pintakasittely',
    name: 'Pintakäsittely',
    icon: PaintBucket,
    description: 'Pintakäsittely laadunvarmistuksella. Maalaus, sinkitys ja muut pintakäsittelymenetelmät.',
  },
  {
    slug: 'kokoonpano',
    name: 'Kokoonpano',
    icon: Package,
    description: 'Suunnittelusta kokoonpanoon — kokonaisvaltainen alihankintapalvelu valmiiseen tuotteeseen asti.',
  },
  {
    slug: 'tuotekehitys',
    name: 'Tuotekehitys',
    icon: Lightbulb,
    description: 'Tuotekehitys yhteistyössä asiakkaan kanssa. Prototyypeistä sarjatuotantoon.',
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
    title: 'Tarjouspyyntö',
    description: 'Lähetä piirustukset tai kuvaile tarve. Annamme tarjouksen nopeasti.',
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
    question: 'Minkä kokoisia kappaleita valmistatte?',
    answer: 'Suurimmat yksittäiset hitsattavat kappaleet ovat painoltaan jopa 40 tonnia. Koneistuksessa teemme suuretkin sorvaukset ja jyrsinnät.',
  },
  {
    question: 'Mitä omia tuotteita valmistatte?',
    answer: 'Valmistamme seetirenkaat, pakokaasujen äänenvaimentimet, ilmaäänenvaimentimet, hitsauskiinnittimet, koneistuskiinnittimet ja jäähdytysvesipumput.',
  },
  {
    question: 'Keitä asiakkaitanne on?',
    answer: 'Asiakkaitamme ovat mm. Logset ja Normet. Palvelemme laajasti teollisuuden alihankintana.',
  },
]

export const ownProducts = [
  { name: 'Seetirenkaat', description: 'Hitsauskiinnittimien seetirenkaat sarjatuotantoon ja yksittäiskappaleisiin.' },
  { name: 'Pakokaasujen äänenvaimentimet', description: 'Pakokaasujen äänenvaimentimet teollisuuden prosesseihin.' },
  { name: 'Ilmaäänenvaimentimet', description: 'Ilmaäänenvaimentimet paineilmajärjestelmiin.' },
  { name: 'Hitsauskiinnittimet', description: 'Hitsauskiinnittimet sarjatuotantoon ja yksittäiskappaleisiin.' },
  { name: 'Koneistuskiinnittimet', description: 'Koneistuskiinnittimet CNC- ja konventionaaliseen koneistukseen.' },
  { name: 'Jäähdytysvesipumput', description: 'Jäähdytysvesipumput teollisuuden prosesseihin.' },
]

export const customerLogos = [
  { src: '/images/customer-logset.jpg', label: 'Logset' },
  { src: '/images/customer-normet.jpg', label: 'Normet' },
]

export const galleryImages = [
  { src: '/images/hitsaus-01.jpg', alt: 'Hitsaustyö konepajalla' },
  { src: '/images/hitsaus-02.jpg', alt: 'Järeä hitsaus' },
  { src: '/images/koneistus-01.jpg', alt: 'CNC-koneistus' },
  { src: '/images/koneistus-02.jpg', alt: 'Sorvaustyö' },
  { src: '/images/koneistus-03.jpg', alt: 'Jyrsintä' },
  { src: '/images/kokoonpano-01.jpg', alt: 'Kokoonpanotyö' },
  { src: '/images/kokoonpano-04.jpg', alt: 'Tuotteen kokoonpano' },
  { src: '/images/kokoonpano-05.jpg', alt: 'Valmis kokoonpano' },
]

export const companyStats = [
  { value: '1970', label: 'Perustettu' },
  { value: '6,2 M€', label: 'Liikevaihto (2024)' },
  { value: '40', label: 'Henkilöstö' },
  { value: '30 %', label: 'Suora vienti' },
  { value: '6 500 m²', label: 'Hallitila' },
  { value: '40 t', label: 'Nostokapasiteetti' },
  { value: '10 m', label: 'Koukkukorkeus' },
]

export const team: { name: string; title: string; phone: string; phoneLink: string; email: string; photo: string | null }[] = [
  {
    name: 'Juha Marjamäki',
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
    title: 'Tuotantopäällikkö',
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
    title: 'Työnjohtaja, Hitsaus',
    phone: '040 646 2166',
    phoneLink: 'tel:0406462166',
    email: 'mika.hanhikoski@palmet.fi',
    photo: null,
  },
  {
    name: 'Tero Laakso',
    title: 'Työnjohtaja, Koneistus',
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
    name: 'Kalle Östergård',
    title: 'Vastaanotto & lähettämö (7:00–15:30)',
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
      details: 'Pyöröpöytä 2500×3000 mm, max 30 t, 60 työkalua',
    },
    { name: 'Fermat WFT 11', specs: 'X=3000 Y=2000 Z=1250 W=730', details: '10 000 kg, 60 työkalua' },
    { name: 'MITSUI SEIKI', specs: 'X=1200 Y=1200 Z=900', details: '120 työkalua, 1600 kg, 6× 800×800 palettia' },
    { name: 'SCHARMANN ECOCUT 2', specs: 'X=2500 Y=2000 Z=900 W=800', details: '6000 kg, 55 työkalua' },
  ],
  cncVertical: [
    { name: 'Hyundai Wia F650/50', specs: 'X=1400 Y=660 Z=635', details: '1300 kg' },
    { name: 'MAZAK', specs: 'X=1120 Y=510 Z=510', details: '800 kg' },
  ],
  cncLathes: [
    { name: '3× MAZAK QUICK-TURN 30 N', specs: 'Ø 400 × 1016 mm', details: '' },
    { name: 'MAZAK QUICKTURN 250L', specs: 'Ø 380 × 502 mm', details: '' },
    { name: 'MAZAK QUICK-TURN 10 N', specs: 'Ø 200 × 500 mm', details: '' },
    { name: 'MAZAK QUICK-TURN 28 U', specs: 'Ø 400 × 1000 mm', details: '' },
  ],
  manualLathes: [
    { name: 'HEID CNC', specs: 'Ø 800 × 3000 mm', details: '' },
    { name: 'SASTA SAC 150', specs: 'Ø 300 × 1500 mm', details: '' },
    { name: '1M63B', specs: 'Ø 315 × 3000 mm', details: '' },
    { name: 'BULLARD Carousel', specs: 'Ø 1500 × 1000 mm', details: '' },
  ],
  sheetMetal: [
    { name: 'JAROMET levyleikkuri', specs: '16×4000 mm', details: '' },
    { name: 'STM-PULLMAX, BIKO mankelointikoneet', specs: '', details: '' },
    { name: 'PEARSON särmäyspuristin', specs: '300 tonnia', details: '' },
    { name: 'LVD CNC särmäyspuristin', specs: '35 tonnia', details: '' },
  ],
  welding: [
    { name: 'Fanuc M-710iC robotti', specs: 'Pyöröpöytä', details: '' },
    { name: 'MOTOMAN XRC robotti', specs: 'Tuplakääntöpöydät', details: '' },
    { name: 'ESAB MKR 300 torni', specs: '800A jauhekaarihitsaus', details: '' },
  ],
  support: [
    { name: 'Pyörittäjärullastot (10 kpl)', specs: '4–8 tonnia', details: '' },
    { name: 'Pyöröpöydät (useita)', specs: '600–5000 kg', details: '' },
    { name: 'DEA MISTRAL koordinaattimittauskone', specs: '3D-mittaus', details: '' },
  ],
}

export const historyTimeline = [
  {
    year: 1970,
    text: 'Pentti Syrjälä perustaa yrityksen 1.12.1970. Kaksi työntekijää Vaasan Palosaaren kaupunginosassa.',
  },
  {
    year: 1972,
    text: 'Ensimmäinen iso projekti — matkustajien noususilta ruotsalaislaivaan Vaskiluodon satamassa.',
  },
  {
    year: 1973,
    text: 'Yhteistyö Wärtsilän kanssa alkaa. Dieselmoottorien äänenvaimentimia, parhaimmillaan 500 kpl/vuosi vuoteen 2000 asti.',
  },
  {
    year: 1981,
    text: 'Muutto Vähäkyröön. Vaasan majakka (16,3 m korkea) rakennetaan, kuljetetaan ja asennetaan merelle.',
  },
  {
    year: 1993,
    text: 'Osittainen muutto Koivulahteen, Mustasaareen. Vähäkyrön tuotanto loppuu 2002.',
  },
  { year: 2002, text: 'Yhteistyö Normetin kanssa (Iisalmi). Kasvaa noin kolmasosaan liikevaihdosta.' },
  {
    year: 2004,
    text: 'Generaattorikomponentteja suurille suoravetoisille tuuliturbiineille (~4 MW) The Switch/ScanWindille (Norja), GE Energyn yritysostoon asti (2007).',
  },
  { year: 2007, text: 'Logset-yhteistyö alkaa (naapuriyritys). Noin kolmasosa liikevaihdosta.' },
  {
    year: 2014,
    text: 'LangTechin pakokaasupesureita — yrityksen historian merkittävin yksittäistilaus.',
  },
  { year: 2017, text: 'Johdon uudistaminen, "Muutos 2017" kehitysohjelma.' },
]

export const certifications = [
  { name: 'ISO 9001:2015', description: 'Laadunhallintajärjestelmä' },
  { name: 'ISO 14001:2015', description: 'Ympäristöjärjestelmä' },
  { name: 'OHSAS 18001', description: 'Työterveys ja -turvallisuus' },
  { name: 'IIW International Welding Specialists', description: 'Kansainvälinen hitsausasiantuntijuus' },
]

export const jobOpenings = [
  {
    title: 'CNC-koneistaja',
    tasks: ['Koneistustyöt', 'Ohjelmointi', 'Asetteenvaihto'],
    requirements: ['Usean vuoden CNC-kokemus', 'Tekniikka, koneet ja materiaalit', 'Piirustusten luku'],
    benefits: ['Vakituinen kokopäivätyö', 'Moderni ympäristö', 'Ajanmukainen kalusto', 'Kehittymismahdollisuudet'],
  },
  {
    title: 'Robottihitsaaja',
    tasks: ['Robottihitsaus', 'Ohjelmointi', 'Asetteenvaihto'],
    requirements: ['Fanuc tai Motoman -kokemus', 'Piirustusten luku'],
    benefits: ['Vakituinen kokopäivätyö', 'Moderni ympäristö', 'Ajanmukainen kalusto', 'Kehittymismahdollisuudet'],
  },
  {
    title: 'Hitsaaja',
    tasks: ['Ohutlevytyöt ja hitsaus'],
    requirements: ['Hitsauskokemus tai halu oppia', 'Piirustusten luku'],
    benefits: ['Vakituinen kokopäivätyö', 'Moderni ympäristö', 'Ajanmukainen kalusto', 'Kehittymismahdollisuudet'],
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
