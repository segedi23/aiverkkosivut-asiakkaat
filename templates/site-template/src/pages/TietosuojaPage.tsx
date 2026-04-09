import { business } from '../data/siteContent'
import { Seo } from '../utils/seo'

// Tietosuojaseloste rakentuu dynaamisesti siteContent.ts:n business-datasta.
// Sivu on yleismaailmallinen pohjatyyppi pienen yrityksen verkkosivuille
// joilla ei ole analytiikkaa, ei käyttäjätilejä ja jotka tallentavat
// ainoastaan yhteydenottolomakkeen tietoja Netlify Formsiin.

function TietosuojaPage() {
  const updated = '10.4.2026'

  return (
    <>
      <Seo
        title={`Tietosuojaseloste | ${business.brandName}`}
        description={`${business.brandName} tietosuojaseloste. Kerromme mitä tietoja keräämme, miksi ja kuinka niitä käsitellään.`}
      />

      <section className="bg-[var(--bg-dark)] text-white">
        <div className="shell py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-primary)]">
            Tietosuoja
          </p>
          <h1 className="mt-3 font-[var(--font-display)] text-4xl font-bold sm:text-5xl">
            Tietosuojaseloste
          </h1>
          <p className="mt-4 text-sm text-white/70">
            Päivitetty {updated}
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell max-w-3xl space-y-10 text-[var(--text-body)]">
          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--text-strong)]">
              1. Rekisterinpitäjä
            </h2>
            <div className="mt-3 space-y-1 text-sm leading-7">
              <p><strong>{business.legalName}</strong></p>
              {business.businessId ? <p>Y-tunnus: {business.businessId}</p> : null}
              <p>{business.fullAddress}</p>
              <p>
                Puhelin: <a href={business.phoneLink} className="text-[var(--brand-primary)] hover:underline">{business.phoneDisplay}</a>
              </p>
              <p>
                Sähköposti: <a href={business.emailLink} className="text-[var(--brand-primary)] hover:underline">{business.email}</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--text-strong)]">
              2. Mitä tietoja keräämme
            </h2>
            <p className="mt-3 text-sm leading-7">
              Keräämme henkilötietoja vain silloin, kun annat ne meille itse. Tämä
              tarkoittaa käytännössä sitä, että otat yhteyttä sivuston lomakkeella
              tai lähetät meille sähköpostia.
            </p>
            <p className="mt-3 text-sm leading-7">
              Yhteydenottolomakkeen kautta keräämme seuraavat tiedot:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-7">
              <li>Nimi</li>
              <li>Puhelinnumero</li>
              <li>Sähköpostiosoite</li>
              <li>Viestin sisältö</li>
              <li>Mahdolliset ajoneuvon tai kaluston tunnistetiedot jos niitä kerrot</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--text-strong)]">
              3. Miksi käsittelemme tietoja
            </h2>
            <p className="mt-3 text-sm leading-7">
              Käsittelyn peruste on sopimuksen valmistelu ja täyttäminen
              (tietosuoja-asetuksen 6 artiklan 1 b-kohta) sekä oikeutettu etu vastata
              sinun yhteydenottoosi. Käytämme tietoja ainoastaan vastataksemme
              kyselyysi ja sopiaksemme mahdollisesta työstä.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--text-strong)]">
              4. Tietojen säilyttäminen
            </h2>
            <p className="mt-3 text-sm leading-7">
              Säilytämme yhteydenottolomakkeen tiedot enintään 24 kuukautta
              viimeisestä yhteydenpidosta. Kirjanpitolain edellyttämät tositteet
              säilytämme kuuden vuoden ajan tilikauden päättymisestä.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--text-strong)]">
              5. Kenelle tietoja luovutetaan
            </h2>
            <p className="mt-3 text-sm leading-7">
              Emme myy tai luovuta tietojasi kolmansille osapuolille markkinointia
              varten. Käytämme seuraavia teknisiä palveluntarjoajia, joille tiedot
              saattavat välittyä palvelun toimittamiseksi:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-7">
              <li>
                <strong>Netlify, Inc.</strong> (sivuston ja yhteydenottolomakkeen
                hosting; tietoja voidaan siirtää EU/ETA-alueen ulkopuolelle)
              </li>
              <li>
                <strong>Google Maps</strong> (upotettu kartta; Googlen omat evästeet
                latautuvat vasta kun kartta näkyy sivulla)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--text-strong)]">
              6. Evästeet
            </h2>
            <p className="mt-3 text-sm leading-7">
              Sivusto käyttää välttämättömiä evästeitä sivun teknisen toiminnan
              varmistamiseksi. Välttämättömät evästeet eivät tarvitse suostumustasi,
              koska ilman niitä sivu ei toimi.
            </p>
            <p className="mt-3 text-sm leading-7">
              Upotettu Google Maps -kartta lataa Googlen omia evästeitä. Ensimmäisen
              vierailun aikana kysymme suostumuksesi evästebannerilla, ja voit
              halutessasi kieltää ne. Tässä tapauksessa kartta saattaa olla
              rajoitetusti käytössä.
            </p>
            <p className="mt-3 text-sm leading-7">
              Emme käytä analytiikkaa, mainosseurantaa tai uudelleenmarkkinointia.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--text-strong)]">
              7. Oikeutesi
            </h2>
            <p className="mt-3 text-sm leading-7">
              Sinulla on oikeus:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-7">
              <li>pyytää nähtäväksi itseäsi koskevat tiedot</li>
              <li>vaatia virheellisten tietojen korjaamista</li>
              <li>pyytää tietojen poistamista silloin, kun niille ei ole enää käyttötarkoitusta</li>
              <li>rajoittaa tietojen käsittelyä</li>
              <li>tehdä valitus tietosuojavaltuutetulle (tietosuoja.fi)</li>
            </ul>
            <p className="mt-3 text-sm leading-7">
              Voit käyttää oikeuksiasi ottamalla yhteyttä puhelimitse numeroon{' '}
              <a href={business.phoneLink} className="text-[var(--brand-primary)] hover:underline">{business.phoneDisplay}</a>
              {' '}tai sähköpostilla{' '}
              <a href={business.emailLink} className="text-[var(--brand-primary)] hover:underline">{business.email}</a>.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--text-strong)]">
              8. Muutokset tähän selosteeseen
            </h2>
            <p className="mt-3 text-sm leading-7">
              Päivitämme selostetta tarvittaessa. Tämä versio on päivitetty {updated}.
            </p>
          </section>
        </div>
      </section>
    </>
  )
}

export default TietosuojaPage
