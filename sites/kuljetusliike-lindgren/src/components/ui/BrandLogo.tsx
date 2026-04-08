import { cn } from '../../utils/cn'

type BrandLogoProps = {
  className?: string
  imageClassName?: string
}

export function BrandLogo({ className, imageClassName }: BrandLogoProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 rounded-md bg-white px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.18)]',
        className,
      )}
    >
      <span className={cn('inline-flex h-7 w-7 items-center justify-center rounded bg-[var(--brand-blue)] text-xs font-bold text-white', imageClassName)}>
        KL
      </span>
      <span className="text-sm font-bold uppercase tracking-wide text-[var(--bg-dark)]">Lindgren</span>
    </span>
  )
}
