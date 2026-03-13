import { skillCategories } from '@/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { STAGGER_DELAY_MS } from '@/constants'
import SectionHeader from '@/components/ui/SectionHeader'
import Tag from '@/components/ui/Tag'
import type { SkillCategory } from '@/types'

interface SkillCardProps {
  category: SkillCategory
  index: number
}

function SkillCard({ category, index }: SkillCardProps) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal bg-[var(--color-bg-surface)] border border-[var(--color-border)] p-8 relative overflow-hidden group hover:border-[var(--color-border-hover)] hover:-translate-y-1 transition-all duration-[var(--duration-slow)]"
      style={{ transitionDelay: `${index * STAGGER_DELAY_MS}ms` }}
    >
      {/* Left accent bar */}
      <div className="absolute top-0 left-0 w-[3px] h-0 bg-[var(--color-accent)] group-hover:h-full transition-all duration-[var(--duration-slow)] ease-out" />

      <div className="text-2xl mb-4" aria-hidden>{category.icon}</div>

      <p className="font-mono text-xs text-[var(--color-accent)] tracking-wider uppercase mb-3">
        {category.title}
      </p>

      <div className="flex flex-wrap gap-2">
        {category.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 bg-[var(--color-bg-subtle)] px-[var(--section-padding-x)] py-[var(--section-padding-y)]"
    >
      <SectionHeader label="What I Work With" title="Technical Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px">
        {skillCategories.map((cat, i) => (
          <SkillCard key={cat.title} category={cat} index={i} />
        ))}
      </div>
    </section>
  )
}