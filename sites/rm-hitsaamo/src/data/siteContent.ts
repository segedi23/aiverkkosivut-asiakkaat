import { Building2, Fence, Ruler, HardHat, Factory, Wrench } from 'lucide-react'

export const business = {
  brandName: 'RM-Hitsaamo',
  legalName: 'RM-Hitsaamo Oy',
  tagline: 'Jo yli 50 vuotta laadukasta teräsrakentamista',
  city: 'Helsinki',
  district: 'Itä-Pakila',
  addressStreet: 'Spelttitie 2',
  postalCode: '00680',
  fullAddress: 'Spelttitie 2, 00680 Helsinki',
  phoneDisplay: '0500 510 630',
  phoneLink: 'tel:0500510630',
  email: 'mikko.laatikainen@rm-hitsaamo.fi',
  emailLink: 'mailto:mikko.laatikainen@rm-hitsaamo.fi',
  mapUrl: 'https://maps.google.com/?q=Spelttitie+2+Helsinki',
  facebook: '',
  intro:
    'RM-Hitsaamo Oy on vuonna 1973 perustettu helsinkiläinen teräsrakennevalmistaja. Suunnittelemme, valmistamme ja asennamme CE-merkittyjä teräsrakenteita rakennusteollisuuden tarpeisiin. Teemme tuotteita sekä teräksestä että ruostumattomasta teräksestä. Toimitusvarmuutemme perustuu omaan teräsrakennesuunnitteluun, ammattitaitoiseen työnjohtoon ja omaan vahvan kokemuksen omaavaan asennushenkilökuntaan.',
  openingSummary: 'Arkisin — sopimuksen mukaan',
  businessId: '0105482-8',
  dropoffNote: '',
}

export const openingHours = [
  { short: 'Ma–Pe', hours: 'Sopimuksen mukaan' },
  { short: 'La–Su', hours: 'Suljettu' },
]

export const services = [
  {
    slug: 'kantavat-terasrakenteet',
    name: 'Kantavat teräsrakenteet',
    icon: Building2,
    description:
      'CE-merkityt kantavat teräsrakenteet standardin EN 1090 mukaisesti. Pilarit, palkit, ristikot ja kehärakenteet.',
  },
  {
    slug: 'julkisivuverhoukset',
    name: 'Julkisivuverhoukset',
    icon: Fence,
    description:
      'Teräksiset julkisivuverhoukset, säleikkörakenteet ja arkkitehtoniset teräselementit. Alumiini-, Cembrit- ja Liberta-järjestelmät.',
  },
  {
    slug: 'portaat-ja-kaiteet',
    name: 'Portaat ja kaiteet',
    icon: Ruler,
    description:
      'Teräsportaat, kierreportaat, pinnakaiteet, lasikaiteet ja RST-käsijohteet. Teräs ja ruostumaton teräs.',
  },
  {
    slug: 'katokset-ja-terassit',
    name: 'Katokset ja terassit',
    icon: HardHat,
    description:
      'Teräskatokset, sisääntulokatokset vesieristeineen, terassirakenteet, pergolat ja pyöräkatokset.',
  },
  {
    slug: 'iv-laitejalustat',
    name: 'IV-konehuoneet ja jalustat',
    icon: Factory,
    description:
      'IV-konehuoneiden teräsrungot, PVP-elementit, lauhdutinpedit, huoltotasot ja tikasrakenteet.',
  },
  {
    slug: 'erikoiskohteet',
    name: 'Erikoiskohteet',
    icon: Wrench,
    description:
      'Vaativat erikoisrakenteet: turvapollarit, hissikuilut, palosuojamaalatut rakenteet, luodinkestävät seinät ja mittatilaustyöt.',
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
    title: 'Tarjouspyyntö',
    description:
      'Lähetä piirustukset tai kuvaile tarve sähköpostilla tai puhelimitse. Annamme tarjouksen nopeasti — pienistä tilaustöistä suuriin projekteihin.',
  },
  {
    title: 'Suunnittelu ja valmistus',
    description:
      'Suunnittelemme ja valmistamme rakenteet omassa hallissamme Itä-Pakilassa. FISE-pätevyys ja sertifioitu hitsauskoordinaattori (Inspecta) varmistavat laadun.',
  },
  {
    title: 'Kuljetus ja asennus',
    description:
      'Toimitamme ja asennamme rakenteet työmaalle aikataulun mukaisesti. Asennushenkilökunnallamme on kuvalliset henkilö-, tulityö- ja työturvallisuuskortit.',
  },
]

