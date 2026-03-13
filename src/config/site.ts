import { personal } from './personal'

export const site = {
  title: `${personal.name.full} — ${personal.title}`,
  description:
    'Full-Stack Software Engineer with 3 years of production experience in React Native, TypeScript, Node.js, and AWS.',
  url: 'https://chanchil.com',
  ogImage: '/og-image.png',
} as const