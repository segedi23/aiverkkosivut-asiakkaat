import { Check, Mail, PhoneCall } from 'lucide-react'
import { type Dispatch, type FormEvent, type SetStateAction, useMemo, useState } from 'react'
import {
  bookingServiceOptions,
  business,
  preferredContactOptions,
  services,
  weekdayOptions,
} from '../../data/siteContent'
import { cn } from '../../utils/cn'
import { openMailClient } from '../../utils/mailto'
import { Button } from '../ui/Button'
import { FieldWrapper, SelectInput, TextArea, TextInput } from '../ui/Field'

type BookingFormProps = {
  initialServiceSlug?: string | null
}

function toggleValue(
  value: string,
  setCurrent: Dispatch<SetStateAction<string[]>>,
) {
  setCurrent((items) => (items.includes(value) ? items.filter((item) => item !== value) : [...items, value]))
}

export function BookingForm({ initialServiceSlug }: BookingFormProps) {
  const initialServiceName = useMemo(() => {
    if (!initialServiceSlug) {
      return ''
    }

    return services.find((service) => service.slug === initialServiceSlug)?.name ?? ''
  }, [initialServiceSlug])

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [carModel, setCarModel] = useState('')
  const [registrationNumber, setRegistrationNumber] = useState('')
  const [odometer, setOdometer] = useState('')
  const [preferredDate, setPreferredDate] = useState('')
  const [preferredTime, setPreferredTime] = useState('Aamupäivä')
  const [details, setDetails] = useState('')
  const [selectedServices, setSelectedServices] = useState<string[]>(() =>
    initialServiceName ? [initialServiceName] : [],
  )
  const [preferredDays, setPreferredDays] = useState<string[]>([])
  const [contactMethod, setContactMethod] = useState(preferredContactOptions[0])
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    openMailClient(business.email, 'Ajanvarauspyyntö verkkosivuilta', [
      { label: 'Nimi', value: name },
      { label: 'Puhelin', value: phone },
      { label: 'Sähköposti', value: email },
      { label: 'Automerkki, malli ja vuosi', value: carModel },
      { label: 'Rekisterinumero', value: registrationNumber },
      { label: 'Kilometrilukema', value: odometer },
      { label: 'Palvelu', value: selectedServices },
      { label: 'Toivotut viikonpäivät', value: preferredDays },
      { label: 'Toivottu päivämäärä', value: preferredDate },
      { label: 'Toivottu ajankohta', value: preferredTime },
      { label: 'Yhteydenottotapa', value: contactMethod },
      { label: 'Lisätiedot', value: details },
    ])

    setSubmitted(true)
  }

  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      <div className="grid gap-6 rounded-[2rem] border border-[var(--line)] bg-white p-6 shadow-[0_20px_60px_rgba(8,19,31,0.08)] sm:p-8">
        <div className="grid gap-4">
          <FieldWrapper label="Nimi">
            <TextInput required placeholder="Etu- ja sukunimi" value={name} onChange={(event) => setName(event.target.value)} />
          </FieldWrapper>
          <div className="grid gap-4 md:grid-cols-2">
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
            <FieldWrapper label="Sähköposti">
              <TextInput
                required
                type="email"
                placeholder={business.email}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </FieldWrapper>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <FieldWrapper label="Automerkki, malli ja vuosi">
              <TextInput
                required
                placeholder="Esim. Volvo V60 2020"
                value={carModel}
                onChange={(event) => setCarModel(event.target.value)}
              />
            </FieldWrapper>
            <FieldWrapper label="Rekisterinumero">
              <TextInput
                placeholder="ABC-123"
                value={registrationNumber}
                onChange={(event) => setRegistrationNumber(event.target.value)}
              />
            </FieldWrapper>
          </div>
          <div className="grid gap-4 md:grid-cols-[0.7fr_1.3fr]">
            <FieldWrapper label="Kilometrilukema">
              <TextInput
                inputMode="numeric"
                placeholder="Esim. 145000"
                value={odometer}
                onChange={(event) => setOdometer(event.target.value)}
              />
            </FieldWrapper>
            <FieldWrapper label="Palvelu">
              <SelectInput
                value=""
                onChange={(event) => {
                  if (event.target.value) {
                    toggleValue(event.target.value, setSelectedServices)
                  }
                }}
              >
                <option value="">Lisää palvelu valinnaksi</option>
                {bookingServiceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </SelectInput>
            </FieldWrapper>
          </div>
          <div className="flex flex-wrap gap-2">
            {bookingServiceOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={cn(
                  'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition',
                  selectedServices.includes(option)
                    ? 'border-[var(--brand-blue)] bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]'
                    : 'border-[var(--line)] bg-[var(--surface-soft)] text-[var(--text-soft)] hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]',
                )}
                onClick={() => toggleValue(option, setSelectedServices)}
              >
                {selectedServices.includes(option) ? <Check className="h-4 w-4" /> : null}
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <FieldWrapper label="Toivottu päivämäärä">
              <TextInput type="date" value={preferredDate} onChange={(event) => setPreferredDate(event.target.value)} />
            </FieldWrapper>
            <FieldWrapper label="Toivottu ajankohta">
              <SelectInput value={preferredTime} onChange={(event) => setPreferredTime(event.target.value)}>
                <option>Aamupäivä</option>
                <option>Iltapäivä</option>
                <option>Mahdollisimman pian</option>
                <option>Joustava</option>
              </SelectInput>
            </FieldWrapper>
          </div>

          <div className="grid gap-2">
            <span className="text-sm font-semibold text-[var(--text-strong)]">Sopivimmat viikonpäivät</span>
            <div className="flex flex-wrap gap-2">
              {weekdayOptions.map((day) => (
                <button
                  key={day}
                  type="button"
                  className={cn(
                    'rounded-full border px-4 py-2 text-sm font-semibold transition',
                    preferredDays.includes(day)
                      ? 'border-[var(--brand-blue)] bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]'
                      : 'border-[var(--line)] bg-[var(--surface-soft)] text-[var(--text-soft)] hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]',
                  )}
                  onClick={() => toggleValue(day, setPreferredDays)}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-2">
            <span className="text-sm font-semibold text-[var(--text-strong)]">Toivottu yhteydenottotapa</span>
            <div className="flex flex-wrap gap-2">
              {preferredContactOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition',
                    contactMethod === option
                      ? 'border-[var(--brand-blue)] bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]'
                      : 'border-[var(--line)] bg-[var(--surface-soft)] text-[var(--text-soft)] hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]',
                  )}
                  onClick={() => setContactMethod(option)}
                >
                  {option === 'Puhelimella' ? <PhoneCall className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        <FieldWrapper label="Lisätiedot" hint="Kuvaa oire tai työn tarve">
          <TextArea
            placeholder="Esim. auto puoltaa oikealle, ilmastointi ei viilennä tai määräaikaishuolto lähestyy."
            value={details}
            onChange={(event) => setDetails(event.target.value)}
          />
        </FieldWrapper>
      </div>

      <div className="flex flex-col gap-4 rounded-[2rem] border border-[var(--line)] bg-[var(--surface-soft)] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="max-w-2xl text-sm leading-7 text-[var(--text-soft)]">
          Lähetys avaa valmiin viestin yrityksen oikeaan sähköpostiosoitteeseen. Jos sähköpostiohjelma ei avaudu,
          voit aina soittaa numeroon {business.phoneDisplay}.
        </p>
        <Button type="submit" size="lg">
          Lähetä ajanvarauspyyntö
        </Button>
      </div>

      {submitted ? (
        <div className="rounded-[1.5rem] border border-[rgba(10,92,184,0.16)] bg-[var(--brand-blue-soft)] px-5 py-4 text-sm font-medium text-[var(--brand-blue)]">
          Viesti on valmis sähköpostiohjelmaasi varten. Tarkista tiedot ja lähetä se huoltoon.
        </div>
      ) : null}
    </form>
  )
}
