import type { FormEvent } from 'react'
import { useState } from 'react'
import { business, services } from '../../data/siteContent'
import { openMailClient } from '../../utils/mailto'
import { Button } from '../ui/Button'
import { FieldWrapper, SelectInput, TextInput } from '../ui/Field'

export function QuickBookingForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState(services[0]?.name ?? '')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    openMailClient(business.email, 'Yhteydenotto verkkosivuilta', [
      { label: 'Nimi', value: name },
      { label: 'Puhelin', value: phone },
      { label: 'Palvelu', value: service },
    ])
  }

  return (
    <form className="grid gap-4 rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm" onSubmit={handleSubmit}>
      <FieldWrapper label="Nimi">
        <TextInput required value={name} onChange={(event) => setName(event.target.value)} />
      </FieldWrapper>
      <FieldWrapper label="Puhelinnumero">
        <TextInput required type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
      </FieldWrapper>
      <FieldWrapper label="Palvelu">
        <SelectInput value={service} onChange={(event) => setService(event.target.value)}>
          {services.map((item) => (
            <option key={item.slug} value={item.name}>
              {item.name}
            </option>
          ))}
        </SelectInput>
      </FieldWrapper>
      <Button type="submit">Lähetä</Button>
    </form>
  )
}
