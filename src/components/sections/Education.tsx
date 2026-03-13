import { education, certifications } from '@/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { STAGGER_DELAY_MS } from '@/constants'
import SectionHeader from '@/components/ui/SectionHeader'
import type { EducationItem, Certification } from '@/types'

interface EducationCardProps {
  item: EducationItem
  index: number
}

function EducationCard({ item, index }: EducationCardProps) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal bg-[var(--color-bg-surface)] border border-[var(--color-border)] p-8 relative overflow-hidden group hover:border-[var(--color-border-hover)] hover:-translate-y-1 transition-all duration-[var(--duration-slow)]"
      style={{ transitionDelay: `${index * STAGGER_DELAY_MS}ms` }}
    >
      <div className="absolute top-0 left-0 w-[3px] h-0 bg-[var(--color-accent)] group-hover:h-full transition-all duration-[var(--duration-slow)] ease-out" />

      <p className="font-mono text-xs text-[var(--color-accent)] tracking-widest uppercase mb-3">
        {item.date}
      </p>

      <h3 className="font-serif text-2xl text-[var(--color-text)] mb-1">
        {item.degree}
      </h3>

      <p className="font-mono text-sm text-[var(--color-text-muted)]">
        {item.school}
      </p>

      <p className="font-mono text-xs mt-1 text-[var(--color-text-muted)]">
        {item.location}
      </p>
    </div>
  )
}

interface CertCardProps {
  cert: Certification
  index: number
}

function CertCard({ cert, index }: CertCardProps) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal bg-[var(--color-bg-surface)] border border-[var(--color-border)] p-8 flex items-start gap-5 group hover:border-[var(--color-border-hover)] hover:-translate-y-1 transition-all duration-[var(--duration-slow)]"
      style={{ transitionDelay: `${index * STAGGER_DELAY_MS}ms` }}
    >
      {cert.badge && (
        <span className="text-3xl mt-1 shrink-0" aria-hidden>{cert.badge}</span>
      )}
      <div>
        <h3 className="font-serif text-xl text-[var(--color-text)] mb-1">
          {cert.name}
        </h3>
        <p className="font-mono text-sm text-[var(--color-text-muted)]">
          {cert.issuer}
        </p>
        <p className="font-mono text-xs text-[var(--color-accent)] tracking-widest uppercase mt-2">
          {cert.date}
        </p>
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section
      id="education"
      className="relative z-10 bg-[var(--color-bg)] px-[var(--section-padding-x)] py-[var(--section-padding-y)]"
    >
      {/* Education */}
      <SectionHeader label="Academic Background" title="Education" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
        {education.map((item, i) => (
          <EducationCard key={item.degree} item={item} index={i} />
        ))}
      </div>

      {/* Certifications */}
      <div>
        <div className="flex items-center gap-3 font-mono text-xs text-[var(--color-accent)] tracking-widest uppercase mb-4">
          Certifications
          <span className="block w-12 h-px bg-[var(--color-accent)]" />
        </div>
        <h3
          className="font-serif text-[var(--color-text)] leading-tight mb-10"
          style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}
        >
          Credentials
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}