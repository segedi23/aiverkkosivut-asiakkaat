import { cn } from '../../utils/cn'

type BrandLogoProps = {
  className?: string
  imageClassName?: string
}

export function BrandLogo({ className, imageClassName }: BrandLogoProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-white/30 bg-white px-3 py-1.5 text-[var(--brand-blue)] shadow-[0_8px_24px_rgba(0,0,0,0.16)]',
        className,
      )}
    >
      <span className={cn('font-heading text-lg font-bold leading-none', imageClassName)}>SBS Innovation Oy</span>
    </span>
  )
}
