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
  { num: '5+',   label: 'Years Prod. Exp' },
  { num: '500+', label: 'Docs in RAG'      },
  { num: '3',    label: 'Degrees'          },
  { num: '3',    label: 'Certifications'   },
]

export const skillCategories: SkillCategory[] = [
  {
    icon: 'AI',
    title: 'AI / LLM',
    tags: ['LLM Agents', 'RAG Pipelines', 'Prompt Engineering', 'Multi-step Planning & Tool Use', 'Agent Evaluation', 'LangChain', 'LangGraph', 'Google Agent SDK (ADK)', 'LlamaIndex', 'Microsoft Copilot Studio', 'OpenAI API', 'Anthropic API', 'pgvector', 'Vector Databases'],
  },
  {
    icon: '</>',
    title: 'Backend & Data',
    tags: ['Python', 'C# (.NET)', 'Java', 'C++', 'Next.js', 'Express', 'FastAPI', 'Flask', 'REST API Design', 'Node.js', 'WebSockets', 'RBAC', 'SQL', 'PostgreSQL', 'MongoDB', 'Firebase Firestore', 'MySQL'],
  },
  {
    icon: 'Ent',
    title: 'Enterprise Platforms',
    tags: ['Power Apps', 'Power Automate', 'Microsoft Copilot Studio', 'Microsoft 365 (Teams, Entra ID, Graph)', 'ServiceNow', 'SailPoint IDN'],
  },
  {
    icon: 'Ops',
    title: 'Cloud & DevOps',
    tags: ['AWS (EC2, S3, Lambda)', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'GitHub Actions', 'Vercel', 'Railway', 'Git/GitHub', 'Production Deployments & Observability'],
  },
  {
    icon: 'UI',
    title: 'Frontend & Mobile',
    tags: ['React', 'React Native', 'Expo', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux Toolkit'],
  },
]

export const experience: ExperienceItem[] = [
  {
    date: 'Mar 2026 - Sep 2026',
    role: 'Technical Intern',
    company: 'Muskegon Polish Festival Inc.',
  },
  {
    date: 'Apr 2026 - Jul 2026',
    role: 'Forward Deployed Engineer Intern | Agentic Mobile Systems',
    company: 'Next Play',
    bullets: [
      'Embedded directly with non-technical, customer-facing stakeholders to translate ambiguous business workflows into shipped 0-1 production architectures, rapid-prototyping and iterating based on live customer feedback in a small, fast-moving team.',
      'Partnered with product and customer teams to accelerate real-time delivery of context-aware alerts across iOS and Android by architecting and deploying an end-to-end cross-platform push notification agent using React Native, TypeScript, APNs, and FCM routing.',
      'Built conversational agents in Microsoft Copilot Studio and with the Google Agent SDK (ADK), extending the agentic systems work across the mobile product.',
      'Reduced notification latency and improved user context retention by implementing multi-step orchestration with quiet-hours enforcement and LLM-style memory systems to maintain session state.',
      'Owned an entire product feature from spec to App Store: built the full Coach IQ module (XP tracking, marketplace schema, video fallback, mobile UI) end-to-end using React Native, TypeScript, and Node.js.',
      'Ensured 99.9% deployment reliability for production customer-facing systems by building and maintaining automated CI/CD pipelines via GitHub Actions for mobile builds and backend services.',
    ],
  },
  {
    date: 'Oct 2022 - May 2025',
    role: 'Full-Stack Software Engineer',
    company: 'Morningstar',
    bullets: [
      'Worked directly with internal business stakeholders to identify a critical workflow gap, then cut average lookup times by 40% by designing and deploying a production LLM-powered RAG agent over 500+ internal documents, using Lakehouse architecture principles to clean, unify, and ingest unstructured data into pgvector via FastAPI.',
      'Boosted RAG output quality and reduced hallucination rates by engineering a custom evaluation framework to benchmark prompt instructions, model reasoning, and factual grounding, ensuring stakeholders could trust the deployed system.',
      'Enabled multi-step autonomous actions with contextual memory by integrating tool-use workflows connecting core models to internal APIs, knowledge bases, databases, and enterprise platforms, including ServiceNow integrations, using LangChain and LlamaIndex.',
      'Built internal business applications with Microsoft Power Apps for stakeholder teams, alongside custom React and Python applications.',
      'Streamlined internal ML model deployments by designing distributed system architectures on AWS (EC2, S3, Lambda) and Kubernetes with robust automated CI/CD pipelines.',
      'Drove product adoption for thousands of active users by gathering requirements directly from business stakeholders and shipping high-performance full-stack features end-to-end using React, TypeScript, and Python with secure, role-based access control (RBAC).',
      'Accelerated team delivery speed by mentoring junior engineers, running technical design reviews with cross-functional partners, and authoring comprehensive system architecture documentation.',
    ],
  },
  {
    date: 'Jan 2020 - Apr 2021',
    role: 'Software Engineer',
    company: 'OTS Solutions',
    bullets: [
      'Shipped production Single Page Applications in React and Next.js, JavaScript (ES6), HTML5, and CSS3 as a core member of the UI team, built to specifications agreed with management, departments, and customers.',
      'Standardized the front end by converting existing screens into a reusable React component set with consistent AJAX and JSON patterns.',
      'Wired front-end features into MongoDB-backed services with light Node.js work, coordinating with Java, Spring Boot, and J2EE back-end teams.',
      'Owned testing and deployment of application changes across Dev, QA, and Production environments, from first build to live release.',
      'Drove Continuous Integration and Continuous Deployment (CI/CD) through automated Jenkins builds for every application release.',
      'Kept codebases stable across Git, SVN, and Bitbucket, coordinating version control across concurrent projects and releases.',
      'Brought user feedback and requirement analysis into daily Scrum standups, estimation, and review meetings, and maintained technical documentation for the development environment.',
    ],
  },
  {
    date: 'Mar 2019 - Dec 2019',
    role: 'Junior Software Developer',
    company: 'ValueMomentum',
    bullets: [
      'Delivered Single Page Applications in Angular 8/9, JavaScript (ES6), HTML5, and CSS3 as a core member of the UI team, building directly from end-user requirements gathered with management, departments, and customers.',
      'Rebuilt legacy UI screens as reusable components with CSS3, jQuery, AJAX, and HTML5, cutting duplication across the application.',
      'Partnered with Java, Spring Boot, and J2EE back-end developers to improve the usability of the code and the end-user experience.',
      'Ran the full release path end to end, learning code development from scratch: developing in the Dev system, testing, and deploying through QA into Production.',
      'Automated the build process with Jenkins 2.7.1, achieving Continuous Integration and Continuous Deployment (CI/CD) for application releases.',
      'Protected release quality with automated tests in Karma, JUnit, Jasmine, and Jtest validating the code before it moved through QA to Production.',
      'Operated in daily Scrum standups, estimation, and requirement review meetings, converted user feedback into product improvements, and kept technical documentation current.',
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
  {
    degree: 'B.S. in Computer Science',
    school: 'SR International Institute of Technology (SRIIT)',
    location: 'Hyderabad, India',
    date: 'May 2021',
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
    name: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    date: '',
    badge: 'AI',
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
      'Production-grade 0-1 agentic RAG system with semantic chunking, OpenAI embeddings, PostgreSQL + pgvector ANN search, top-k retrieval, and prompt-engineered context injection using Claude and GPT-4o. Guardrailed prompts and automated evaluation tests keep answers grounded across 50+ complex queries, and a LangGraph + Google ADK multi-agent planner breaks hard questions into sub-retrievals. Deployed on Vercel and Railway with a secure streaming chat UI.',
    tech: ['OpenAI Embeddings', 'PostgreSQL', 'pgvector', 'Claude', 'GPT-4o', 'FastAPI', 'LangGraph', 'Google ADK', 'Vercel AI SDK', 'Railway', 'GitHub Actions'],
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
  {
    number: '03',
    title: 'Hospital Intake Triage',
    date: '2024',
    context: 'Personal Project',
    description:
      'Intake triage prototype on Microsoft Power Platform and Dataverse that automates patient scheduling, record updates, notifications, triage, and case routing. Includes Power Apps and Power Pages intake forms and tracking tools with role-based access control, plus Power BI dashboards for intake volume, wait times, and staff workload.',
    tech: ['Power Apps', 'Power Automate', 'Power Pages', 'Copilot Studio', 'Dataverse', 'Power BI'],
    links: [],
  },
]
