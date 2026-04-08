type MailField = {
  label: string
  value?: string | string[]
}

function normalizeValue(value?: string | string[]) {
  if (Array.isArray(value)) {
    return value.length > 0 ? value.join(', ') : '-'
  }

  return value && value.trim().length > 0 ? value.trim() : '-'
}

export function openMailClient(email: string, subject: string, fields: MailField[]) {
  const body = fields
    .map((field) => `${field.label}: ${normalizeValue(field.value)}`)
    .join('\n')

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
