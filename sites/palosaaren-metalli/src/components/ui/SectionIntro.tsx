import { cn } from '../../utils/cn'

type SectionIntroProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
  dark?: boolean
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
}: SectionIntroProps) {
  return (
    <div className={cn('grid gap-4', align === 'center' && 'mx-auto max-w-3xl text-center')}>
      <span
        className={cn(
          'eyebrow',
          dark ? 'bg-white/10 text-white/78 ring-white/10' : 'bg-[var(--brand-blue-soft)] text-[var(--brand-blue)] ring-[var(--line)]',
          align === 'center' && 'mx-auto',
        )}
      >
        {eyebrow}
      </span>
      <h2 className={cn('font-heading text-4xl leading-none sm:text-5xl', dark ? 'text-white' : 'text-[var(--text-strong)]')}>
        {title}
      </h2>
      <p className={cn('max-w-3xl text-lg leading-8', dark ? 'text-white/70' : 'text-[var(--text-soft)]', align === 'center' && 'mx-auto')}>
        {description}
      </p>
    </div>
  )
}
