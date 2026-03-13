import { projects } from '@/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { STAGGER_DELAY_MS } from '@/constants'
import SectionHeader from '@/components/ui/SectionHeader'
import Tag from '@/components/ui/Tag'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal bg-[var(--color-bg-surface)] border border-[var(--color-border)] p-9 relative overflow-hidden group hover:border-[var(--color-border-hover)] hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] transition-all duration-[var(--duration-slow)]"
      style={{ transitionDelay: `${index * STAGGER_DELAY_MS}ms` }}
    >
      {/* Bottom accent line — amber */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[var(--duration-slow)]"
        style={{ background: `linear-gradient(90deg, var(--color-accent), transparent)` }}
      />

      {/* Project number — amber */}
      <p className="font-mono text-xs tracking-widest mb-5" style={{ color: 'var(--color-accent)' }}>
        {project.number}{project.featured ? ' — Featured' : ''}
      </p>

      <h3 className="font-serif text-2xl text-[var(--color-text)] mb-3 leading-tight">
        {project.title}
      </h3>

      <p className="text-base text-[var(--color-text-muted)] leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-7">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className="flex gap-5">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs tracking-widest uppercase flex items-center gap-1.5 hover:gap-3 transition-all duration-[var(--duration-base)]"
            style={{ color: 'var(--color-accent)' }}
          >
            {link.label} →
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 bg-[var(--color-bg-subtle)] px-[var(--section-padding-x)] py-[var(--section-padding-y)]"
    >
      <SectionHeader label="What I've Built" title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}