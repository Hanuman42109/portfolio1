import type {
  NavLink,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  Certification,
  Project,
  Stat,
} from '@/types'

export const navLinks: NavLink[] = [
  { label: 'Skills',     href: '#skills'     },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Education',  href: '#education'  },
  { label: 'Contact',    href: '#contact'    },
]

export const stats: Stat[] = [
  { num: '3+',  label: 'Years Prod. Exp' },
  { num: '10+', label: 'Technologies'    },
  { num: '2',   label: 'Degrees'         },
  { num: '1+',   label: 'Certifications'  },
]

export const skillCategories: SkillCategory[] = [
  {
    icon: '📱',
    title: 'Mobile & Frontend',
    tags: ['React Native', 'Expo', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'NativeWind'],
  },
  {
    icon: '⚙️',
    title: 'Backend & APIs',
    tags: ['Node.js', 'Express', 'Python', 'FastAPI', 'Flask', 'REST APIs', 'WebSockets'],
  },
  {
    icon: '☁️',
    title: 'Cloud & Databases',
    tags: ['AWS EC2/S3/Lambda', 'PostgreSQL', 'MongoDB', 'Firebase Firestore', 'MySQL'],
  },
  {
    icon: '🛠️',
    title: 'Tools & Platforms',
    tags: ['Git / GitHub', 'Docker', 'Linux', 'Figma', 'Redux Toolkit', 'Zustand'],
  },
]

export const experience: ExperienceItem[] = [
  {
    date: 'Oct 2022 - May 2025',
    role: 'Full Stack Developer',
    company: 'Morningstar',
    bullets: [
      'Built production-grade web and mobile applications using React, React Native, TypeScript, and Node.js, serving internal and external users.',
      'Designed reusable component libraries and role-based access control systems, improving UI consistency and security across multiple products.',
      'Worked with WebSockets and REST APIs for real-time data integration and socket-based communication between client and server.',
      'Collaborated cross-functionally with designers, backend engineers, and QA in Agile sprints, contributing to architecture planning and production deployments.',
      'Optimized frontend rendering and state management, reducing load times and improving responsiveness across key user flows.',
    ],
  },
]

export const education: EducationItem[] = [
  {
    degree: 'M.S. in Computer Science',
    school: 'University of the Cumberlands',
    location: 'Williamsburg, KY',
    date: 'Expected Dec 2026',
  },
  {
    degree: 'B.S. in Computer Science',
    school: 'University of Massachusetts Lowell',
    location: 'Lowell, MA',
    date: 'Aug 2022',
  },
]

export const certifications: Certification[] = [
  {
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    date: 'Feb 2026',
    badge: '☁️',
  },
]

export const projects: Project[] = [
  {
    number: '01',
    title: 'Vinukonda Kirana',
    featured: true,
    description:
      'Production-ready cross-platform grocery delivery and eCommerce app. Supports three distinct user roles (customer, admin, delivery personnel), each with dedicated interfaces, real-time order tracking via Firebase Firestore, and live revenue analytics.',
    tech: ['React Native', 'TypeScript', 'Expo', 'Firebase', 'Razorpay', 'Node.js', 'i18next', 'Zustand'],
    links: [{ label: 'GitHub', href: 'https://github.com/Hanuman42109' }],
  },
  {
    number: '02',
    title: 'More on GitHub',
    description:
      'Additional full-stack projects, REST API services, and backend tooling. Built with React, Node.js, Python, and AWS. Check GitHub for the full list.',
    tech: ['React', 'Node.js', 'Python', 'AWS', 'PostgreSQL'],
    links: [{ label: 'View All', href: 'https://github.com/Hanuman42109' }],
  },
]