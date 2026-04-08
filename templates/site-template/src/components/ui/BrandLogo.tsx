import mwAutoLogo from '../../assets/mw-auto-logo.png'
import { cn } from '../../utils/cn'

type BrandLogoProps = {
  className?: string
  imageClassName?: string
}

export function BrandLogo({ className, imageClassName }: BrandLogoProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md bg-white px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.18)]',
        className,
      )}
    >
      <img
        src={mwAutoLogo}
        alt="MW Auto Espoo"
        className={cn('h-7 w-auto sm:h-8', imageClassName)}
      />
    </span>
  )
}
