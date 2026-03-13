import { useState, useEffect } from 'react'
import { navLinks } from '@/data'
import { personal } from '@/config/personal'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      style={{ zIndex: 'var(--z-nav)' } as React.CSSProperties}
      className={[
        'fixed top-0 left-0 right-0',
        'flex items-center justify-between',
        'px-[var(--section-padding-x)] py-5',
        'transition-all duration-[var(--duration-slow)]',
        scrolled
          ? 'bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]'
          : 'bg-transparent',
      ].join(' ')}
    >
      {/* Logo */}
      <a
        href="#hero"
        className="font-mono text-xs text-[var(--color-accent)] tracking-widest uppercase"
      >
        {personal.name.initials}
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-mono text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] tracking-widest uppercase transition-colors duration-[var(--duration-base)]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span
          className={`block w-6 h-px bg-[var(--color-accent)] transition-all duration-[var(--duration-slow)] ${
            menuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block w-6 h-px bg-[var(--color-accent)] transition-all duration-[var(--duration-slow)] ${
            menuOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-px bg-[var(--color-accent)] transition-all duration-[var(--duration-slow)] ${
            menuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[var(--color-bg-subtle)] border-b border-[var(--color-border)] md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block px-[var(--section-padding-x)] py-4 font-mono text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] tracking-widest uppercase border-b border-[var(--color-border)] last:border-0 transition-colors duration-[var(--duration-base)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}