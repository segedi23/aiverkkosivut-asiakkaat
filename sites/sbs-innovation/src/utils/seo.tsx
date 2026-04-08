import { useEffect } from 'react'

type SeoProps = {
  title: string
  description: string
  structuredData?: Record<string, unknown>
}

export function Seo({ title, description, structuredData }: SeoProps) {
  useEffect(() => {
    document.title = title
    document.documentElement.lang = 'fi'

    let meta = document.querySelector('meta[name="description"]')

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', description)
  }, [description, title])

  if (!structuredData) {
    return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
