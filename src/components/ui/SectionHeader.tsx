interface SectionHeaderProps {
  label: string
  title: string
  centered?: boolean
}

export default function SectionHeader({ label, title, centered = false }: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <div
        className={[
          'flex items-center gap-3',
          'font-mono text-xs text-[var(--color-accent)]',
          'tracking-widest uppercase',
          'mb-4',
          centered ? 'justify-center' : '',
        ].join(' ')}
      >
        {label}
        {!centered && (
          <span className="block w-12 h-px bg-[var(--color-accent)]" />
        )}
      </div>
      <h2
        className="font-serif text-[var(--color-text)] leading-tight mb-14"
        style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  )
}