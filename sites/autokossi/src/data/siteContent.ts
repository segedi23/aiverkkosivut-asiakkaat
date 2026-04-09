import {
  Wrench, Settings, Zap, Gauge, Shield, Car, Tractor, Package,
  CreditCard, MapPin, Phone, Mail, Clock, CheckCircle, Hammer,
} from 'lucide-react'

export const business = {
  brandName: 'Autokossi',
  legalName: 'Kori- ja Konekorjaamo Kossi Ky',
  tagline: 'Autoalan palveluita jo 49 vuotta — Kiuruveden luotetuin korjaamo',
  city: 'Kiuruvesi',
  district: 'Pohjois-Savo',
  addressStreet: 'Kievarintie 9 B 3',
  postalCode: '74700',
  fullAddress: 'Kievarintie 9 B 3, 74700 Kiuruvesi',
  phoneDisplay: '0400 654 758',
  phoneLink: 'tel:0400654758',
  email: 'kalervo.kossi@autokossi.fi',
  emailLink: 'mailto:kalervo.kossi@autokossi.fi',
  mapUrl: 'https://maps.google.com/?q=Kievarintie+9+Kiuruvesi',
  facebook: '',
  instagram: '',
  intro:
    'Kori- ja Konekorjaamo Kossi Ky on Kiuruvedellä vuodesta 1976 toiminut autokorjaamo ja varaosamyymälä. Huollamme ja korjaamme henkilö- ja pakettiautot, asuntoautot ja -vaunut, traktorit sekä työkoneet — samalla ammattitaidolla, merkistä riippumatta. Varaosat saat nopeasti meiltä Örum-yhteistyökumppanin kautta, ja tarvittaessa tulemme tekemään työt myös asiakkaan tiloihin esimerkiksi maatiloille tai teollisuuteen.',
  openingSummary: 'Ma–Pe 8–16, La–Su sopimuksen mukaan',
  businessId: '0672296-0',
  dropoffNote:
    'Voit sopia puhelimitse myös sellaisen ajan, joka sopii omaan aikatauluusi — teemme töitä tarvittaessa myös iltaisin ja viikonloppuisin.',
}

export const navigation = [
  { label: 'Etusivu', to: '/' },
  { label: 'Palvelut', to: '/palvelut' },
  { label: 'Varaosat', to: '/varaosat' },
  { label: 'Rahoitus', to: '/rahoitus' },
  { label: 'Yhteystiedot', to: '/yhteystiedot' },
]

export const openingHours = [
  { short: 'Ma–Pe', hours: '08:00–16:00' },
  { short: 'La',    hours: 'Sopimuksen mukaan' },
  { short: 'Su',    hours: 'Sopimuksen mukaan' },
]

export const services = [
  {
    slug: 'maaraikaishuolto',
    name: 'Määräaikaishuollot',
    icon: Settings,
    description:
      'Huoltokirjan mukaiset määräaikaishuollot kaikille merkeille. Ilmoita ajokilometrit, niin hoidamme oikean huolto-ohjelman mukaiset työt ja oikeat varaosat kerralla.',
  },
  {
    slug: 'vikadiagnostiikka',
    name: 'Vikadiagnostiikka ja sähkötyöt',
    icon: Zap,
    description:
      'Moottorin, jarrujen, mittariston, ilmastoinnin, vaihteiston ja ajonestolaitteiden vikadiagnostiikka. Saamme reaaliaikaista dataa ajon aikana ja tunnistamme myös hankalat viat.',
  },
  {
    slug: 'jarruhuolto',
    name: 'Jarruhuollot ja -korjaukset',
    icon: Gauge,
    description:
      'Jarrulevyjen, -palojen ja -nesteiden vaihdot sekä jarrujärjestelmän täydelliset korjaukset. Jarrut kuntoon nopealla aikataululla.',
  },
  {
    slug: 'jakohihna',
    name: 'Jakohihnan vaihto',
    icon: Wrench,
    description:
      'Jakohihnan, -pyörien ja vesipumpun vaihto kerralla oikean huolto-ohjelman mukaan. Säästät rahaa kun moottori ei ehdi vaurioitumaan.',
  },
  {
    slug: 'hitsaus',
    name: 'Ruostevauriot ja hitsaustyöt',
    icon: Hammer,
    description:
      'Ruostevauriokorjaukset, katsastuskorjaukset ja muut hitsaustyöt ammattitaidolla. Myös traktoreiden ja työkoneiden runkotyöt.',
  },
  {
    slug: 'lisavarusteet',
    name: 'Lisävarusteiden asennus',
    icon: CheckCircle,
    description:
      'Moottorilämmittimet, sisähaaroitukset, peruutuskamerat ja -tutkat, ylläpitolaturit, vetokoukut. Asennamme myös tarvitsemasi lisävarusteet.',
  },
  {
    slug: 'tuulilasit',
    name: 'Tuulilasin vaihto',
    icon: Car,
    description:
      'Tuulilasin vaihto nopealla toimituksella — yleensä 1–3 arkipäivää. Hoidamme lasin tilauksen ja vaihdon samalla käynnillä.',
  },
  {
    slug: 'traktorit-tyokoneet',
    name: 'Traktorit ja työkoneet',
    icon: Tractor,
    description:
      'Maatalous- ja teollisuuskoneiden huollot ja korjaukset. Tarvittaessa tulemme paikan päälle tilallesi tai työmaalle — omilla työkaluilla ja varaosilla.',
  },
]

