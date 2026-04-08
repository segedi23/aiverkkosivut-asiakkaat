import { cn } from '../../utils/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'md' | 'lg'

export function buttonStyles(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  fullWidth = false,
) {
  return cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
    size === 'lg' ? 'min-h-[3.25rem] px-6 text-[0.98rem]' : 'min-h-11 px-5 text-[0.94rem]',
    fullWidth && 'w-full',
    variant === 'primary' &&
      'bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue-dark)]',
    variant === 'secondary' &&
      'bg-[var(--bg-dark)] text-white hover:bg-black',
    variant === 'ghost' &&
      'border border-[var(--line)] bg-white text-[var(--text-strong)] hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]',
  )
}
