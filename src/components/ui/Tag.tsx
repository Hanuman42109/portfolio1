import type { ReactNode } from 'react'

interface TagProps {
  children: ReactNode
  className?: string
}

export default function Tag({ children, className = '' }: TagProps) {
  return (
    <span
      className={`inline-block font-mono text-xs text-[var(--color-text-muted)] bg-white/[0.04] border border-[var(--color-border)] px-2.5 py-1 rounded-[var(--radius-sm)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors duration-[var(--duration-base)] ${className}`}
    >
      {children}
    </span>
  )
}