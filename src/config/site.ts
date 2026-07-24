import { personal } from './personal'

export const site = {
  title: `${personal.name.full} - ${personal.title}`,
  description:
    'Forward Deployed Engineer with 3+ years of production software engineering experience in agentic AI, RAG systems, full-stack development, and cross-platform mobile architectures.',
  url: 'https://chanchil.com',
  ogImage: '/og-image.png',
} as const