export const faqItems = [
  {
    question: 'Minkä kokoisia rakenteita valmistatte?',
    answer:
      'Suurimmat yksittäiset kappaleet, joita voimme valmistaa, ovat noin 20 metriä pitkiä ja maksimi painoltaan 10 tonnia.',
  },
  {
    question: 'Onko teillä CE-merkintä?',
    answer:
      'Kyllä — tuotantomme on CE-merkitty standardin EN 1090 mukaisesti. Meillä on myös FISE-pätevyydet luokissa 2 ja "poikkeuksellisen vaativa". Tuotannossa valmistuksen hitsausprosesseja valvoo sertifioitu hitsauskoordinaattori (Inspecta Sertifiointi).',
  },
  {
    question: 'Millä alueella toimitte?',
    answer:
      'Pääasiallisesti pääkaupunkiseudulla ja Uudellamaalla, mutta toteutamme myös kohteita muualla Suomessa.',
  },
  {
    question: 'Keitä referenssiasiakkaitanne on?',
    answer:
      'Olemme toteuttaneet kohteita mm. Constille, YIT:lle, Peabille, SRV:lle, Hartelalle, Skanskalle, NCC:lle, Lemminkäiselle ja Vartelle. Kohteita ovat mm. koulut, sairaalat, kauppakeskukset, Länsimetro ja Eduskunta.',
  },
]

export const referenssit = [
  {
    year: '2023',
    projects: [
      { client: 'Consti', project: 'Pääskylänrinne 8', description: 'Taloyhtiön sisäpihojen katosrakenteet vesieristeineen' },
      { client: 'Lehto', project: 'Kivistön palvelukeskittymä', description: 'IV-pedit katolla, törmäyssuojia, katoksia' },
      { client: 'Peab', project: 'Lärkan Höplaxskolan', description: 'Kantavia teräsrakenteita, IV-tasorakenteet, portaat, RST-hissikaukalot' },
      { client: 'Varte', project: 'Näyttelijäntie 24', description: 'Parvekkeiden kaiteet, julkisivupellitykset, Cembrit-levytykset' },
      { client: 'YIT', project: 'Nummelan koulu', description: 'Kaide- ja porrasrakenteet' },
      { client: 'Mijorak', project: 'Latupuiston päiväkoti', description: 'Päiväkodin kantavat teräsrunko-osiot' },
    ],
  },
  {
    year: '2022',
    projects: [
      { client: 'Consti', project: 'Lauttasaaren ala-aste', description: 'Kantavia teräsrakenteita' },
      { client: 'Consti', project: 'Länsi-Uudenmaan poliisilaitos', description: 'Julkisivupellitykset, aitarakenteet, turvapollarit, sellien teräsrakenteet' },
      { client: 'Hartela', project: 'ASO Haakon', description: 'Sisäportaiden kaiteet, ulkokaiteet, katokset' },
      { client: 'Peab', project: 'Pohjois-Haagan ala-aste', description: 'Kantavia teräsrakenteita' },
      { client: 'UMR', project: 'Heka Maunula', description: '4 kpl IV-konehuoneet + PVP-elementit, kaiderakenteita, portaita' },
      { client: 'Israelin suurlähetystö', project: 'Keskusta', description: 'Ikkunoiden kalterirakenteet' },
    ],
  },
  {
    year: '2021',
    projects: [
      { client: 'Peab', project: 'Kaivokatu muutostyöt', description: 'Kantavat teräsrakenteet välipohjarakenteisiin' },
      { client: 'Consti', project: 'Itäkeskuksen kauppakeskus', description: 'Julkisivujen mainostelineiden teräsrunkoja' },
      { client: 'Fira', project: 'Postipuisto', description: 'Kantavia teräsrakenteita, sisääntulokatokset, kaiderakenteita' },
      { client: 'SRV', project: 'Kansallisteatteri', description: 'Julkisivujen kannatuksien konsolirakenteet' },
    ],
  },
  {
    year: '2020',
    projects: [
      { client: 'SRV', project: 'Länsimetro', description: 'Porrassyöksyjen pinnakaiteet n. 500 jm' },
      { client: 'Skanska', project: 'Kaupunkiympäristötalo', description: 'HST-rakenteet, lasikaiteiden tukiteräsrakenteet, pinnakaiteet 650 jm, alumiiniverkkorakenteet' },
      { client: 'YIT', project: 'Berttina', description: 'IV-lauhdutinpedit, katokset, kuorielementtien RST-tuet' },
    ],
  },
  {
    year: '2019',
    projects: [
      { client: 'Lehto', project: 'Konepaja, Mittari, Termo', description: '3 kpl IV-konehuoneet, PVP-elementit, kantavat profiilipellit' },
      { client: 'Skanska', project: 'Kaupunkiympäristötalo', description: 'Kuilujen teräsrakenteet ja hoitotasot, terassien HST-teräsrakenteet' },
      { client: 'SRV', project: 'Ainoa 3', description: 'Rappujen pinnakaiteet 450 jm' },
    ],
  },
  {
    year: '2018',
    projects: [
      { client: 'Ruukki', project: 'Koskelontie 15', description: 'Julkisivutyöt kasetit + rangat + pellitykset 1500 m²' },
      { client: 'Consti', project: 'Tehtaankatu 27', description: 'Kierreportaat ja portaat' },
      { client: 'Yle', project: 'Mediatalo', description: 'Kantavia teräsrakenteita, huoltotasorakenteita, suojasäleikköjä' },
    ],
  },
  {
    year: '2016–2017',
    projects: [
      { client: 'Peab', project: 'Ikea Espoo', description: '3D-ristikkorakenteinen teräs-lasi-kattosilta 35 m' },
      { client: 'Lemminkäinen', project: 'Eduskunta', description: 'Hissikuilurakenteet h=54 m, verkkoseinät' },
      { client: 'Consti', project: 'Helsinki-Vantaan lentokenttä', description: '3500 m² julkisivuseinät Liberta-järjestelmällä' },
      { client: 'SRV', project: 'Helsingin yliopisto', description: 'Terassien teräs- ja puurakenteet 300 m²' },
    ],
  },
]

