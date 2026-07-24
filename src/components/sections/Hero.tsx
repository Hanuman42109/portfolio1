import { personal } from '@/config/personal'
import { stats } from '@/data'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-[var(--section-padding-x)] overflow-hidden"
    >
      {/* Background watermark */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 font-serif pointer-events-none select-none leading-none"
        style={{ fontSize: 'clamp(120px, 18vw, 260px)', color: 'rgba(212,114,10,0.06)', whiteSpace: 'nowrap' }}
      >
        Engineer
      </span>

      <div className="relative z-10 max-w-[var(--content-width)]">
        {/* Label */}
        <div className="flex items-center gap-3 font-mono text-xs text-[var(--color-accent)] tracking-widest uppercase mb-6 opacity-0 animate-fade-up delay-1">
          <span className="block w-8 h-px bg-[var(--color-accent)]" />
          {personal.title}
        </div>

        {/* Name */}
        <h1
          className="font-serif leading-none mb-7 opacity-0 animate-fade-up delay-2"
          style={{ fontSize: 'clamp(52px, 7vw, 96px)' }}
        >
          {personal.name.first}
          <br />
          <em className="italic" style={{ color: 'var(--color-accent)' }}>
            {personal.name.last}
          </em>
        </h1>

        {/* Tagline */}
        <p className="text-[var(--color-text-muted)] text-lg leading-relaxed max-w-2xl mb-12 opacity-0 animate-fade-up delay-3">
          {personal.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 opacity-0 animate-fade-up delay-4">
          <Button variant="primary" href="#projects">
            View Projects <span aria-hidden>-&gt;</span>
          </Button>
          <Button variant="outline" href={personal.contact.github} target="_blank" rel="noreferrer">
            GitHub
          </Button>
        </div>
      </div>

      {/* Stats: numbers in amber, labels in muted */}
      <div className="absolute bottom-16 right-[var(--section-padding-x)] hidden lg:flex items-end gap-9 opacity-0 animate-fade-up delay-5">
        {stats.map((stat) => (
          <div key={stat.label} className="min-w-[112px] text-right">
            <div className="font-serif text-4xl leading-none" style={{ color: 'var(--color-accent)' }}>
              {stat.num}
            </div>
            <div className="font-mono text-xs text-[var(--color-text-muted)] tracking-widest uppercase mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
