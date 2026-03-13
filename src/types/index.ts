export interface NavLink {
  label: string
  href: string
}

export interface SkillCategory {
  icon: string
  title: string
  tags: string[]
}

export interface ExperienceItem {
  date: string
  role: string
  company: string
  bullets?: string[]
}

export interface EducationItem {
  degree: string
  school: string
  location: string
  date: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
  badge?: string
}

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  number: string
  title: string
  description: string
  tech: string[]
  links: ProjectLink[]
  featured?: boolean
}

export interface Stat {
  num: string
  label: string
}