import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import { business, services } from '../../data/siteContent'
import { openMailClient } from '../../utils/mailto'
import { Button } from '../ui/Button'
import { FieldWrapper, SelectInput, TextArea, TextInput } from '../ui/Field'

type BookingFormProps = {
  initialServiceSlug?: string | null
}

const mpTechniqueOptions = ['Candy', 'Fleikki', 'Monikerroshelmiäis', 'Raidoitukset', 'Tarroitusten toistaminen']

export function BookingForm({ initialServiceSlug }: BookingFormProps) {
  const initialService = useMemo(
    () => services.find((service) => service.slug === initialServiceSlug)?.name ?? services[0]?.name ?? '',
    [initialServiceSlug],
  )

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState(initialService)
  const [details, setDetails] = useState('')
  const [mpTechniques, setMpTechniques] = useState<string[]>([])
  const [mpColorIdea, setMpColorIdea] = useState('')
  const [mpGraphicNotes, setMpGraphicNotes] = useState('')

  const isMotorcycleRequest = service === 'Moottoripyörien maalaus'

  function toggleTechnique(value: string) {
    setMpTechniques((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value],
    )
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    openMailClient(business.email, 'Tarjouspyyntö verkkosivuilta', [
      { label: 'Nimi', value: name },
      { label: 'Puhelin', value: phone },
      { label: 'Sähköposti', value: email },
      { label: 'Palvelu', value: service },
      { label: 'Lisätiedot', value: details },
      { label: 'MP-tekniikat', value: isMotorcycleRequest ? mpTechniques : '-' },
      { label: 'MP-väri-idea', value: isMotorcycleRequest ? mpColorIdea : '-' },
      { label: 'MP-grafiikka', value: isMotorcycleRequest ? mpGraphicNotes : '-' },
    ])
  }

  return (
    <form className="grid gap-4 rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <FieldWrapper label="Nimi">
          <TextInput required value={name} onChange={(event) => setName(event.target.value)} />
        </FieldWrapper>
        <FieldWrapper label="Puhelinnumero">
          <TextInput required type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </FieldWrapper>
      </div>

      <FieldWrapper label="Sähköposti">
        <TextInput required type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
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

      <FieldWrapper label="Kohteen tiedot">
        <TextArea
          required
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          placeholder="Ajoneuvo, vaurio tai maalaustarve, aikataulu ja toiveet"
        />
      </FieldWrapper>

      {isMotorcycleRequest ? (
        <div className="rounded-2xl border border-[var(--brand-blue)]/40 bg-[var(--brand-blue-soft)] p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue-dark)]">MP-erikoismaalaus</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">
            Valitse toivotut tekniikat ja kuvaile värimaailma. Tämä osio auttaa meitä arvioimaan työn tarkemmin.
          </p>

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {mpTechniqueOptions.map((option) => (
              <label key={option} className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm text-[var(--text-strong)]">
                <input
                  type="checkbox"
                  checked={mpTechniques.includes(option)}
                  onChange={() => toggleTechnique(option)}
                  className="h-4 w-4 accent-[var(--brand-blue)]"
                />
                {option}
              </label>
            ))}
          </div>

          <div className="mt-4 grid gap-4">
            <FieldWrapper label="Toivottu väri / sävyidea">
              <TextInput value={mpColorIdea} onChange={(event) => setMpColorIdea(event.target.value)} placeholder="Esim. syvä punainen candy mustalla pohjalla" />
            </FieldWrapper>
            <FieldWrapper label="Raidat / grafiikka / logot">
              <TextArea
                value={mpGraphicNotes}
                onChange={(event) => setMpGraphicNotes(event.target.value)}
                placeholder="Kerro pin-striping, kuviot tai tarroitusten toistaminen"
              />
            </FieldWrapper>
          </div>
        </div>
      ) : null}

      <Button type="submit">Lähetä tarjouspyyntö</Button>
    </form>
  )
}