export const serviceCategories = services.map((s) => ({
  key: s.slug, label: s.name, title: s.name, description: s.description, icon: s.icon,
}))

export const bookingServiceOptions = services.map((s) => ({ value: s.slug, label: s.name }))

export const stats = [
  { value: '49',    label: 'Vuotta kokemusta' },
  { value: '1976',  label: 'Perustettu' },
  { value: '5+',    label: 'Ajoneuvotyyppiä' },
  { value: '24/7',  label: 'Luottopäätös rahoitukseen' },
]

export const vehicleTypes = [
  { name: 'Henkilöautot',            icon: Car },
  { name: 'Pakettiautot',            icon: Car },
  { name: 'Asuntoautot ja -vaunut',  icon: Car },
  { name: 'Traktorit',               icon: Tractor },
  { name: 'Työkoneet',               icon: Hammer },
]

export const pricingHighlights: { title: string; price: string; description: string }[] = []

export const processSteps = [
  {
    title: 'Ota yhteyttä',
    description:
      'Soita 0400 654 758 tai lähetä viesti. Kerro auton merkki, malli, rekisterinumero ja ajokilometrit, niin varmistamme oikeat varaosat ja ajankohtaisen huolto-ohjelman.',
  },
  {
    title: 'Sovitaan aika',
    description:
      'Sovimme sinulle sopivan ajan huoltoon tai korjaukseen. Tarvittaessa teemme työt myös viikonloppuisin tai tulemme paikan päälle.',
  },
  {
    title: 'Tuo auto korjaamolle',
    description:
      'Tuo ajoneuvo sovittuna aikana Kievarintielle. Varaosat ovat useimmiten saatavilla saman päivän aikana Örumin kautta.',
  },
  {
    title: 'Nouda valmis',
    description:
      'Ilmoitamme puhelimitse kun auto on valmis. Käymme läpi tehdyt työt ja saat selvän laskun.',
  },
]

export const faqItems = [
  {
    question: 'Huollatteko kaikkia automerkkejä?',
    answer:
      'Kyllä, huollamme ja korjaamme kaikki yleisimmät automerkit. Meillä on 49 vuoden kokemus autoalalta, joten kohtaamme harvoin merkin jota emme tuntisi.',
  },
  {
    question: 'Teettekö töitä viikonloppuisin?',
    answer:
      'Sopimuksesta kyllä. Jos sinulla on kiireellinen tarve, soita niin katsotaan mitä voidaan tehdä. Joustamme mielellämme.',
  },
  {
    question: 'Tuletteko paikan päälle?',
    answer:
      'Tulemme. Erityisesti maatalouden ja teollisuuden koneet huollamme tarvittaessa suoraan asiakkaan tiloissa. Ota yhteyttä niin arvioidaan tilanne.',
  },
  {
    question: 'Kuinka nopeasti saan varaosan?',
    answer:
      'Klo 14 mennessä tilatut Örum-varaosat saapuvat yleensä seuraavaksi päiväksi. Tuulilasit 1–3 arkipäivässä. Ulkomailta tilattavat osat noin viikossa.',
  },
  {
    question: 'Voiko saman käynnin aikana hoitaa huollon ja katsastuskorjaukset?',
    answer:
      'Kyllä voi. Ilmoita katsastusvaraus meille ajoissa, niin varaamme kaiken tarvittavan valmiiksi. Säästät yhden käyntikerran.',
  },
  {
    question: 'Myyttekö myös vaihtoautoja?',
    answer:
      'Kyllä. Katso ajantasainen valikoima Nettiautosta tai soita suoraan Kalervolle 0400 654 758.',
  },
]

export const heroImages = ['/images/hero-01.jpg', '/images/hero-02.jpg', '/images/hero-03.jpg']

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
  openingHours: 'Mo-Fr 08:00-16:00',
  areaServed: 'Kiuruvesi, Pohjois-Savo',
}

export const contactAndFinanceIcons = {
  Shield,
  Package,
  CreditCard,
  MapPin,
  Phone,
  Mail,
  Clock,
}
