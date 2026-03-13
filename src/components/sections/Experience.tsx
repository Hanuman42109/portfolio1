import { experience } from '@/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { STAGGER_DELAY_MS } from '@/constants'
import SectionHeader from '@/components/ui/SectionHeader'
import type { ExperienceItem } from '@/types'

interface TimelineItemProps {
  item: ExperienceItem
  index: number
}

function TimelineItem({ item, index }: TimelineItemProps) {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal-left relative pl-8 mb-14 last:mb-0"
      style={{ transitionDelay: `${index * STAGGER_DELAY_MS}ms` }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1.5 w-2 h-2 bg-[var(--color-accent)] rounded-full"
        style={{ boxShadow: 'var(--shadow-glow)' }}
      />

      <p className="font-mono text-xs text-[var(--color-accent)] tracking-widest mb-2 uppercase">
        {item.date}
      </p>

      <h3 className="font-serif text-2xl text-[var(--color-text)] mb-1">
        {item.role}
      </h3>

      <p className="font-mono text-sm text-[var(--color-text-muted)] mb-4">
        {item.company}
      </p>

      {item.bullets && (
        <ul className="flex flex-col gap-2">
          {item.bullets.map((bullet, i) => (
            <li
              key={i}
              className="text-base text-[var(--color-text-muted)] leading-relaxed pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-[var(--color-accent)]"
            >
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 bg-[var(--color-bg)] px-[var(--section-padding-x)] py-[var(--section-padding-y)]"
    >
      <SectionHeader label="Where I've Worked" title="Experience" />

      <div className="max-w-3xl relative pl-8">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-accent)] to-transparent" />

        {experience.map((item, i) => (
          <TimelineItem key={`${item.role}-${item.company}`} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}