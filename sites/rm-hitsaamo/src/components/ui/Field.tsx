import type {
  InputHTMLAttributes,
  PropsWithChildren,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'
import { cn } from '../../utils/cn'

type FieldWrapperProps = PropsWithChildren<{
  label: string
  hint?: string
  className?: string
}>

function fieldClassName(className?: string) {
  return cn(
    'min-h-12 w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-[0.96rem] text-[var(--text-strong)] shadow-[0_14px_32px_rgba(8,19,31,0.05)] outline-none transition placeholder:text-[var(--text-soft)] focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[rgba(192,57,43,0.16)]',
    className,
  )
}

export function FieldWrapper({ label, hint, className, children }: FieldWrapperProps) {
  return (
    <label className={cn('grid gap-2 text-left text-sm font-semibold text-[var(--text-strong)]', className)}>
      <span>
        {label}
        {hint ? <span className="ml-2 font-medium text-[var(--text-soft)]">{hint}</span> : null}
      </span>
      {children}
    </label>
  )
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={fieldClassName(props.className)} {...props} />
}

export function SelectInput(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={fieldClassName(props.className)} {...props} />
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={fieldClassName(cn('min-h-32 resize-y', props.className))} {...props} />
}
