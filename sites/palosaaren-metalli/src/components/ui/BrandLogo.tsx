import { business } from '../../data/siteContent'
import { cn } from '../../utils/cn'

type BrandLogoProps = {
  className?: string
  imageClassName?: string
}

export function BrandLogo({ className, imageClassName }: BrandLogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <img src="/images/logo.jpg" alt={`${business.legalName} logo`} className="h-10 w-auto rounded-md" />
      <span className={cn('font-heading text-xl font-bold tracking-wide text-[var(--text-strong)]', imageClassName)}>
        {business.brandName}
      </span>
    </span>
  )
}
