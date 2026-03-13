import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'outline'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  children: ReactNode
}

export default function Button({ variant = 'outline', children, className = '', ...props }: ButtonProps) {
  const base = [
    'inline-flex items-center gap-2',
    'px-7 py-3',
    'font-mono text-xs tracking-widest uppercase',
    'rounded-[var(--radius-sm)]',
    'transition-all duration-[var(--duration-base)]',
    'cursor-pointer select-none',
  ].join(' ')

  const variants = {
    primary: [
      'bg-[var(--color-accent)] text-white font-medium',
      'hover:bg-[var(--color-accent-light)]',
      'hover:-translate-y-0.5',
      'hover:shadow-[var(--shadow-accent)]',
    ].join(' '),
    outline: [
      'bg-transparent text-[var(--color-text)]',
      'border border-[var(--color-border)]',
      'hover:border-[var(--color-accent)]',
      'hover:text-[var(--color-accent-light)]',
      'hover:-translate-y-0.5',
    ].join(' '),
  }

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}