export const galleryImages = [
  { src: '/images/gallery-01.jpg', alt: 'Julkisivun teräsrakenteet' },
  { src: '/images/gallery-02.jpg', alt: 'Kehikkorakenne tuotannossa' },
  { src: '/images/gallery-03.jpg', alt: 'Julkisivupellitykset ja teräsrakenteet' },
  { src: '/images/gallery-04.jpg', alt: 'Katosrakenne työmaalla' },
  { src: '/images/gallery-05.jpg', alt: 'Julkisivuverhoukset kerrostalossa' },
  { src: '/images/gallery-06.jpg', alt: 'Teräsportaat sisätilassa' },
  { src: '/images/gallery-07.jpg', alt: 'Katosrakenne ja IV-laitteet' },
  { src: '/images/gallery-08.jpg', alt: 'Teräsrakenteet asennuksessa' },
  { src: '/images/gallery-09.jpg', alt: 'Kierreportaat ja kaiteet' },
  { src: '/images/gallery-10.jpg', alt: 'Teräsrunkorakenne' },
  { src: '/images/gallery-11.jpg', alt: 'IV-konehuoneen teräsrungot' },
  { src: '/images/gallery-12.jpg', alt: 'Pinnakaiteet ja RST-käsijohteet' },
]

export const certificationLogos = [
  { src: '/images/gold-aa.jpg', label: 'Gold AA — Hyvä luottokelpoisuus yli 3 vuotta' },
  { src: '/images/ce-logo.jpg', label: 'CE EN 1090' },
  { src: '/images/luotettava-kumppani.jpg', label: 'Luotettava Kumppani' },
]

export const billing = {
  ovt: '003701054828',
  operator: 'Pagero',
  operatorCode: '003723609900',
  pdfEmail: 'kirsi.laatikainen@rm-hitsaamo.fi',
  note: 'Laskut tulee lähettää ensisijaisesti verkkolaskuna. Mikäli verkkolaskutus ei ole mahdollista, laskut voi lähettää PDF-muodossa sähköpostilla.',
}

export const team = [
  { name: 'Mikko Laatikainen', title: 'Toimitusjohtaja, DI', phone: '0500 510 630', phoneLink: 'tel:0500510630', email: 'mikko.laatikainen@rm-hitsaamo.fi' },
  { name: 'Suunnittelu', title: 'Suunnittelu', phone: '050 568 6186', phoneLink: 'tel:0505686186', email: '' },
  { name: 'Kirsi Laatikainen', title: 'Talous- ja henkilöstöjohtaja', phone: '0500 457 645', phoneLink: 'tel:0500457645', email: 'kirsi.laatikainen@rm-hitsaamo.fi' },
]

export const heroImages = ['/images/hero-01.jpg']

export const localBusinessSchema = {
  name: 'RM-Hitsaamo Oy',
  url: 'https://www.rm-hitsaamo.fi',
  telephone: '+358500510630',
  email: 'mikko.laatikainen@rm-hitsaamo.fi',
  address: { street: 'Spelttitie 2', postalCode: '00680', city: 'Helsinki' },
}
