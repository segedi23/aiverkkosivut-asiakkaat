import { ArrowRight } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { bookingServiceOptions, business } from '../../data/siteContent'
import { openMailClient } from '../../utils/mailto'
import { Button } from '../ui/Button'
import { FieldWrapper, SelectInput, TextArea, TextInput } from '../ui/Field'

export function QuickBookingForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState(bookingServiceOptions[0])
  const [registrationNumber, setRegistrationNumber] = useState('')
  const [details, setDetails] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    openMailClient(business.email, 'Ajanvarauspyyntö verkkosivuilta', [
      { label: 'Nimi', value: name },
      { label: 'Puhelin', value: phone },
      { label: 'Palvelu', value: service },
      { label: 'Rekisterinumero', value: registrationNumber },
      { label: 'Lisätiedot', value: details },
    ])

    setSubmitted(true)
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[rgba(10,24,38,0.9)] p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur">
      <div className="mb-5 grid gap-2">
        <span className="eyebrow w-fit bg-white/10 text-white/75 ring-white/10">Nopea yhteydenotto</span>
        <h3 className="font-heading text-3xl leading-none">Varaa aika tai pyydä arvio.</h3>
        <p className="text-sm leading-7 text-white/68">
          Kerro tärkeimmät tiedot heti. Lomake avaa valmiin viestin osoitteeseen {business.email}.
        </p>
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <FieldWrapper label="Nimi">
          <TextInput required placeholder="Etu- ja sukunimi" value={name} onChange={(event) => setName(event.target.value)} />
        </FieldWrapper>
        <FieldWrapper label="Puhelinnumero">
          <TextInput
            required
            type="tel"
            inputMode="tel"
            placeholder="040 123 4567"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </FieldWrapper>
        <FieldWrapper label="Palvelu">
          <SelectInput value={service} onChange={(event) => setService(event.target.value)}>
            {bookingServiceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </SelectInput>
        </FieldWrapper>
        <FieldWrapper label="Rekisterinumero">
          <TextInput placeholder="ABC-123" value={registrationNumber} onChange={(event) => setRegistrationNumber(event.target.value)} />
        </FieldWrapper>
        <FieldWrapper label="Lisätiedot" hint="Valinnainen">
          <TextArea
            placeholder="Kuvaa lyhyesti huolto- tai korjaustarve."
            value={details}
            onChange={(event) => setDetails(event.target.value)}
          />
        </FieldWrapper>
        <Button className="mt-2" type="submit" fullWidth>
          Lähetä ajanvarauspyyntö
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>

      <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-white/70">
        {submitted
          ? 'Sähköpostiohjelman pitäisi avautua valmiilla viestillä. Jos ei avaudu, soita meille suoraan.'
          : 'Vaihtoehto nopeasti: soita tai lähetä sähköpostia, jos haluat varmistaa ajan saman tien.'}
      </div>
    </div>
  )
}
