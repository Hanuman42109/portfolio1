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
]

export const stats: Stat[] = [
  { num: '3+',   label: 'Years Prod. Exp' },
  { num: '500+', label: 'Docs in RAG'      },
  { num: '2',    label: 'Degrees'          },
  { num: '2',    label: 'Certifications'   },
]

export const skillCategories: SkillCategory[] = [
  {
    icon: 'AI',
    title: 'AI / LLM',
    tags: ['RAG Pipelines', 'Prompt Engineering', 'Multi-step Planning', 'Tool Use', 'Memory Systems', 'Agent Evaluation', 'LangChain', 'LlamaIndex', 'OpenAI API', 'Anthropic API', 'pgvector', 'Vector Databases'],
  },
  {
    icon: '</>',
    title: 'Languages & Backend',
    tags: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'FastAPI', 'Flask', 'Node.js', 'Express', 'REST API Design', 'WebSockets', 'RBAC', 'SQL'],
  },
  {
    icon: 'DB',
    title: 'Data & Integration',
    tags: ['Large-Scale Data Preprocessing', 'Data Modelling & Governance', 'PostgreSQL', 'MongoDB', 'Firebase Firestore', 'MySQL'],
  },
  {
    icon: 'Ops',
    title: 'Cloud & DevOps',
    tags: ['AWS EC2/S3/Lambda', 'Docker', 'CI/CD Pipelines', 'GitHub Actions', 'Vercel', 'Railway', 'Git/GitHub', 'Azure', 'Production Deployments & Observability'],
  },
  {
    icon: 'UI',
    title: 'Frontend & Mobile',
    tags: ['React', 'React Native', 'Expo', 'Tailwind CSS', 'Redux Toolkit'],
  },
]

export const experience: ExperienceItem[] = [
  {
    date: 'Apr 2026 - Jul 2026',
    role: 'Forward Deployed Engineer Intern | Agentic Mobile Systems',
    company: 'Next Play',
    bullets: [
      'Shipped 0-1 production-ready architectures by gathering ambiguous requirements directly from non-engineering stakeholders, rapidly prototyping features, and driving iterations based on customer feedback.',
      'Accelerated real-time delivery of context-aware alerts across iOS and Android by architecting and deploying an end-to-end cross-platform push notification agent using APNs and FCM routing.',
      'Reduced notification latency and improved user context retention by implementing multi-step orchestration with quiet-hours enforcement and LLM-style memory systems to maintain session states.',
      'Streamlined feature-to-production velocity by delivering the Coach IQ module, including XP tracking, marketplace schema, video fallback, and mobile UI, using React Native, TypeScript, and Node.js.',
      'Ensured 99.9% deployment reliability by building and maintaining automated CI/CD pipelines via GitHub Actions for mobile builds and backend services.',
    ],
  },
  {
    date: 'Oct 2022 - May 2025',
    role: 'Full-Stack Software Engineer',
    company: 'Morningstar',
    bullets: [
      'Cut average lookup times by 40% for internal stakeholders by designing and deploying a production LLM-powered RAG agent over 500+ internal documents with pgvector and FastAPI.',
      'Boosted RAG output quality and reduced hallucination rates by engineering a custom evaluation framework to benchmark prompt instructions, model reasoning, and factual grounding.',
      'Enabled multi-step autonomous actions with contextual memory by integrating tool-use workflows connecting core models to internal APIs, knowledge bases, and databases using LangChain and LlamaIndex.',
      'Streamlined internal ML model deployments by designing distributed system architectures on AWS EC2, S3, and Lambda with robust automated CI/CD pipelines.',
      'Drove product adoption for thousands of active users by shipping high-performance full-stack features using React, TypeScript, and Python with secure role-based access control.',
      'Accelerated team delivery speed by mentoring junior engineers, running technical design reviews, and authoring comprehensive system architecture documentation.',
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
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Feb 2026',
    badge: 'AWS',
  },
  {
    name: 'Salesforce Certified Platform Administrator',
    issuer: 'Salesforce',
    date: 'Sept 2022',
    badge: 'SF',
  },
]

export const projects: Project[] = [
  {
    number: '01',
    title: 'Ask My Resume: Agentic RAG System',
    featured: true,
    date: 'Mar 2026 - Apr 2026',
    context: 'Personal Project',
    description:
      'Production-grade 0-1 agentic RAG system with semantic chunking, OpenAI embeddings, PostgreSQL + pgvector ANN search, top-k retrieval, prompt-engineered context injection, automated evaluation tests, and a real-time streaming interface.',
    tech: ['OpenAI Embeddings', 'PostgreSQL', 'pgvector', 'Claude', 'GPT-4o', 'FastAPI', 'Vercel AI SDK', 'TensorFlow', 'PyTorch', 'GitHub Actions'],
    links: [{ label: 'GitHub', href: 'https://github.com/Hanuman42109/ask-resume' }],
  },
  {
    number: '02',
    title: 'Vinukonda Kirana: Ecommerce Mobile App',
    date: 'Dec 2025 - Apr 2026',
    context: 'Personal Project',
    description:
      '0-1 React Native + Expo mobile application shipped to production with custom client, admin, and delivery roles, strict RBAC, Firebase catalog ingestion, Razorpay payments, webhook confirmation, failure recovery, and multilingual localization.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Firebase Admin SDK', 'Firestore', 'Razorpay', 'i18next', 'Jest', 'React Native Testing Library'],
    links: [{ label: 'GitHub', href: 'https://github.com/Hanuman42109' }],
  },
]
