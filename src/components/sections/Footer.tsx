import { personal } from '@/config/personal'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--color-border)] px-[var(--section-padding-x)] py-7 flex flex-col md:flex-row justify-between items-center gap-2">
      <span className="font-mono text-xs text-[var(--color-text-muted)] tracking-wide">
        {personal.name.full}
      </span>
      <span className="font-mono text-xs text-[var(--color-text-muted)] tracking-wide">
        Built with React + TypeScript + Vite
      </span>
      <span className="font-mono text-xs text-[var(--color-text-muted)] tracking-wide">
        &copy; 2026 {personal.name.full}
      </span>
    </footer>
  )
}