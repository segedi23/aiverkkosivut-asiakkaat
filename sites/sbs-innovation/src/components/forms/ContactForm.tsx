import { ArrowRight } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { business } from '../../data/siteContent'
import { openMailClient } from '../../utils/mailto'
import { Button } from '../ui/Button'
import { FieldWrapper, TextArea, TextInput } from '../ui/Field'

type ContactFormProps = {
  compact?: boolean
}

export function ContactForm({ compact = false }: ContactFormProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    openMailClient(business.email, 'Yhteydenotto verkkosivuilta', [
      { label: 'Nimi', value: name },
      { label: 'Puhelin', value: phone },
      { label: 'Sähköposti', value: email },
      { label: 'Viesti', value: message },
    ])

    setSubmitted(true)
  }

  return (
    <div className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-5 grid gap-2">
        <span className="eyebrow w-fit bg-[var(--brand-blue-soft)] text-[var(--brand-blue)] ring-[var(--line)]">
          Yhteydenottolomake
        </span>
        <h3 className="font-[var(--font-display)] text-3xl leading-none text-[var(--text-strong)]">
          Lähetä viesti maalaamolle
        </h3>
        <p className="max-w-xl text-sm leading-7 text-[var(--text-soft)]">
          Kerro kohteesta ja toiveista. Lomake avaa sähköpostiviestin valmiilla tiedoilla.
        </p>
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className={compact ? 'grid gap-4' : 'grid gap-4 md:grid-cols-2'}>
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
        </div>

        <FieldWrapper label="Sähköposti">
          <TextInput
            required
            type="email"
            placeholder={business.email}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FieldWrapper>

        <FieldWrapper label="Viesti">
          <TextArea
            required
            placeholder="Esimerkiksi kohde, vaurio, toivottu sävy tai erikoismaalausidea"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </FieldWrapper>

        <Button className="mt-2" type="submit" fullWidth>
          Lähetä viesti
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>

      {submitted ? (
        <p className="mt-4 rounded-2xl border border-[var(--line)] bg-[var(--brand-blue-soft)] px-4 py-3 text-sm font-medium text-[var(--brand-blue-dark)]">
          Sähköpostiohjelman pitäisi avautua valmiilla viestillä. Jos ei, käytä puhelinta tai sähköpostiosoitetta suoraan.
        </p>
      ) : null}
    </div>
  )
}
