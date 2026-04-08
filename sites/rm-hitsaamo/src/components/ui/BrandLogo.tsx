import { cn } from '../../utils/cn'

type BrandLogoProps = {
  className?: string
  imageClassName?: string
}

export function BrandLogo({ className, imageClassName }: BrandLogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <span className="h-8 w-8 rounded-sm bg-[var(--brand-blue)] shadow-[0_8px_20px_rgba(192,57,43,0.38)]" aria-hidden="true" />
      <span className={cn('font-heading text-2xl leading-none tracking-[0.06em] text-white uppercase', imageClassName)}>
        RM-HITSAAMO
      </span>
    </span>
  )
}
